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
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.backgroundImage = `url(${detailedCubeObj[cardName].image})`;

    // add class names based on the card's property value -- this is for filtering
    if (detailedCubeObj[cardName].color == undefined) {
        card.classList.add("z");
    } else {
        card.classList.add(detailedCubeObj[cardName].color.toLowerCase());
    }
    card.classList.add(detailedCubeObj[cardName].type.toLowerCase());

    document.querySelector(".cards--container").append(card);
}

for (let i = 0; i < allCards.length; i++) {
    createElement(sortedCube[i].name);
}

// let filterWhite = allCards.filter((card) => {
//     if (card.color === "White") {
//         return card;
//     }
// });

// --- end of testing ---

let cards = document.querySelectorAll(".card");

// cards.forEach((card) => {
//     if (!card.classList.contains("white")) {
//         card.classList.toggle("displayNone");
//     }
// });
