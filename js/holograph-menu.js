/* 
Here is an alternative method of gathering all input fields (including textareas). 
Its benefit is that it doesn't require addition of HTML class names to scoop up all input and textarea elements.
Its drawback is that it doesn't list input fields in the order in which they appear in the HTML. Instead, it lists all input elements followed by all textarea elements. 
*/
// const inputElements = Array.from(document.getElementsByTagName("input"));
// const textareaElements = Array.from(document.getElementsByTagName("textarea"));
// inputElements.push(...textareaElements);


/* *********************
***   Instructions   ***
************************

Cheat sheet: 
- To add an input element to the holographic menu: give it the class name "holograph-menu".
- To change how each input's name appears in the menu: change the value of its "data-holomenu" property.

In the HTML file:
(1) Add the class name "holographic-menu" to each input or textarea (or other) element you want to add to the holographic menu.
    ** If you don't want to add the class name, substitute lines 6-8 (above) for the "const inputElements = " declaration below, on line ___.

*** Note to self: fill in the line number in step 1 alt instructions ***

(2) Add the custom property 'data-holomenu=""' to each of the inputs that have className="holographic-menu".
(3) Fill in the value for the new custom property. This determines the text the user sees in the holographic menu.

*/

const inputElements = Array.from(document.getElementsByClassName("holograph-menu"));
const holographButtons = document.getElementById("holograph-buttons");

inputElements.forEach(displayInput);

function displayInput(inputField) {
    btnID = inputField.getAttribute("name") + "-holo";
    holographButtons.innerHTML += `
        <button id=${btnID} class="holomenu-btn" onclick="buttonListenerEvent(${inputField.id})">
            ${inputField.getAttribute("data-holomenu")}
        </button>
   `;
}


function buttonListenerEvent(inputFieldTarget) {
    console.log(inputFieldTarget);
    inputFieldTarget.focus();
}
