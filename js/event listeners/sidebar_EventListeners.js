import {
    filterAndDisplayType,
    filterAndDisplayColor,
    checkTypeFilters,
    currentColor,
    sortedCube,
    createListItem,
    createElement,
} from "../main.js";

import { allCards } from "../cube/cube.js";

export const FILTER_RED = document.getElementById("filter-red");
export const FILTER_BLUE = document.getElementById("filter-blue");
export const FILTER_BLACK = document.getElementById("filter-black");
export const FILTER_WHITE = document.getElementById("filter-white");
export const FILTER_GREEN = document.getElementById("filter-green");
export const FILTER_GOLD = document.getElementById("filter-gold");
export const FILTER_COLORLESS = document.getElementById("filter-colorless");

export const FILTER_CREATURE = document.getElementById("filter-creature");
export const FILTER_INSTANT = document.getElementById("filter-instant");
export const FILTER_SORCERY = document.getElementById("filter-sorcery");
export const FILTER_ENCHANTMENT = document.getElementById("filter-enchantment");
export const FILTER_ARTIFACT = document.getElementById("filter-artifact");
export const SHOW_ALL = document.getElementById("filter-all");

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

FILTER_GOLD.addEventListener("click", () => {
    SHOW_ALL.checked = true;
    filterAndDisplayColor("gold");
    checkTypeFilters("gold");
});

FILTER_COLORLESS.addEventListener("click", () => {
    SHOW_ALL.checked = true;
    filterAndDisplayColor("colorless");
    checkTypeFilters("colorless");
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

const FILTER_STYLE_LIST = document.getElementById("displayStyleList");
const FILTER_STYLE_CARD = document.getElementById("displayStyleCard");

FILTER_STYLE_LIST.addEventListener("click", () => {
    let cardImages = document.querySelectorAll(".card--wrap");

    // check if there are card images in the columns --> remove them if there are
    if (cardImages.length > 0) {
        cardImages.forEach((image) => {
            image.remove();
        });

        // create a list item of every card in the cube
        for (let i = 0; i < allCards.length; i++) {
            filterAndDisplayColor(currentColor); // this needs to be here or the list items wont show up when first switching view
            checkTypeFilters(currentColor);
            createListItem(sortedCube[i].name);
        }
    }
});

FILTER_STYLE_CARD.addEventListener("click", () => {
    let cardList = document.querySelectorAll(".card-list-item");

    // check if there are card images in the columns --> remove them if there are
    if (cardList.length > 0) {
        cardList.forEach((item) => {
            item.remove();
        });

        // create a list item of every card in the cube
        for (let i = 0; i < allCards.length; i++) {
            filterAndDisplayColor(currentColor); // this needs to be here or the list items wont show up when first switching view
            checkTypeFilters(currentColor);
            createElement(sortedCube[i].name);
        }
    }
});
