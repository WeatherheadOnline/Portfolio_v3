const samples = [
    {
        name: "SFX_mineral",
        source: "effectsThumbnails/mineralBkgd.html",
        int: true,  // ie. it's interactive
        intType: "interactiveMouse"  // type of interactivity: move your mouse or device
    },
    {
        name: "SFX_cascade",
        source: "effectsThumbnails/particlesAcrossTop.html",
        int: false
    },
    {
        name: "SFX_shimmerTextAuto",
        source: "effectsThumbnails/shimmerTextAuto.html",
        int: false
    },
    {
        name: "SFX_shimmerTextManual",
        source: "effectsThumbnails/shimmerTextManual.html",
        int: true,  // ie. it's interactive
        intType: "interactiveMouse" // type of interactivity: move your mouse or device
    },
    {
        name: "SFX_oceanBubbles",
        source: "effectsThumbnails/oceanBubbles.html",
        int: false
    },
    {
        name: "SFX_ripples",
        source: "effectsThumbnails/ripples.html",
        int: true,  // ie. it's interactive
        intType: "interactiveClick"  // type of interactivity: click/tap
    },
];

const SFX_iframe = document.getElementById("SFX_iframe");
const leftArrow = document.getElementById("SFX_leftArrow");
const rightArrow = document.getElementById("SFX_rightArrow");

const mineralButton = document.getElementById("SFX_mineral");
const cascadeButton = document.getElementById("SFX_cascade");
const shimmerTextAutoButton = document.getElementById("SFX_shimmerTextAuto");
const shimmerTextManualButton = document.getElementById("SFX_shimmerTextManual");
const oceanBubblesButton = document.getElementById("SFX_oceanBubbles");
const ripplesButton = document.getElementById("SFX_ripples");

let currentSample = 0;

const buttons = Array.from(document.getElementsByClassName("SFX_thumbnail"));
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        switchIFrame(button.id);
    });
});

leftArrow.addEventListener("click", function() {
    if(currentSample > 0) {
        if(samples[currentSample].int){
            SFX_iframe.classList.remove("int");
            SFX_iframe.classList.remove(samples[currentSample].intType);
        };
        currentSample--;
        if(samples[currentSample].int){
            SFX_iframe.classList.add("int");
            SFX_iframe.classList.add(samples[currentSample].intType);        
        };
        SFX_iframe.children[0].src = samples[currentSample].source;
    };
});

rightArrow.addEventListener("click", function() {
    if(currentSample < samples.length - 1) {
        if(samples[currentSample].int){
            SFX_iframe.classList.remove("int");
            SFX_iframe.classList.remove(samples[currentSample].intType);
        };
        currentSample++;
        if(samples[currentSample].int){
            SFX_iframe.classList.add("int");
            SFX_iframe.classList.add(samples[currentSample].intType);        
        };
        SFX_iframe.children[0].src = samples[currentSample].source;
    };
});

function switchIFrame(SFX_name) {
    if(samples[currentSample].int){
            SFX_iframe.classList.remove("int");
            SFX_iframe.classList.remove(samples[currentSample].intType);
    };
    const myObject = samples.find((element) => element.name === SFX_name);
    currentSample = samples.indexOf(myObject);
    SFX_iframe.children[0].src = myObject.source;
        if(samples[currentSample].int){
            SFX_iframe.classList.add("int");
            SFX_iframe.classList.add(samples[currentSample].intType);        
        };
};
