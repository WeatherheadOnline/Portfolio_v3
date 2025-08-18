const modes = document.getElementById("modes");
const stylesheets = document.getElementsByClassName("modesheet");
const lightbutton = document.getElementById("lightmode");
const darkbutton = document.getElementById("darkmode");
const mysterybutton = document.getElementById("mysterymode");
let activemode = "darkmode";
let isMysteryActive = false;
const mysteryModes = [
    "redmode",
    "greenmode",
    "bluemode",
];

darkbutton.addEventListener("click", () => {SwitchMode("darkmode");});
lightbutton.addEventListener("click", () => {SwitchMode("lightmode");});
mysterybutton.addEventListener("click", () => {
    let mode = mysteryModes[Math.floor(Math.random() * mysteryModes.length)];
    const index = mysteryModes.indexOf(mode);
    mysteryModes.splice(index, 1);
    if (mysteryModes.length < 1) {
        mysterybutton.style.display = "none";
    };
    AddButton(mode);
    SwitchMode(mode);
});

function SwitchMode(newmode) {
    ChangeActive(newmode);
    RemoveSheets();
    AddSheets(newmode);
    if (!isMysteryActive) {
        isMysteryActive = true;
        mysterybutton.style.display = "unset";
    }
}

function ChangeActive(newmode) {
    document.getElementById(activemode).classList.remove("active");
    activemode = newmode;
    document.getElementById(activemode).classList.add("active");
}

function RemoveSheets() {
    for (let i=0; i < stylesheets.length; i++) {
        document.getElementsByClassName("modesheet")[i].remove();
    }
}

function AddSheets(newmode) {
    const modesheet = document.createElement("link");
    modesheet.className = "modesheet";
    modesheet.rel = "stylesheet";
    modesheet.type = "text/css";
    modesheet.href = `css/_${newmode}.css`;
    document.head.appendChild(modesheet);
}

function AddButton(addmode) {
    const newButton = document.createElement("div");
    newButton.className = "mode-button";
    newButton.id = `${addmode}`;
    modes.appendChild(newButton);
    newButton.addEventListener("click", () => {SwitchMode(`${addmode}`);} );
}