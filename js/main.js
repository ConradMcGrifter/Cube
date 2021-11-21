import { zendikarRisingObj, zendikarRising, zendikarRising_page1 } from "./zendikar.js";
import { adventureForgottenRealms, adventureForgottenRealmsObj } from "./AFR.js";
import { kaldheim, kaldheimObj } from "./kaldheim.js";
import { core2021, core2021Obj } from "./core2021.js";
import { ikoria, ikoriaObj } from "./ikoria.js";
import { cube } from "./cube.js";

// console.log(adventureForgottenRealmsObj["Guardian of Faith"]);

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
        } else {
            console.log(card);
        }
    })
    .filter((card) => {
        if (card !== undefined) {
            return card;
        }
    });

let detailedCubeObj = detailedCube.reduce((acc, card) => {
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

console.log(detailedCube.length);
// console.log(detailedCube);
// console.log(detailedCubeObj["Disenchant"]);

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

const cubeCopy = [...detailedCube];
const sortedCube_CMC = cubeCopy.sort(compareCMC);
const sortedCube_Type = cubeCopy.sort(compareType);
const sortedCube_Color = cubeCopy.sort(compareColor);
// const sortedCube_ColorType = sortedCube_Type.sort(compareColor);
// const sortedCube_ColorTypeCMC = sortedCube_ColorType.sort(compareCMC);
// console.log(sortedCube_ColorType);

// --- testing card creation---

function createElement(cardName) {
    const card = document.createElement("div");
    card.classList.add("card");
    document.body.append(card);
    card.style.backgroundImage = `url(${detailedCubeObj[cardName].image})`;

    if (detailedCubeObj[cardName].color == "Red") {
        card.classList.add("red");
    }
}

for (let i = 0; i < detailedCube.length; i++) {
    createElement(cubeCopy[i].name);
}

// --- end of testing ---
