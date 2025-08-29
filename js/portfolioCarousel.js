const portfolioItems = [
    {
        name: "CSSsandbox",
        articleLink: "/CSSsandbox.html",
        imgSrc: "img/folio_sandbox.png",
        h3Text: "CSS/Javascript Design Showcase",
        bodyText: "<p>Check out these neat designs and effects I've created. My favorite is one that looks iridescent.</p><p>Any of these designs and effects are available for use on your website. We can make adjustments to color palettes and other design elements to make something that works seamlessly with your brand.</p><p>Like my other sites, this design showcase is fully responsive for desktop and mobile devices.</p>",
    },
    {
        name: "jewelery",
        href: "https://www.weatherheaddesigns.com",
        imgSrc: "img/folio_weatherheaddesigns.png",
        h3Text: "WeatherheadDesigns.com",
        bodyText: "<p>My personal jewellery website. I'm an avid amateur jeweller in my spare time.</p><p>Features:</p><ul><li>Inventory can be updated quickly, easily and seamlessly: new product details get added to a database, and the code does the rest of the work.</li><li>Click on a thumbnail to see more information about each product.</li><li>The background is sparkly: try moving your mouse or tilting your mobile device.</li></ul>",
    },
    {
        name: "CreNav",
        href: "/CreNav.html",
        imgSrc: "img/folio_crenav.png",
        h3Text: "Implementing a more complex design",
        bodyText: "<p>My replication of an existing website, with minor design updates for mobile/desktop optimization, readability, and harmonious color palette. The original website belongs to <a href='https:\\www.CreativeNavigation.com' target='_blank'>Creative Navigation</a>.</p><p>This was an exercise in designing a modern responsive site based on someone else's design specifications.</p><p>Features:</p><ul><li>Functional hamburger menu (on mobile, and on desktop when the browser window is narrow)</li><li>Functional 'Contact us' form</li><li>Interactive mouse-over effects on key images and navigation links</li></ul>",
    },
    {
        name: "boognish",
        href: "http://www.whatdoesitween.com",
        imgSrc: "img/folio_boognish.png",
        h3Text: "WhatDoesItWeen.com",
        bodyText: "<p>A fansite for the band Ween. It catalogs the wide range of musical genres and artists from whom they seem to have drawn influence for each of their songs.</p><p>Features:</p><ul><li>Updates are easy: the code automatically adds all listings from the database to the site.</li><li>Responsive design: Visitors see the same well-organized content on different window sizes, devices, and screen orientations.</li><li>Includes a fun snake game, custom-made from scratch.</li></ul>",
    },
    {
        name: "pianoLessons",
        href: "piano/index.html",
        imgSrc: "img/folio_pianolessons.png",
        h3Text: "Piano teacher website for my friend",
        bodyText: "<p>A website I made for my friend. It's no longer online. I've replicated it here; some of the wording has been replaced.</p><p>Features:</p><ul><li>Simple, classic design that aligns with the topic of the website and with the customer's vision.</li><li>Responsive design: Visitors see the same well-organized content on different window sizes, devices, and screen orientations.</li><li>Like other websites in this portfolio, this site features multiple pages and each page contain links to other pages on the site.</li></ul>",
    },
    {
        name: "portfolio_v2",
        href: "v2/index.html",
        imgSrc: "img/folio_portfolio_v2.png",
        h3Text: "Previous version of this website",
        bodyText: "<p>This is the previous version of the website.</p><p>Features:</p><ul><li>Visitors can choose dark mode for lower eye strain and reduced battery use.</li><li>Responsive design: Visitors see the same well-organized content on different window sizes, devices, and screen orientations.</li></ul>",
    },
    {
        name: "this",
        href: "#Home",
        imgSrc: "img/folio_this.png",
        h3Text: "WeatherheadOnline.com",
        bodyText: "<p>This website! It's pretty great.</p><p>Features:</p><ul><li>Visitors can choose dark mode for lower eye strain and reduced battery use.</li><li>Responsive design: Visitors see the same well-organized content on different window sizes, devices, and screen orientations.</li></ul>",
    },
]

const article = document.getElementById("folioArticle");
const imgLink = article.children[0];
const image = article.children[0].children[0];
const articleText = document.getElementById("articleText");
const articleBody = document.getElementById("articleBody");
const h3Link = articleText.children[0];
const h3Text = articleText.children[0].children[0];
const folioLeftArrow = document.getElementById("portfolio_leftArrow");
const folioRightArrow = document.getElementById("portfolio_rightArrow");
const portfolioThumbnails = document.getElementById("portfolio_thumbnails");

let currentArticle = 0;


// ~~~~~~~~~~~~ Add the thumbnail buttons ~~~~~~~~~~~~~~~~~~ //

for (let article = 0; article <= portfolioItems.length - 1; article++) {
    const buttonDiv = document.createElement("img");
    buttonDiv.className = "folio_thumbnail";
    buttonDiv.id = portfolioItems[article].name;
    buttonDiv.src = portfolioItems[article].imgSrc;
    portfolioThumbnails.appendChild(buttonDiv);
}

const folioButtons = Array.from(document.getElementsByClassName("folio_thumbnail"));
folioButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        populate(index);
    });
});


// ~~~~~~~~~~~~ Handle click events to switch between items ~~~~~~~~~~//

folioLeftArrow.addEventListener("click", folioMoveLeft);
folioRightArrow.addEventListener("click", folioMoveRight);
document.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
    switch(event.keyCode){
        case 37: folioMoveLeft(); break;  // "left" arrow
        case 39: folioMoveRight(); break;  // "right" arow
    }
};




function populate(currentArticle) {
    imgLink.href = portfolioItems[currentArticle].articleLink;
    image.src = portfolioItems[currentArticle].imgSrc;
    h3Link.href = portfolioItems[currentArticle].articleLink;
    h3Text.innerText = portfolioItems[currentArticle].h3Text;
    articleBody.innerHTML = portfolioItems[currentArticle].bodyText;
}

function folioMoveLeft() {
    removeSFXclasses(currentArticle);
    if(currentArticle > 0) {
        currentArticle--;
    } else {
        currentArticle = portfolioItems.length - 1;
    };
    populate(currentArticle);
}

function folioMoveRight() {
    removeSFXclasses(currentArticle);
    if(currentArticle < portfolioItems.length - 1) {
        currentArticle++;
    } else {
        currentArticle = 0;
    };
    populate(currentArticle);
}

populate(currentArticle);



//   Generate thumbnails:
// for (let article = 0; article <= portfolioItems.length - 1; article++) {
//     const buttonDiv = document.createElement("div");
//     buttonDiv.className = "folio_thumbnail";
//     buttonDiv.id = portfolioItems[article].name;
//     buttonDiv.innerHTML = portfolioItems[article].svgCode;
//     thumbnails.appendChild(buttonDiv);
// }



