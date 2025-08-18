const splash = document.getElementById("splash-moving-bkgd");
document.addEventListener("mousemove", function(e) {         
    splash.style.backgroundPositionX = `${e.pageX * -0.15}px, ${e.pageX*0.10}px`;
});
