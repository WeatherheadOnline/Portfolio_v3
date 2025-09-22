const portfolioItems = [
    {
        name: "CSSsandbox",
        articleLink: "/CSSsandbox/index.html",
        imgSrc: "img/folio_sandbox.png",
        thumbSrc: "img/folio_sandbox_small.png",
        h3Text: "Design Showcase",
        bodyText: "<p>Check out these neat designs and effects I've made. My favorite is one that looks iridescent.</p>",
    },
    {
        name: "jewelery",
        articleLink: "https://www.weatherheaddesigns.com",
        imgSrc: "img/folio_weatherheaddesigns.png",
        thumbSrc: "img/folio_weatherheaddesigns_small.png",
        h3Text: "WeatherheadDesigns.com",
        bodyText: "<p>My personal jewellery website. Inventory can be updated quickly, easily and seamlessly: new product details get added to a database, and the code does the rest of the work.</p>",
    },
    {
        name: "CreNav",
        articleLink: "/CreNav/index.php",
        imgSrc: "img/folio_crenav.png",
        thumbSrc: "img/folio_crenav_small.png",
        h3Text: "Implementing a more complex design",
        bodyText: "<p>My replica of <a href='https://creativenavigation.com/' target='_blank'>an existing website</a>, with the addition of responsive design for mobile devices. It includes a functional \"Contact Us\" form and interactive mouse-over effects for key images and navigation links.</p>",
    },
    {
        name: "boognish",
        articleLink: "http://www.whatdoesitween.com",
        imgSrc: "img/folio_boognish.png",
        thumbSrc: "img/folio_boognish_small.png",
        h3Text: "WhatDoesItWeen.com",
        bodyText: "<p>A fansite for the band Ween. Updates are easy: the code automatically adds all song listings from the database. The site also features a snake game.</p>",
    },
    {
        name: "pianoLessons",
        articleLink: "/piano/index.html",
        imgSrc: "img/folio_pianolessons.png",
        thumbSrc: "img/folio_pianolessons_small.png",
        h3Text: "Multi-page small-business site",
        bodyText: "<p>A website I made for my friend. It's no longer online. I've replicated it here (some of the wording has been replaced for privacy reasons).</p>",
    },
    {
        name: "portfolio_v2",
        articleLink: "/v2/index.php",
        imgSrc: "img/folio_portfolio_v2.png",
        thumbSrc: "img/folio_portfolio_v2_small.png",
        h3Text: "This website (2024-2025)",
        bodyText: "<p>Here's a previous version of this website. The front page features a shimmering-text effect. I had some fun with the light/dark mode settings.</p>",
    },
    {
        name: "this",
        articleLink: "#Home",
        imgSrc: "img/folio_this.png",
        thumbSrc: "img/folio_this_small.png",
        h3Text: "WeatherheadOnline.com",
        bodyText: "<p>This website! It's pretty great. Stop by the Special Effects section if you haven't already. Thanks for visiting!</p>",
    },
]

const imgLink = document.getElementById("portfolio-img").children[0];
const image = imgLink.children[0];
const articleBody = document.getElementById("portfolio-text-body");
const textContainer = document.getElementById("portfolio-item-text");
const h3Link = textContainer.children[0];
const h3Text = textContainer.children[0].children[0];

const folioLeftArrow = document.getElementById("portfolio_leftArrow");
const folioRightArrow = document.getElementById("portfolio_rightArrow");
const portfolioThumbnails = document.getElementById("portfolio_thumbnails");

let currentArticle = 0;

// ~~~~~~~~~~~~ Add the thumbnail buttons ~~~~~~~~~~~~~~~~~~ //

for (let article = 0; article <= portfolioItems.length - 1; article++) {
    const buttonDiv = document.createElement("img");
    buttonDiv.className = "folio_thumbnail";
    buttonDiv.id = portfolioItems[article].name;
    buttonDiv.src = portfolioItems[article].thumbSrc;
    portfolioThumbnails.appendChild(buttonDiv);
}

const folioButtons = Array.from(document.getElementsByClassName("folio_thumbnail"));
folioButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        populate(index);
        currentArticle = index;
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
    if(currentArticle > 0) {
        currentArticle--;
    } else {
        currentArticle = portfolioItems.length - 1;
    };
    populate(currentArticle);
}

function folioMoveRight() {
    if(currentArticle < portfolioItems.length - 1) {
        currentArticle++;
    } else {
        currentArticle = 0;
    };
    populate(currentArticle);
}

populate(currentArticle);