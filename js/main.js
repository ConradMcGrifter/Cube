import { zendikarRisingObj, zendikarRising } from "./zendikar.js";
import { adventureForgottenRealms, adventureForgottenRealmsObj } from "./AFR.js";
import { kaldheim, kaldheimObj } from "./kaldheim.js";
import { core2021, core2021Obj } from "./core2021.js";
import { ikoria, ikoriaObj } from "./ikoria.js";
import { warOfTheSpark, warOfTheSparkObj } from "./warOfTheSpark.js";
import { masters25, masters25Obj } from "./masters25.js";
import { cube, goldCards, dualLands, artifacts } from "./cube.js";

const textArea = document.getElementById("cubeText");
const exportCube = cube.concat(goldCards, dualLands, artifacts);

//------------------------------------------------------------------
// Fisher-Yates shuffle function -- used to shuffle arrays
//------------------------------------------------------------------
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}
//------------------------------------------------------------------
let shuffledCube = shuffle(exportCube);

let i = 15;
while (i < shuffledCube.length) {
    console.log(i);
    shuffledCube.splice(i, 0, "\r");
    i++;
    i += 15;
}

const copyButton = document.getElementById("copyClipboard");
console.log(exportCube.length);
textArea.value = shuffledCube.join("\n");
copyClipboard.addEventListener("click", () => {
    textArea.select();
    document.execCommand("copy");
    copyButton.innerText = "Copied!";
    copyButton.style.backgroundColor = "lightBlue";
});

// the gold cards are going to have the wrong color value --> need to get each gold card and change color value to "gold"
// have an array of all the gold card names --> when checking each set for the card --> check if the card name matches a card in the gold cards array --> if it does --> return an object with the color property set to gold
let regex = /[1-9]|(undefined)/g;

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

// check the gold cards array + fix color
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

// check colorless artifacts + fix undefined color
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

const allCards = detailedCube.concat(detailedGoldCards, detailedColorless);

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

    document.body.append(card);
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

// ---------------------
let colorless = allCards.filter((card) => {
    return card.color === "Colorless";
});
let lands = allCards.filter((card) => {
    return card.type === "Land";
});

let colorlessArtifacts = allCards.filter((card) => {
    return card.type === "Artifact";
});

console.log(colorlessArtifacts);
// console.log(colorlessArtifacts);
