const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "gray",
    "lightblue",
]

document.getElementById("portfolioLink").addEventListener("click", fountain);
document.getElementById("effectsLink").addEventListener("click", fountain);
document.getElementById("contactLink").addEventListener("click", fountain);
document.getElementById("aboutLink").addEventListener("click", fountain);

const header = document.getElementsByTagName("header");
const numberOfParticles = 5;

function fountain(event) {
    const targetID = event.target.getAttribute("id");
    for (let i = 0; i < numberOfParticles; i++){
        makeParticle(event, targetID, i);
        animateParticle(targetID, i);
        removeParticle(targetID, i);
    }
}   

function makeParticle(event, targetID, i) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "20");
	svg.setAttribute("height", "20");
    svg.setAttribute("class", "particle");
    svg.setAttribute("id", `${targetID}${i}`);
    svg.style.left = `${event.clientX}px`;
    svg.style.top = `${event.clientY}px`;
    svg.style.fill = colors[Math.floor(Math.random() * colors.length)];

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("r", "10");
    circle.setAttribute("cx", "10");
    circle.setAttribute("cy", "10");

    svg.appendChild(circle);
    header[0].appendChild(svg);
}

const distance = 30;
function animateParticle(targetID, i) {
    const direction = Math.random()*6.28; // 6.28 radians in a circle. Angle must be in radians for trig calculations in Javascript.
    const moveX = Math.cos(direction) * distance;
    const moveY = Math.sin(direction) * distance;
    const particle = document.getElementById(`${targetID}${i}`);
    // particle.style.transitionDuration = "1s";
    particle.style.translate = `${moveX}px ${moveY}px`;  // seems to do the same thing

    // particle.style.transform = `translate(${moveX}px, ${moveY}px)`;  // seems to do the same thing
}

function removeParticle(targetID, i) {
    setTimeout(function() {
        const particle = document.getElementById(`${targetID}${i}`);
        particle.remove();
    }, 1000)
}


