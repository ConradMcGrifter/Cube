import { copyToClipboardAndShuffle } from "./copyToClipboard.js";
import {
    detailedCube,
    detailedGoldCards,
    detailedColorless,
    allCards,
    detailedCubeObj,
} from "./cube/cube.js";
import { SHOW_ALL } from "./event listeners/sidebar_EventListeners.js";

import {
    filterAndDisplayColor,
    filterAndDisplayType,
    checkTypeFilters,
    currentColor,
} from "./functions/filter.js";

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

export const sortedCube = [...allCards];
const sortedCube_CMC = sortedCube.sort(compareCMC);
const sortedCube_Type = sortedCube.sort(compareType);
const sortedCube_Color = sortedCube.sort(compareColor);

// this function creates a div wrapper + img element --> it then appends the element to one of the columns based on the cards' CMC value
export function createElement(cardName) {
    const card = document.createElement("img");
    const cardWrap = document.createElement("div");
    const listItem = document.createElement("li");
    const list = document.createElement("ul");
    cardWrap.classList.add("card--wrap");
    card.classList.add("card");
    // cardWrap.classList.add("displayNone"); // change this css class to a data attribute ex) data-active="false"
    cardWrap.setAttribute("data-active", "false");

    card.setAttribute("src", `${detailedCubeObj[cardName].image}`);
    // card.setAttribute("src", "../images/cardback.jpeg");

    // set the url of the pseudo element content property to the image of the card --> gets displayed when a card is hovered
    cardWrap.style.setProperty("--image", `url(${detailedCubeObj[cardName].image})`);

    // add class names based on the card's color value-- this is for filtering
    if (detailedCubeObj[cardName].color == undefined) {
        cardWrap.classList.add("z");
    } else {
        cardWrap.classList.add(detailedCubeObj[cardName].color.toLowerCase());
    }
    // add a class named after the cards type -- this is for filtering
    cardWrap.classList.add(detailedCubeObj[cardName].type.toLowerCase());

    // append the card to the column based on its CMC
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

    // cardWrap.addEventListener("click", () => {
    //     console.log(cardName);
    //     cardWrap.parentElement.removeChild(cardWrap);
    // });
}

export function createListItem(cardName) {
    const listItem = document.createElement("li");
    listItem.classList.add("card-list-item");
    // listItem.classList.add("displayNone");
    listItem.setAttribute("data-active", "false");
    listItem.innerText = cardName;

    // add class name based on cards type
    listItem.classList.add(detailedCubeObj[cardName].type.toLowerCase());

    // add class names based on the card's property value -- this is for filtering
    if (detailedCubeObj[cardName].color == undefined) {
        listItem.classList.add("z");
    } else {
        listItem.classList.add(detailedCubeObj[cardName].color.toLowerCase());
    }

    // set the :hover::before img url
    listItem.style.setProperty("--image", `url(${detailedCubeObj[cardName].image})`);

    // get the color of the card and assign that as a class
    if (detailedCubeObj[cardName].color == undefined) {
        listItem.classList.add("z");
    } else {
        listItem.classList.add(detailedCubeObj[cardName].color.toLowerCase());
    }

    // check the cmc of the card and append it to the correct column in the HTML
    if (detailedCubeObj[cardName].cmc == "1") {
        document.querySelector(".cmc-one").append(listItem);
    }
    if (detailedCubeObj[cardName].cmc == "2") {
        document.querySelector(".cmc-two").append(listItem);
    }
    if (detailedCubeObj[cardName].cmc == "3") {
        document.querySelector(".cmc-three").append(listItem);
    }
    if (detailedCubeObj[cardName].cmc == "4") {
        document.querySelector(".cmc-four").append(listItem);
    }
    if (detailedCubeObj[cardName].cmc == "5") {
        document.querySelector(".cmc-five").append(listItem);
    }
    if (detailedCubeObj[cardName].cmc == "6") {
        document.querySelector(".cmc-six").append(listItem);
    }
}

// for every card in the cube --> create a card element
for (let i = 0; i < allCards.length; i++) {
    createElement(sortedCube[i].name);
}

// for (let i = 0; i < allCards.length; i++) {
//     createListItem(sortedCube[i].name);
// }

// ------------------------------------------------------

// display red cards by default when page loads...
filterAndDisplayColor("red");
// check the "all" radio button by default
SHOW_ALL.checked = true;
