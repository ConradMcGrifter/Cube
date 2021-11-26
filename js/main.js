import { zendikarRisingObj, zendikarRising } from "./sets/zendikar.js";
import { adventureForgottenRealms, adventureForgottenRealmsObj } from "./sets/AFR.js";
import { kaldheim, kaldheimObj } from "./sets/kaldheim.js";
import { core2021, core2021Obj } from "./sets/core2021.js";
import { ikoria, ikoriaObj } from "./sets/ikoria.js";
import { warOfTheSpark, warOfTheSparkObj } from "./sets/warOfTheSpark.js";
import { masters25, masters25Obj } from "./sets/masters25.js";
import { cube, goldCards, dualLands, artifacts } from "./cube/cube.js";
import { copyToClipboardAndShuffle } from "./copyToClipboard.js";
import {
    detailedCube,
    detailedGoldCards,
    detailedColorless,
    allCards,
    detailedCubeObj,
} from "./cube/cube.js";

// shuffle the cube and put the results in a text area so the user can copy the list to clipboard
copyToClipboardAndShuffle();

// let regex = /[1-9]|(undefined)/g;

function compareType(a, b) {
    if (a.type < b.type) {
        return -1;
    }
    if (a.type > b.type) {
        return 1;
    }
    return 0;
}
function compareColor(a, b) {
    if (a.color < b.color) {
        return -1;
    }
    if (a.color > b.color) {
        return 1;
    }
    return 0;
}
function compareCMC(a, b) {
    if (a.cmc < b.cmc) {
        return -1;
    }
    if (a.cmc > b.cmc) {
        return 1;
    }
    return 0;
}

const sortedCube = [...allCards];
const sortedCube_CMC = sortedCube.sort(compareCMC);
const sortedCube_Type = sortedCube.sort(compareType);
const sortedCube_Color = sortedCube.sort(compareColor);

// --- testing card creation---

// this function creates a div wrapper + img element --> it then appends the element to one of the columns based on the cards' CMC value
function createElement(cardName) {
    const card = document.createElement("img");
    const cardWrap = document.createElement("div");
    cardWrap.classList.add("card--wrap");
    card.classList.add("card");
    cardWrap.classList.add("displayNone");
    card.setAttribute("src", `${detailedCubeObj[cardName].image}`);
    // card.setAttribute("src", "../images/cardback.jpeg");

    // set the url of the pseudo element content property to the image of the card --> gets displayed when a card is hovered
    cardWrap.style.setProperty("--image", `url(${detailedCubeObj[cardName].image})`);
    // card.style.backgroundImage = `url(${detailedCubeObj[cardName].image})`;

    // add class names based on the card's property value -- this is for filtering
    if (detailedCubeObj[cardName].color == undefined) {
        cardWrap.classList.add("z");
    } else {
        cardWrap.classList.add(detailedCubeObj[cardName].color.toLowerCase());
    }
    cardWrap.classList.add(detailedCubeObj[cardName].type.toLowerCase());

    if (detailedCubeObj[cardName].cmc == "1") {
        document.querySelector(".cmc-one").append(cardWrap);
        cardWrap.append(card);
    }
    if (detailedCubeObj[cardName].cmc == "2") {
        document.querySelector(".cmc-two").append(cardWrap);
        cardWrap.append(card);
    }
    if (detailedCubeObj[cardName].cmc == "3") {
        document.querySelector(".cmc-three").append(cardWrap);
        cardWrap.append(card);
    }
    if (detailedCubeObj[cardName].cmc == "4") {
        document.querySelector(".cmc-four").append(cardWrap);
        cardWrap.append(card);
    }
    if (detailedCubeObj[cardName].cmc == "5") {
        document.querySelector(".cmc-five").append(cardWrap);
        cardWrap.append(card);
    }
    if (detailedCubeObj[cardName].cmc == "6") {
        document.querySelector(".cmc-six").append(cardWrap);
        cardWrap.append(card);
    }
    if (detailedCubeObj[cardName].cmc == "7") {
        document.querySelector(".cmc-six").append(cardWrap);
        cardWrap.append(card);
    }
    if (detailedCubeObj[cardName].cmc == "8") {
        document.querySelector(".cmc-six").append(cardWrap);
        cardWrap.append(card);
    }
}
// for every card in the cube --> create a card element
for (let i = 0; i < allCards.length; i++) {
    createElement(sortedCube[i].name);
}

let cards = document.querySelectorAll(".card--wrap"); // get all the card elements

let currentColor = ""; // set global color variable
// ---------- Filtering ----------

const FILTER_RED = document.getElementById("filter-red");
const FILTER_BLUE = document.getElementById("filter-blue");
const FILTER_BLACK = document.getElementById("filter-black");
const FILTER_WHITE = document.getElementById("filter-white");
const FILTER_GREEN = document.getElementById("filter-green");

const FILTER_CREATURE = document.getElementById("filter-creature");
const FILTER_INSTANT = document.getElementById("filter-instant");
const FILTER_SORCERY = document.getElementById("filter-sorcery");
const FILTER_ENCHANTMENT = document.getElementById("filter-enchantment");
const FILTER_ARTIFACT = document.getElementById("filter-artifact");
const SHOW_ALL = document.getElementById("filter-all");

function filterAndDisplayColor(color) {
    let cardElementArr = [];
    cards.forEach((card) => {
        if (!card.classList.contains(color)) {
            card.classList.add("displayNone");
        } else {
            card.classList.remove("displayNone");
            cardElementArr.push(card);
        }
    });
    currentColor = color;
    console.log(currentColor);
    // get all card elements by color within the column with class name "cmc-one"
    let color_cmcOne = document.querySelector(".cmc-one").querySelectorAll("." + color);
    let color_cmcTwo = document.querySelector(".cmc-two").querySelectorAll("." + color);
    let color_cmcThree = document.querySelector(".cmc-three").querySelectorAll("." + color);
    let color_cmcFour = document.querySelector(".cmc-four").querySelectorAll("." + color);
    let color_cmcFive = document.querySelector(".cmc-five").querySelectorAll("." + color);
    let color_cmcSix = document.querySelector(".cmc-six").querySelectorAll("." + color);
}

function filterAndDisplayType(type) {
    let currentCards = document.querySelectorAll(".card--wrap");

    let cardElementArr = [];

    cards.forEach((card) => {
        if (card.classList.contains("displayNone") && !card.classList.contains(currentColor)) {
            return;
        }

        if (!card.classList.contains(type)) {
            card.classList.add("displayNone");
        } else {
            card.classList.remove("displayNone");
        }
    });
}

function checkTypeFilters(color) {
    if (FILTER_CREATURE.checked) {
        filterAndDisplayType("creature");
    }
    if (FILTER_INSTANT.checked) {
        filterAndDisplayType("instant");
    }
    if (FILTER_SORCERY.checked) {
        filterAndDisplayType("sorcery");
    }
    if (FILTER_ENCHANTMENT.checked) {
        filterAndDisplayType("enchantment");
    }
    if (FILTER_ARTIFACT.checked) {
        filterAndDisplayType("artifact");
    }
    if (SHOW_ALL.checked) {
        filterAndDisplayColor(color);
    }
}

// display red cards by default when page loads...
filterAndDisplayColor("red");
// check the "all" radio button by default
SHOW_ALL.checked = true;

FILTER_CREATURE.addEventListener("click", () => {
    filterAndDisplayType("creature");
});

FILTER_INSTANT.addEventListener("click", () => {
    filterAndDisplayType("instant");
});

FILTER_SORCERY.addEventListener("click", () => {
    filterAndDisplayType("sorcery");
});

FILTER_ENCHANTMENT.addEventListener("click", () => {
    filterAndDisplayType("enchantment");
});

FILTER_ARTIFACT.addEventListener("click", () => {
    filterAndDisplayType("artifact");
});

SHOW_ALL.addEventListener("click", () => {
    filterAndDisplayColor(currentColor);
});

// color filters -----------
let colorFilters = document.querySelectorAll(".color-filter");

FILTER_RED.addEventListener("click", () => {
    filterAndDisplayColor("red");
    checkTypeFilters("red");
});

FILTER_BLUE.addEventListener("click", () => {
    filterAndDisplayColor("blue");
    checkTypeFilters("blue");
});

FILTER_BLACK.addEventListener("click", () => {
    filterAndDisplayColor("black");
    checkTypeFilters("black");
});

FILTER_WHITE.addEventListener("click", () => {
    filterAndDisplayColor("white");
    checkTypeFilters("white");
});

FILTER_GREEN.addEventListener("click", () => {
    filterAndDisplayColor("green");
    checkTypeFilters("green");
});

const filter_icons = document.querySelector(".color-filter--wrap").querySelectorAll("img");

filter_icons.forEach((icon) => {
    icon.addEventListener("click", () => {
        for (let i = 0; i < filter_icons.length; i++) {
            filter_icons[i].classList.remove("-active");
        }
        icon.classList.add("-active");
    });
});
