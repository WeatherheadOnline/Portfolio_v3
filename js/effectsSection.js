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

let currentSample = 0;

switchIFrame(0); // on page load

leftArrow.addEventListener("click", SFXmoveLeft);
rightArrow.addEventListener("click", SFXmoveRight);
document.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
    switch(event.keyCode){
        case 37: SFXmoveLeft(); break;  // "left" arrow
        case 39: SFXmoveRight(); break;  // "right" arow
    }
};

function SFXmoveLeft() {
    removeSFXclasses(currentSample);
    if(currentSample > 0) {
        currentSample--;
    } else {
        currentSample = samples.length - 1;
    };
    addSFXclasses(currentSample);
    SFX_iframe.children[0].src = samples[currentSample].source;
}

function SFXmoveRight() {
    removeSFXclasses(currentSample);
    if(currentSample < samples.length - 1) {
        currentSample++;
    } else {
        currentSample = 0;
    };
    addSFXclasses(currentSample);
    SFX_iframe.children[0].src = samples[currentSample].source;
}

const buttons = Array.from(document.getElementsByClassName("SFX_thumbnail"));
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        switchIFrame(index);
    });
});

function switchIFrame(index) {
    removeSFXclasses(currentSample);    // at this point, "currentSample" refers to the previous sample
    currentSample = index;
    SFX_iframe.children[0].src = samples[index].source;
    addSFXclasses(index);
};

function removeSFXclasses(index) {
    if(samples[index].int){
        SFX_iframe.classList.remove("int");
        SFX_iframe.classList.remove(samples[index].intType);
    };
}

function addSFXclasses(index) {
    if(samples[index].int){
        SFX_iframe.classList.add("int");
        SFX_iframe.classList.add(samples[index].intType);        
    };
}