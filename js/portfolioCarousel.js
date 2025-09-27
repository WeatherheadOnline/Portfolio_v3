const portfolioItems = [
    {
        name: "holographMenu",
        articleLink: "/input-menu/",
        imgSrc: "img/folio_holographicMenu.png",
        imgAlt: "the website for the new form input menu",
        thumbSrc: "img/folio_holographicMenu_small.png",
        h3Text: 'Mobile accessibility "input tool"',
        bodyText: "<p>Form input fields can be difficult to reach when you're using your mobile device one-handed. I've created this innovative input menu to improve accessibility and bring form inputs within easy reach of your thumbs.</p>",

    },
    {
        name: "jewelery",
        articleLink: "https://www.weatherheaddesigns.com",
        imgSrc: "img/folio_weatherheaddesigns.png",
        imgAlt: "the website Weatherhead Designs",
        thumbSrc: "img/folio_weatherheaddesigns_small.png",
        h3Text: "WeatherheadDesigns.com",
        bodyText: "<p>My personal jewellery website. The code allows inventory to be updated quickly, easily and seamlessly, just by adding new product details to the existing list.</p>",
    },
    {
        name: "CSSsandbox",
        articleLink: "/CSSsandbox/",
        imgSrc: "img/folio_sandbox.png",
        imgAlt: "a website showcasing designs and effects by the author",     
        thumbSrc: "img/folio_sandbox_small.png",
        h3Text: "Design Showcase",
        bodyText: "<p>Check out these designs and effects I've made. My favorite is one that looks like an iridescent gemstone when the user moves their mouse or tilts their device.</p>",
    },
    {
        name: "pianoLessons",
        articleLink: "/piano/",
        imgSrc: "img/folio_pianolessons.png",
        imgAlt: "a website made for a client to advertise piano lessons",
        thumbSrc: "img/folio_pianolessons_small.png",
        h3Text: "Multi-page site for a client",
        bodyText: "<p>A website I designed and made for a local client. It's no longer online; I've replicated it here (some of the wording has been replaced for privacy reasons).</p>",
    },
    {
        name: "CreNav",
        articleLink: "/CreNav",
        imgSrc: "img/folio_crenav.png",
        imgAlt: "a website made to the specifications of Creative Navigation",
        thumbSrc: "img/folio_crenav_small.png",
        h3Text: "Developing from specifications",
        bodyText: "<p>My replica of <a href='https://creativenavigation.com/' target='_blank'>an existing website</a>, with the addition of responsive design for mobile devices. It includes a functional \"Contact Us\" form, plus interactive mouse-over effects for user engagement.</p>",
    },
    {
        name: "boognish",
        articleLink: "http://www.whatdoesitween.com",
        imgSrc: "img/folio_boognish.png",
        imgAlt: "the website www.whatdoesitween.com",
        thumbSrc: "img/folio_boognish_small.png",
        h3Text: "WhatDoesItWeen.com",
        bodyText: "<p>An old fansite for the band Ween. Updates are easy: the code automatically looks through all song listings and adds them to the site. Just for fun, the site also features a themed snake game.</p>",
    },
    {
        name: "portfolio_v2",
        articleLink: "/v2/",
        imgSrc: "img/folio_portfolio_v2.png",
        imgAlt: "the previous version of this website",
        thumbSrc: "img/folio_portfolio_v2_small.png",
        h3Text: "This website (2024-2025)",
        bodyText: "<p>Here's a previous version of this website. The front page features a shimmering-text effect. (Hint: take a look at the light/dark mode settings.)</p>",
    },
    {
        name: "this",
        articleLink: "#Home",
        imgSrc: "img/folio_this.png",
        imgAlt: "the website you're at right now",
        thumbSrc: "img/folio_this_small.png",
        h3Text: "WeatherheadOnline.com",
        bodyText: "<p>This website! It's pretty great. Did you notice? - the text at the top of the page responds to moving your mouse or tilting your device. Stop by the Special Effects section if you haven't already. Thanks for visiting!</p>",
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
    buttonDiv.alt = "Jump to a preview of " + portfolioItems[article].imgAlt;
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
    image.alt = "A preview of " + portfolioItems[currentArticle].imgAlt;
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