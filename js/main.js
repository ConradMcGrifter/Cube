import { zendikarRisingObj, zendikarRising } from "./zendikar.js";
import { adventureForgottenRealms, adventureForgottenRealmsObj } from "./AFR.js";
import { kaldheim, kaldheimObj } from "./kaldheim.js";
import { core2021, core2021Obj } from "./core2021.js";
import { ikoria, ikoriaObj } from "./ikoria.js";
import { warOfTheSpark, warOfTheSparkObj } from "./warOfTheSpark.js";
import { masters25, masters25Obj } from "./masters25.js";
import { cube, goldCards, dualLands, artifacts } from "./cube.js";
import { copyToClipboardAndShuffle } from "./copyToClipboard.js";

// shuffle the cube and put the results in a text area so the user can copy the list to clipboard
copyToClipboardAndShuffle();

// let regex = /[1-9]|(undefined)/g;

// create card objects for the cards in the cube array
let detailedCube = cube
    .map((card) => {
        if (zendikarRisingObj[card]) {
            // if (regex.test(zendikarRisingObj[card].color)) {
            //     zendikarRisingObj[card].color = "Colorless";
            //     console.log(zendikarRisingObj[card].color, " - ", zendikarRisingObj[card]);
            // }
            return { ...zendikarRisingObj[card], ["name"]: card };
        }

        // add an if statement here to check kaldheim / AFR , etc... just like the above code
        if (adventureForgottenRealmsObj[card]) {
            // if (regex.test(adventureForgottenRealmsObj[card].color)) {
            //     adventureForgottenRealmsObj[card].color = "Colorless";
            // }
            return { ...adventureForgottenRealmsObj[card], ["name"]: card };
        }

        if (kaldheimObj[card]) {
            // if (regex.test(kaldheimObj[card].color)) {
            //     kaldheimObj[card].color = "Colorless";
            // }
            return { ...kaldheimObj[card], ["name"]: card };
        }

        if (core2021Obj[card]) {
            // if (regex.test(core2021Obj[card].color)) {
            //     core2021Obj[card].color = "Colorless";
            //     // console.log(core2021Obj[card].color, " - ", core2021Obj[card]);
            // }

            return { ...core2021Obj[card], ["name"]: card };
        }

        if (ikoriaObj[card]) {
            // if (regex.test(ikoriaObj[card].color)) {
            //     ikoriaObj[card].color = "Colorless";
            // }
            return { ...ikoriaObj[card], ["name"]: card };
        }

        if (warOfTheSparkObj[card]) {
            // if (regex.test(warOfTheSparkObj[card].color)) {
            //     warOfTheSparkObj[card].color = "Colorless";
            // }
            return { ...warOfTheSparkObj[card], ["name"]: card };
        }

        if (masters25Obj[card]) {
            // if (regex.test(masters25Obj[card].color)) {
            //     masters25Obj[card].color = "Colorless";
            // }
            return { ...masters25Obj[card], ["name"]: card };
        } else {
            console.log(card);
        }
    })
    .filter((card) => {
        if (card !== undefined) {
            return card;
        }
    });

// create card objects of the gold cards array + fix color
let detailedGoldCards = goldCards
    .map((card) => {
        if (zendikarRisingObj[card]) {
            zendikarRisingObj[card].color = "Gold";
            return { ...zendikarRisingObj[card], ["name"]: card };
        }

        // add an if statement here to check kaldheim / AFR , etc... just like the above code
        if (adventureForgottenRealmsObj[card]) {
            adventureForgottenRealmsObj[card].color = "Gold";
            return { ...adventureForgottenRealmsObj[card], ["name"]: card };
        }

        if (kaldheimObj[card]) {
            kaldheimObj[card].color = "Gold";
            return { ...kaldheimObj[card], ["name"]: card };
        }

        if (core2021Obj[card]) {
            core2021Obj[card].color = "Gold";
            return { ...core2021Obj[card], ["name"]: card };
        }

        if (ikoriaObj[card]) {
            ikoriaObj[card].color = "Gold";
            return { ...ikoriaObj[card], ["name"]: card };
        }

        if (warOfTheSparkObj[card]) {
            warOfTheSparkObj[card].color = "Gold";
            return { ...warOfTheSparkObj[card], ["name"]: card };
        }

        if (masters25Obj[card]) {
            masters25Obj[card].color = "Gold";
            return { ...masters25Obj[card], ["name"]: card };
        } else {
            console.log(card);
        }
    })
    .filter((card) => {
        if (card !== undefined) {
            return card;
        }
    });

// create card objects of colorless artifacts + fix undefined color
let detailedColorless = artifacts.map((card) => {
    if (zendikarRisingObj[card]) {
        zendikarRisingObj[card].color = "Colorless";
        return { ...zendikarRisingObj[card], ["name"]: card };
    }

    // add an if statement here to check kaldheim / AFR , etc... just like the above code
    if (adventureForgottenRealmsObj[card]) {
        adventureForgottenRealmsObj[card].color = "Colorless";
        return { ...adventureForgottenRealmsObj[card], ["name"]: card };
    }

    if (kaldheimObj[card]) {
        kaldheimObj[card].color = "Colorless";
        return { ...kaldheimObj[card], ["name"]: card };
    }

    if (core2021Obj[card]) {
        core2021Obj[card].color = "Colorless";
        return { ...core2021Obj[card], ["name"]: card };
    }

    if (ikoriaObj[card]) {
        ikoriaObj[card].color = "Colorless";
        return { ...ikoriaObj[card], ["name"]: card };
    }

    if (warOfTheSparkObj[card]) {
        warOfTheSparkObj[card].color = "Colorless";
        return { ...warOfTheSparkObj[card], ["name"]: card };
    }

    if (masters25Obj[card]) {
        masters25Obj[card].color = "Colorless";
        return { ...masters25Obj[card], ["name"]: card };
    } else {
        console.log(card);
    }
});

// combine all the card objects into an array
const allCards = detailedCube.concat(detailedGoldCards, detailedColorless);

// create an object from the allCards array with the card name as the
let detailedCubeObj = allCards.reduce((acc, card) => {
    return {
        ...acc,
        [card.name]: {
            ["image"]: card.image,
            ["cmc"]: card.cmc,
            ["color"]: card.color,
            ["type"]: card.type,
        },
    };
}, {});

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

function createElement(cardName) {
    const card = document.createElement("img");
    const cardWrap = document.createElement("div");
    cardWrap.classList.add("card--wrap");
    card.classList.add("card");
    cardWrap.classList.add("displayNone");
    card.setAttribute("src", `${detailedCubeObj[cardName].image}`);
    // card.setAttribute("src", "../cardback.jpeg");

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

for (let i = 0; i < allCards.length; i++) {
    createElement(sortedCube[i].name);
}

let cards = document.querySelectorAll(".card--wrap");

// ---------- Filtering ----------

const FILTER_RED = document.getElementById("filter-red");
const FILTER_BLUE = document.getElementById("filter-blue");
const FILTER_BLACK = document.getElementById("filter-black");
const FILTER_WHITE = document.getElementById("filter-white");
const FILTER_GREEN = document.getElementById("filter-green");

function filterAndDisplay(color) {
    let cardElementArr = [];
    cards.forEach((card) => {
        if (!card.classList.contains(color)) {
            card.classList.add("displayNone");
        } else {
            card.classList.remove("displayNone");
            cardElementArr.push(card);
        }
    });

    // get all card elements within the column with class name "cmc-one"
    let cmcOne = document.querySelector(".cmc-one").querySelectorAll("." + color);
    let cmcTwo = document.querySelector(".cmc-two").querySelectorAll("." + color);
    let cmcThree = document.querySelector(".cmc-three").querySelectorAll("." + color);
    let cmcFour = document.querySelector(".cmc-four").querySelectorAll("." + color);
    let cmcFive = document.querySelector(".cmc-five").querySelectorAll("." + color);
    let cmcSix = document.querySelector(".cmc-six").querySelectorAll("." + color);

    // cmcOne.forEach((card, index) => {
    //     card.style.top = "-" + index * 235 + "px";
    // });

    // cmcTwo.forEach((card, index) => {
    //     card.style.top = "-" + index * 235 + "px";
    // });

    // cmcThree.forEach((card, index) => {
    //     card.style.top = "-" + index * 235 + "px";
    // });

    // cmcFour.forEach((card, index) => {
    //     card.style.top = "-" + index * 235 + "px";
    // });

    // cmcFive.forEach((card, index) => {
    //     card.style.top = "-" + index * 235 + "px";
    // });

    // cmcSix.forEach((card, index) => {
    //     card.style.top = "-" + index * 235 + "px";
    // });
    // ---------
    // ---------
    // ---------
    cmcOne.forEach((card, index) => {
        card.style.gridRow = index + 1 + "/" + (index + 2);
    });

    cmcTwo.forEach((card, index) => {
        card.style.gridRow = index + 1 + "/" + (index + 2);
    });

    cmcThree.forEach((card, index) => {
        card.style.gridRow = index + 1 + "/" + (index + 2);
    });

    cmcFour.forEach((card, index) => {
        card.style.gridRow = index + 1 + "/" + (index + 2);
    });

    cmcFive.forEach((card, index) => {
        card.style.gridRow = index + 1 + "/" + (index + 2);
    });

    cmcSix.forEach((card, index) => {
        card.style.gridRow = index + 1 + "/" + (index + 2);
    });
}

FILTER_RED.addEventListener("click", () => {
    filterAndDisplay("red");
});

FILTER_BLUE.addEventListener("click", () => {
    filterAndDisplay("blue");
});

FILTER_BLACK.addEventListener("click", () => {
    filterAndDisplay("black");
});

FILTER_WHITE.addEventListener("click", () => {
    filterAndDisplay("white");
});

FILTER_GREEN.addEventListener("click", () => {
    filterAndDisplay("green");
});
