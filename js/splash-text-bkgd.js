const splash = document.getElementById("splash-moving-bkgd");

if ("ontouchstart" in window) { 
    addMobileListeners();
} else {
    addDesktopListeners();
};

function addDesktopListeners() {
    document.addEventListener("mousemove", function(e) {         
        splash.style.backgroundPositionX = `${e.pageX * -0.15}px, ${e.pageX*0.25}px`;
    });
}

function addMobileListeners() {
    window.addEventListener("deviceorientation", function(event){    
        if (screen.height > screen.width) {  // ie in portrait
            if (event.gamma < -45) {
                splash.style.backgroundPositionX = "center, center";
            } else if (event.gamma > 45) {
                 splash.style.backgroundPositionX = "center, center";
           } else {
                splash.style.backgroundPositionX = `${event.gamma * -1}px, ${event.gamma * -2}px`;  
            };
        } else {
            if (event.beta < -45) {
                splash.style.backgroundPositionX = "center, center";
            } else if (event.beta > 45) {
                splash.style.backgroundPositionX = "center, center";
            } else {
                splash.style.backgroundPositionX = `${event.gamma * -2}px, ${event.gamma * -4}px`;  
            };
        }
    })
}