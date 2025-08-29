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
                movingBkgd.style.left = `${self.innerWidth * 2}px`;
            } else if (event.gamma > 45) {
                movingBkgd.style.left = "0";
            } else {
                movingBkgd.style.left = `${self.innerWidth * 2 / 90 * event.gamma - self.innerWidth}px`;  
                        // 2 refers to the 2 x self.innerWidth distance the background moves, between gamma=-45 and gamma=45.
                        // 90 refers to gamma degrees between -45 to the left and 45 to the right
            };
        } else {
            if (event.beta < -45) {
                movingBkgd.style.left = `${self.innerWidth * 2}px`;
            } else if (event.beta > 45) {
                movingBkgd.style.left = "0";
            } else {
                movingBkgd.style.left = `${self.innerWidth * 2 / 90 * event.beta - self.innerWidth}px`;  
                        // 2 refers to the 2 x self.innerWidth distance the background moves, between beta=-45 and beta=45.
                        // 90 refers to beta degrees between -45 to the left and 45 to the right
            };
        }
    })
}






    