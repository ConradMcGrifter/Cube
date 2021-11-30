import { copyToClipboardAndShuffle } from "./copyToClipboard.js";
import {
    detailedCube,
    detailedGoldCards,
    detailedColorless,
    allCards,
    detailedCubeObj,
} from "./cube/cube.js";
import {
    FILTER_RED,
    FILTER_BLUE,
    FILTER_BLACK,
    FILTER_WHITE,
    FILTER_GREEN,
    FILTER_GOLD,
    FILTER_COLORLESS,
    FILTER_CREATURE,
    FILTER_INSTANT,
    FILTER_SORCERY,
    FILTER_ENCHANTMENT,
    FILTER_ARTIFACT,
    SHOW_ALL,
} from "./event listeners/sidebar_EventListeners.js";

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

export let currentColor = ""; // set global color variable

// -----functions used for the filter event listeners----------
export function filterAndDisplayColor(color) {
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

export function filterAndDisplayType(type) {
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

export function checkTypeFilters(color) {
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
// ------------------------------------------------------

// display red cards by default when page loads...
filterAndDisplayColor("red");
// check the "all" radio button by default
SHOW_ALL.checked = true;
