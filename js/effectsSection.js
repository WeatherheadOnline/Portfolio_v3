const samples = [
    // Start with the glitter cascade: it doesn't have a text background or an interactive badge.
    {
        name: "SFX_oceanBubbles",
        source: "effectsThumbnails/oceanBubbles.html",
        int: false,
        svgCode: '<svg viewBox="0 0 20 20"><g transform="translate(-66.1,-51.9)"><path style="fill:none;stroke-linecap:round" d="m 76.5,62 c 0,0 1.3,-0.6 2.8,0.2 1.5,0.8 1.7,2.2 1.7,2.2 m 2.4,0.3 a 5.5,5.5 0 0 1 -5.5,5.5 5.5,5.5 0 0 1 -5.5,-5.5 5.5,5.5 0 0 1 5.5,-5.5 5.5,5.5 0 0 1 5.5,5.5 z" /><path style="fill:none;stroke-linecap:round" d="m 71.5,59.5 c 0,0 1,-0.4 2.1,0.1 1.1,0.6 1.3,1.6 1.3,1.6 m 1.8,0.2 a 4.1,4.1 0 0 1 -4.1,4.1 4.1,4.1 0 0 1 -4.1,-4.1 4.1,4.1 0 0 1 4.1,-4.1 4.1,4.1 0 0 1 4.1,4.1 z" /><path style="fill:none;stroke-linecap:round" d="m 79.6,54.5 c 0,0 0.6,-0.3 1.3,0.1 0.7,0.4 0.8,1.0 0.8,1.0 m 1.2,0.2 a 2.6,2.6 0 0 1 -2.6,2.6 2.6,2.6 0 0 1 -2.6,-2.6 2.6,2.6 0 0 1 2.6,-2.6 2.6,2.6 0 0 1 2.6,2.6 z" /></g></svg>',
        textBkgd: true,
    },
    {
        name: "SFX_shimmerTextAuto",
        source: "effectsThumbnails/shimmerTextAuto.html",
        int: false,
        svgCode: '<svg viewBox="0 0 20 20"><path style="display:inline;fill:none;stroke-width:0.6;stroke-linejoin:miter;stroke-miterlimit:4" d="M 5.1,0.3 C 5.1,2.3 5,3.5 4.5,4.2 3.9,3.9 3.3,3.2 2.2,2.2 c 1,1 1.6,1.7 1.9,2.3 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -0.7,0.5 -1.9,0.6 -3.9,0.6 v 0 c 2,0 3.3,0 3.9,0.5 0,0 0,0 0,0 0.1,0 0.1,0.1 0.2,0.2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0.1,0 0,0 0,0 0,0 H 4.6 C 5.1,6.7 5.1,8 5.1,10.5 5.2,8 5.2,6.7 5.7,6 6.3,6.2 6.9,6.9 8,8 6.9,6.9 6.3,6.2 6,5.6 c 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 l 0,0 C 6.7,5.1 8.1,5.1 10.6,5.1 8,5.1 6.6,5 5.9,4.4 c 0,0 0,0 0,0 C 6.3,3.9 7,3.3 8,2.2 7,3.2 6.3,3.9 5.7,4.2 c 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 C 5.9,4.4 5.8,4.3 5.8,4.3 5.8,4.3 5.8,4.3 5.8,4.3 5.7,4.2 5.7,4.2 5.7,4.2 5.2,3.5 5.1,2.4 5.1347928,0 Z M 4.6,5.9 c 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 C 4,6.1 3.3,6.9 2.3,8 3.3,6.9 4,6.2 4.6,5.9 Z M 5.8,5.8 c 0,0 0,0 0,0 0,0 0,0 0,0 z" /><path style="stroke-width:1;stroke-linecap:round" d="M 1.2,19.7 12.3,0.4" /><path style="stroke-width:1;stroke-linecap:round" d="M 2.9,19.7 14,0.4" /><path style="stroke-width:1;stroke-linecap:round" d="M 4.8,19.7 15.9,0.4" /><path style="stroke-width:1;stroke-linecap:round" d="M 8.4,19.7 19.6,0.4" /></svg>',
        textBkgd: true,
    },
    {
        name: "SFX_shimmerTextManual",
        source: "effectsThumbnails/shimmerTextManual.html",
        int: true,  // ie. it's interactive
        intText: "<p>Interactive!</p><p>Move your mouse or</p><p>tilt your device</p>",
        svgCode: '<svg viewBox="0 0 20 20"><path style="display:inline;fill:none;stroke-width:0.6;stroke-linejoin:miter;stroke-miterlimit:4" d="M 5.1,0.3 C 5.1,2.3 5,3.5 4.5,4.2 3.9,3.9 3.3,3.2 2.2,2.2 c 1,1 1.6,1.7 1.9,2.3 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -0.7,0.5 -1.9,0.6 -3.9,0.6 v 0 c 2,0 3.3,0 3.9,0.5 0,0 0,0 0,0 0.1,0 0.1,0.1 0.2,0.2 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0.1,0 0,0 0,0 0,0 H 4.6 C 5.1,6.7 5.1,8 5.1,10.5 5.2,8 5.2,6.7 5.7,6 6.3,6.2 6.9,6.9 8,8 6.9,6.9 6.3,6.2 6,5.6 c 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 l 0,0 C 6.7,5.1 8.1,5.1 10.6,5.1 8,5.1 6.6,5 5.9,4.4 c 0,0 0,0 0,0 C 6.3,3.9 7,3.3 8,2.2 7,3.2 6.3,3.9 5.7,4.2 c 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 C 5.9,4.4 5.8,4.3 5.8,4.3 5.8,4.3 5.8,4.3 5.8,4.3 5.7,4.2 5.7,4.2 5.7,4.2 5.2,3.5 5.1,2.4 5.1347928,0 Z M 4.6,5.9 c 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 0,0 C 4,6.1 3.3,6.9 2.3,8 3.3,6.9 4,6.2 4.6,5.9 Z M 5.8,5.8 c 0,0 0,0 0,0 0,0 0,0 0,0 z" /><path style="stroke-width:1;stroke-linecap:round" d="M 1.2,19.7 12.3,0.4" /><path style="stroke-width:1;stroke-linecap:round" d="M 2.9,19.7 14,0.4" /><path style="stroke-width:1;stroke-linecap:round" d="M 4.8,19.7 15.9,0.4" /><path style="stroke-width:1;stroke-linecap:round" d="M 8.4,19.7 19.6,0.4" /><path style="stroke-width:1.4" d="m 12.9,15.7 h 6 m -3,3 v -6" /></svg>',
        textBkgd: true,
    },
    {
        name: "SFX_glitter-cascade",
        source: "effectsThumbnails/particlesAcrossTop.html",
        int: false,
        svgCode: '<svg viewBox="0 0 20 20"><g transform="translate(-65.7,-91.7)"><path style="display:inline;fill:none;stroke-width:0.6;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4" d="m 65.9,100.4 c 5.3,0 5.7,0 5.7,-5.7 0,5.6 0,5.6 5.7,5.7 -5.7,0 -5.6,0 -5.7,5.7 0,-5.7 0,-5.8 -5.7,-5.7 z m 2.7,-3 c 1,1 1.7,1.8 2,2.4 0,0 0.2,-0.2 0.3,-0.3 -0.6,-0.3 -1.3,-1 -2.3,-2 z m 6,0 c -1.1,1 -1.8,1.8 -2.4,2 0,0.1 0.2,0.2 0.3,0.3 0.3,-0.6 1,-1.3 2.1,-2.4 z m -4,3.5 c -0.2,0.6 -0.9,1.4 -2,2.5 1.1,-1.1 1.9,-1.9 2.5,-2.1 -0.1,-0.2 -0.2,-0.3 -0.4,-0.4 z m 1.9,0 c -0.1,0 -0.2,0.2 -0.3,0.4 0.6,0.3 1.3,1 2.4,2.1 -1.1,-1.2 -1.8,-1.9 -2.1,-2.5 z" /><path style="display:inline;fill:none;stroke-width:0.6;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4" d="m 78.4,96.9 c 3.4,0 3.6,0 3.6,-3.6 0,3.6 0,3.6 3.6,3.7 -3.6,0 -3.6,0 -3.7,3.6 0,-3.6 0,-3.7 -3.6,-3.7 z" /><path style="display:inline;fill:none;stroke-width:0.6;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4" d="m 74.1,105.7 c 5.4,0 5.7,0 5.7,-5.8 0,5.7 0,5.7 5.8,5.8 -5.8,0 -5.7,0 -5.8,5.8 0,-5.8 0,-5.8 -5.7,-5.8 z" /></g></svg>',
        textBkgd: false,
    },
    {
        name: "SFX_mineral",
        source: "effectsThumbnails/mineralBkgd.html",
        int: true,  // ie. it's interactive
        intText: "<p>Interactive!</p><p>Move your mouse or</p><p>tilt your device</p>",
        svgCode: '<svg viewBox="0 0 20 20" ><g transform="matrix(1,0,0,1,-25.3,-54.4) translate(1,2)"><path style="fill:none;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round" d="m 29.1,70.3 5.9,-3.2" /><path style="fill:none;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round" d="m 29.1,70.4 0.6,-6.6" /><path style="fill:none;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round" d="m 31,55.3 -4.8,8.2" /><path style="fill:none;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round" d="m 41.9,61.7 -4.7,8.1" /><path style="fill:none;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round" d="m 33.1,58.1 -4.9,8.1" /><path style="fill:none;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round" d="m 38.4,61.3 -4.8,8" /><path style="fill:none;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round" d="m 38.6,54.3 -7.5,1" /><path style="fill:none;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round" d="m 38.5,54.3 -4,1.4" /><path style="fill:none;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round" d="m 38.6,54.4 1.2,4.5" /><path style="fill:none;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round" d="m 38.6,54.3 3.3,7.3" /><path style="fill:none;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round" d="m 38.7,54.4 -5.5,3.5" /><path style="fill:none;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round" d="M 38.5,54.7 38.1,61.1" /><path style="fill:none;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round" d="M 29.1,70.4 37.1,69.9" /><path style="fill:none;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round" d="m 29.2,70.2 4.4,-0.9" /><path style="fill:none;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round" d="M 29.1,70.4 28.2,66.1" /><path style="fill:none;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round" d="M 29.2,70.3 26.2,63.6" /><path style="fill:none;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round" d="m 31,55.3 3.5,0.5 5.3,3.2 2.2,2.7 -3.6,-0.4 -5.2,-3.2 z" /><path style="fill:none;stroke-width:0.6;stroke-linecap:round;stroke-linejoin:round" d="m 26.1,63.6 3.8,0.4 5.2,3.1 2,2.8 -3.5,-0.6 -5.4,-3 -2.1,-2.6" /></g></svg>',
        textBkgd: false,
    },
    {
        name: "SFX_ripples",
        source: "effectsThumbnails/ripples.html",
        int: true,  // ie. it's interactive
        intText: "<p>Interactive!</p><p>Click to see more</p>",
        svgCode: '<svg viewBox="0 0 19.5 19.5"><g transform="matrix(01,0,0,1,71.3,-102.8) translate(2 -4)" style="display:inline"><path style="fill:none;stroke-width:1;stroke-linecap:butt" d="m -53.5,116.8 c -1.4,-0.1 -2.8,-0.1 -4.3,-0.1 -6.4,0 -12.4,0.7 -16.2,1.8 m 0,4.9 c 3.7,1.1 9.7,1.8 16.2,1.8 1.4,0 2.9,0 4.3,-0.1" /><path style="display:inline;fill:none;stroke-width:1;stroke-linecap:butt" d="m -53.5,118.3 c -1.4,-0.1 -2.9,-0.2 -4.3,-0.2 -7.2,0 -13,1.2 -13,2.7 0,1.5 5.8,2.7 13,2.7 1.5,0 2.9,0.1 4.3,-0.2" /><path style="display:inline;fill:none;stroke-width:1;stroke-linecap:butt" d="m -53.5,120 c -1.1,-0.3 -2.7,-0.4 -4.3,-0.4 -3.2,0 -5.9,0.6 -5.9,1.2 0,0.7 2.6,1.2 5.9,1.2 1.6,0 3.2,-0.1 4.3,-0.4" /></g><g transform="matrix(1,0,0,1,71.8,-103.8) translate(2 -3)" style="display:inline"><path style="display:inline;fill:none;stroke-width:0.5;stroke-linecap:butt" d="m -74,114.8 c 1.3,0.1 2.8,0.2 4.3,0.2 5.1,0 9.3,-0.9 9.3,-2 0,-1.1 -4.1,-2 -9.3,-2 -1.5,0 -3,0.1 -4.3,0.2" /><path style="display:inline;fill:none;stroke-width:0.5;stroke-linecap:butt" d="m -74,114 c 1.1,0.2 2.7,0.4 4.3,0.4 3.4,0 6.1,-0.6 6.1,-1.3 0,-0.7 -2.7,-1.3 -6.1,-1.3 -1.6,0 -3.2,0.1 -4.3,0.4" /><ellipse style="display:inline;fill:none;stroke-width:0.5" cx="-69.7" cy="113" rx="2.7" ry="0.6" /></g></svg>',
        textBkgd: false,
    },
];

const SFX_iframe = document.getElementById("SFX_iframe");
const leftArrow = document.getElementById("SFX_leftArrow");
const rightArrow = document.getElementById("SFX_rightArrow");
const SFX_thumbnails = document.getElementById("SFX_all_thumbnails");
const hgroup = document.getElementById("Effects").children[2].children[0];
const SFX_panel = document.getElementById("SFX_panel");
const int_text = document.getElementById("SFX_interactive");

// ~~~~~~~~~~~~ Add the thumbnail buttons ~~~~~~~~~~~~~~~~~~ //

for (let effect = 0; effect <= samples.length - 1; effect++) {
    const buttonDiv = document.createElement("div");
    buttonDiv.className = "SFX_thumbnail";
    buttonDiv.id = samples[effect].name;
    buttonDiv.innerHTML = samples[effect].svgCode;
    SFX_thumbnails.appendChild(buttonDiv);
}

const SFXbuttons = Array.from(document.getElementsByClassName("SFX_thumbnail"));
SFXbuttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        switchIFrame(index);
    });
});


// ~~~~~~~~~~~~ Handle click events to switch between demos ~~~~~~~~~~//

let currentSample = 0;
int_text.style = "display: none;"

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
    switchIFrame(currentSample);
}

function SFXmoveRight() {
    removeSFXclasses(currentSample);
    if(currentSample < samples.length - 1) {
        currentSample++;
    } else {
        currentSample = 0;
    };
    switchIFrame(currentSample);
}

// ~~~~~~~ Where the actual work happens: ~~~~~~~ //

function switchIFrame(index) {
    removeSFXclasses(currentSample);    // on this line, "currentSample" refers to the now-previous sample
    currentSample = index;
    SFX_iframe.children[0].src = samples[index].source;
    addSFXclasses(index);
    changeBkgd(currentSample);
};

function changeBkgd(index) {
    if(samples[index].textBkgd) {
        hgroup.style.backgroundColor = "var(--SFX-bkgd)";
        SFX_panel.style.backgroundColor = "var(--SFX-bkgd)";
    } else {
        hgroup.style.backgroundColor = "transparent";
        SFX_panel.style.backgroundColor = "transparent";
    }    
}

function removeSFXclasses(index) {
    if(samples[index].int) {
        int_text.style = "display: none";
    }
    SFXbuttons[index].classList.remove("active");    
}

function addSFXclasses(index) {
    if(samples[index].int){
        int_text.innerHTML = samples[index].intText;
        int_text.style = "display: visible";
    }
    SFXbuttons[index].classList.add("active");
}

switchIFrame(currentSample);  // when the page initially loads, ensure the "actve" class gets applied, plus any "int" classes