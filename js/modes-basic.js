const modes = document.getElementById("modes");
const stylesheets = document.getElementsByClassName("modesheet");
const lightbutton = document.getElementById("lightmode");
const darkbutton = document.getElementById("darkmode");
let activemode = "darkmode";

darkbutton.addEventListener("click", () => {SwitchMode("darkmode");});
lightbutton.addEventListener("click", () => {SwitchMode("lightmode");});

function SwitchMode(newmode) {
    ChangeActive(newmode);
    RemoveSheets();
    AddSheets(newmode);
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