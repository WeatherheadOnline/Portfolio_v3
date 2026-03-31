const portfolioItems = [
    {
        name: "justabit",
        articleLink: "https://justabit.one",
        imgSrc: "img/folio_justabit.png",
        imgAlt: "JustABit.one, a satirical social media site",
        thumbSrc: "img/folio_justabit_small.png",
        h3Text: "Advanced React project",
        bodyText: '<p>JustABit.one is a satirical social media site with a one-bit character limit. Written using the Next.js framework and Typescript.</p>',

    },
    {
        name: "aquaEarth",
        articleLink: "https://www.aquaearth.com.au",
        imgSrc: "img/folio_aquaearth.png",
        imgAlt: "aquaearth.com.au, a website made for a client",
        thumbSrc: "img/folio_aquaearth_small.png",
        h3Text: "Small Business Site",
        bodyText: '<p>A small business site for a client. Features include: expandable menus, modal photos (click-to-enlarge), and pages containing multiple tabs.</p>',

    },
    {
        name: "numerology",
        articleLink: "/numerology-cards/",
        imgSrc: "img/folio_numerology.png",
        imgAlt: "a numerology calculator",
        thumbSrc: "img/folio_numerology_small.png",
        h3Text: "React project: Calculator",
        bodyText: "<p>This site was made for a friend, and written using the React.js library. It performs complex calculations, modified by user selections. Multiple color themes and hover effects enhance user engagement.</p>",

    },
    {
        name: "todo",
        articleLink: "/to-do/",
        imgSrc: "img/folio_to-do.png",
        imgAlt: "A to do list, with multiple color theme options, written using React",
        thumbSrc: "img/folio_to-do_small.png",
        h3Text: "React to-do list",
        bodyText: '<p>My first React project, with a twist: ten color theme options.</p>',
    },
    {
        name: "holographMenu",
        articleLink: "/holographic-menu/",
        imgSrc: "img/folio_holographicMenu.png",
        imgAlt: "the website for the new form-input menu",
        thumbSrc: "img/folio_holographicMenu_small.png",
        h3Text: "Holographic Menu",
        bodyText: "<p>Form input fields can be difficult to reach when using a mobile device one-handed. I made this UI generator to improve mobile users' experience, by bringing form inputs within easy reach of their thumbs.</p>",

    },
    {
        name: "jewelery",
        articleLink: "https://www.weatherheaddesigns.com",
        imgSrc: "img/folio_weatherheaddesigns.png",
        imgAlt: "the website Weatherhead Designs dot com",
        thumbSrc: "img/folio_weatherheaddesigns_small.png",
        h3Text: "WeatherheadDesigns.com",
        bodyText: "<p>My personal jewellery website. It leverages Javascript behind the scenes so that inventory can be updated quickly, easily, and seamlessly.</p>",
    },
    {
        name: "this",
        articleLink: "#Home",
        imgSrc: "img/folio_this.png",
        imgAlt: "the website you're at right now",
        thumbSrc: "img/folio_this_small.png",
        h3Text: "WeatherheadOnline.com",
        bodyText: "<p>This website! It's pretty great. Stop by the <a href='#Effects'>Special Effects</a> section if you haven't already. Thanks for visiting!</p>",
    },
    {
        name: "portfolio_v2",
        articleLink: "/v2/",
        imgSrc: "img/folio_portfolio_v2.png",
        imgAlt: "the previous version of this website",
        thumbSrc: "img/folio_portfolio_v2_small.png",
        h3Text: "This website (2024-2025)",
        bodyText: "<p>Here's a previous version of this website. The front page features a shimmering-text effect. Check out the light/dark mode settings.</p>",
    },
    {
        name: "CreNav",
        articleLink: "/CreNav/",
        imgSrc: "img/folio_crenav.png",
        imgAlt: "a website made to the specifications of Creative Navigation",
        thumbSrc: "img/folio_crenav_small.png",
        h3Text: "From specifications",
        bodyText: "<p>My replica of <a href='https://creativenavigation.com/' target='_blank'>an existing website</a>, with the addition of responsive design for mobile devices. It includes a functional \"Contact Us\" form, plus interactive mouse-over effects for user engagement.</p>",
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
        name: "boognish",
        articleLink: "/whatdoesitween/",
        imgSrc: "img/folio_boognish.png",
        imgAlt: "A fansite for rock band Ween",
        thumbSrc: "img/folio_boognish_small.png",
        h3Text: "WhatDoesItWeen.com",
        bodyText: "<p>An old fansite for the band Ween. Updates are easy: the code automatically looks through all song listings and adds them to the site. Just for fun, the site also features a themed snake game.</p>",
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
        deactivate();
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
    const thumbnail = document.getElementById(portfolioItems[currentArticle].name);
    thumbnail.classList.add("active");
}

function folioMoveLeft() {
    deactivate();
    if(currentArticle > 0) {
        currentArticle--;
    } else {
        currentArticle = portfolioItems.length - 1;
    };
    populate(currentArticle);
}

function folioMoveRight() {
    deactivate();
    if(currentArticle < portfolioItems.length - 1) {
        currentArticle++;
    } else {
        currentArticle = 0;
    };
    populate(currentArticle);
}

function deactivate() {
        const prevActive = document.getElementById(portfolioItems[currentArticle].name);
        prevActive.classList.remove("active");
}

populate(currentArticle);