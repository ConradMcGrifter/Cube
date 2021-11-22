import { zendikarRisingObj, zendikarRising } from "./zendikar.js";
import { adventureForgottenRealms, adventureForgottenRealmsObj } from "./AFR.js";
import { kaldheim, kaldheimObj } from "./kaldheim.js";
import { core2021, core2021Obj } from "./core2021.js";
import { ikoria, ikoriaObj } from "./ikoria.js";
import { warOfTheSpark, warOfTheSparkObj } from "./warOfTheSpark.js";
import { masters25, masters25Obj } from "./masters25.js";
import { cube, goldCards } from "./cube.js";

// the gold cards are going to have the wrong color value --> need to get each gold card and change color value to "gold"
// have an array of all the gold card names --> when checking each set for the card --> check if the card name matches a card in the gold cards array --> if it does --> return an object with the color property set to gold
let detailedCube = cube
    .map((card) => {
        if (zendikarRisingObj[card]) {
            return { ...zendikarRisingObj[card], ["name"]: card };
        }

        // add an if statement here to check kaldheim / AFR , etc... just like the above code
        if (adventureForgottenRealmsObj[card]) {
            return { ...adventureForgottenRealmsObj[card], ["name"]: card };
        }

        if (kaldheimObj[card]) {
            return { ...kaldheimObj[card], ["name"]: card };
        }

        if (core2021Obj[card]) {
            return { ...core2021Obj[card], ["name"]: card };
        }

        if (ikoriaObj[card]) {
            return { ...ikoriaObj[card], ["name"]: card };
        }

        if (warOfTheSparkObj[card]) {
            return { ...warOfTheSparkObj[card], ["name"]: card };
        }

        if (masters25Obj[card]) {
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

// check the gold cards array
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

const allCards = detailedCube.concat(detailedGoldCards);

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

console.log(detailedCubeObj["Alpine Houndmaster"]);
console.log(detailedCube.length);

// console.log(detailedCube);
console.log(detailedGoldCards[0]);

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
    const card = document.createElement("div");
    card.classList.add("card");
    document.body.append(card);
    card.style.backgroundImage = `url(${detailedCubeObj[cardName].image})`;

    if (detailedCubeObj[cardName].color == "Red") {
        card.classList.add("red");
        console.log("red");
    }
}

for (let i = 0; i < detailedCube.length; i++) {
    createElement(sortedCube[i].name);
}

// --- end of testing ---
