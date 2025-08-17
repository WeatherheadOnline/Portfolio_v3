const container = document.getElementById("ripples");

        const rippleSpeed = 3000;   // Note: In CSS, set svg{transition} to rippleSpeed/1000
        const rippleDelay = rippleSpeed / 6;
        const rippleTimeoutInt = rippleSpeed / 2;
        const rippleTimeoutClick = rippleSpeed / 3;
        let seedX;
        let seedY;
        let clickThrottle = false;
    
        for(let times = 1; times <= 4; times++) {  // Populate the page with ripples when it first loads
            ripplesFromInterval();
        }
        
        let s = setInterval(ripplesFromInterval, 2000);  
        container.addEventListener("click", ripplesFromClick);

        function ripplesFromInterval() {
            seedX = Math.floor(Math.random() * 100);
            seedY = Math.floor(Math.random() * 100);
            let r = setInterval(makeRipple, rippleDelay, seedX, seedY);
            setTimeout(() => clearInterval(r), rippleTimeoutInt);
        }

        function ripplesFromClick(event) {
            if(!clickThrottle) {
                seedX = Math.floor(event.pageX/window.innerWidth*100);   // Note: convert units from px to vh/vw
                seedY = Math.floor(event.pageY/window.innerHeight*100);
                makeRipple(seedX, seedY, true);  // Note: the third parameter indicates whether the ripple originates from a click, rather than from setInterval.
                let r = setInterval(makeRipple, rippleDelay, seedX, seedY, true);  // Note: this generates a second and third ripple in the same position
                setTimeout(() => clearInterval(r), rippleTimeoutClick);
                clickThrottle = true;
                setTimeout(() => clickThrottle = false, 300);
            }
        }

        function makeRipple(seedX, seedY, isFromClick) {
            const rippleDiv = document.createElement("div");
            rippleDiv.classList.add("ripple");
            if(isFromClick){
                rippleDiv.classList.add("rippleClick");
                rippleDiv.style.left = `calc(${seedX}vw - 25px)`;
                rippleDiv.style.top = `calc(${seedY}vh - 2px)`;
            } else {
                rippleDiv.classList.add("rippleInt");
                rippleDiv.style.left = `${seedX}vw`;
                rippleDiv.style.top = `${seedY}vh`;
            };
            
            const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("width", "60");
            svg.setAttribute("height", "11");

            const oval = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
            oval.setAttribute("rx", "29");
            oval.setAttribute("ry", "5");
            oval.setAttribute("cx", "30");
            oval.setAttribute("cy", "5.5");
            
            svg.appendChild(oval);
            rippleDiv.appendChild(svg);
            container.appendChild(rippleDiv);

            setTimeout(scalePerspective, 100, rippleDiv, seedX, seedY);
            setTimeout(deleteRipple, rippleSpeed, rippleDiv);
        }

        function scalePerspective(rippleDiv, seedX, seedY) {
            scaleBy = seedY / 40 + 0.2;  
            rippleDiv.style.transform = `scale(${scaleBy})`;
        };

        function deleteRipple(ripple) {ripple.remove();}; 
