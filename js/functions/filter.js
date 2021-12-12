import {
    FILTER_CREATURE,
    FILTER_INSTANT,
    FILTER_SORCERY,
    FILTER_ENCHANTMENT,
    FILTER_ARTIFACT,
    SHOW_ALL,
} from "../event listeners/sidebar_EventListeners.js";

export let currentColor = ""; // set global color variable

// -----functions used for the filter event listeners----------

export function filterAndDisplayColor(color) {
    let currentCards = document.querySelectorAll(".card--wrap");
    let cardElementArr = [];

    let cardListItems = document.querySelectorAll(".card-list-item");
    if (currentCards.length == 0) {
        cardListItems.forEach((card) => {
            if (!card.classList.contains(color)) {
                // card.classList.add("displayNone");
                card.dataset.active = "false";
            } else {
                // card.classList.remove("displayNone");
                card.dataset.active = "true";
                cardElementArr.push(card);
            }
        });
        currentColor = color;
        return;
    }

    currentCards.forEach((card) => {
        if (!card.classList.contains(color)) {
            // card.classList.add("displayNone");
            card.dataset.active = "false";
        } else {
            // card.classList.remove("displayNone");
            card.dataset.active = "true";
            cardElementArr.push(card);
        }
    });
    currentColor = color;
    console.log(currentColor);
}

export function filterAndDisplayType(type) {
    let currentCards = document.querySelectorAll(".card--wrap");

    let cardListItems = document.querySelectorAll(".card-list-item");

    if (currentCards.length == 0) {
        cardListItems.forEach((card) => {
            if (card.dataset.active === "false" && !card.classList.contains(currentColor)) {
                return;
            }

            if (!card.classList.contains(type)) {
                card.dataset.active = "false";
                // card.classList.add("displayNone");
            } else {
                card.dataset.active = "true";
                // card.classList.remove("displayNone");
            }
        });

        return;
    }

    currentCards.forEach((card) => {
        if (card.dataset.active === "false" && !card.classList.contains(currentColor)) {
            return;
        }

        if (!card.classList.contains(type)) {
            card.dataset.active = "false";
            // card.classList.add("displayNone");
        } else {
            card.dataset.active = "true";
            // card.classList.remove("displayNone");
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
