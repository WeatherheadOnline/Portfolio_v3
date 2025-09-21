/* *********************
***   Instructions   ***
************************

(1) HTML: Add the class name "holographic-menu" to each input or textarea (or other) element you want to add to the holographic menu.
(2) HTML: Add the custom property 'data-holomenu=""' to each of the inputs that have className="holographic-menu".
(3) HTML: Fill in the value for the new custom property. This determines the text the user sees on the corresponding button in the holographic menu.
(4) CSS: Add these properties:

Cheat sheet: 
- To add an input element to the holographic menu: give it the class name "holograph-menu".
- To change how each input's name appears in the menu: change the value of its "data-holomenu" property.


*/



/* ~~~ Generate the menu buttons ~~~ */

const inputElements = Array.from(document.getElementsByClassName("holograph-menu"));
const holographButtons = document.getElementById("holograph-buttons");
const holoIcon = document.getElementById("holograph-icon");
const closeHoloMenu = document.getElementById("close-holograph-menu");

inputElements.forEach(displayInput);

function displayInput(inputField) {
    btnID = inputField.getAttribute("name") + "-holo";
    holographButtons.innerHTML += `
        <button id=${btnID} class="holomenu-btn" onclick="buttonListenerEvent(${inputField.id})">
            ${inputField.getAttribute("data-holomenu")}
        </button>
   `;
}

setTimeout(() => {
    holographButtons.innerHTML += '<span id="close-holograph-menu" onclick="holoMenuOff()">&times;</span>'
}, 500);

function buttonListenerEvent(inputFieldTarget) {
    inputFieldTarget.focus();
}

/* ~~~ Toggle the holographic menu on and off ~~~ */

holoIcon.addEventListener("click", holoMenuOn);

function holoMenuOn() {
    holographButtons.style.display = "flex";
    holoIcon.style.display = "none";
}

function holoMenuOff() {
    holographButtons.style.display = "none";
    holoIcon.style.display = "block";
}