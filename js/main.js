import { zendikarRisingObj, zendikarRising, zendikarRising_page1 } from "./zendikar.js";
import { cube } from "./cube.js";

// let reducedZendikar = zendikarRising_page1.reduce((acc, card) => {
//     return {
//         ...acc,
//         [card.name]: { ["image"]: card.image, ["cmc"]: card.cmc, ["color"]: card.color },
//     };
// }, {});

// let cardName = "Acquisitions Expert";

// console.log(reducedZendikar[cardName]);

// take array of cards in our cube and look for each of those cards by name in the reducedZendikar object
// if the card matches with a card in the reducedZendikar object --> add the card object to a new array (updated collection)
// so now instead of just having the names of the cards in our cube, we have a object for each card that contains the img url, cmc, and type

let detailedCube = cube
    .map((card) => {
        if (zendikarRisingObj[card]) {
            return { ...zendikarRisingObj[card], ["name"]: card };
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

console.log(detailedCube);
console.log(detailedCubeObj["Disenchant"]);

// --- testing ---
function createElement(i) {
    const card = document.createElement("div");
    card.classList.add("card");
    document.body.append(card);
    card.style.backgroundImage = `url(${detailedCubeObj[i].image})`;
}

for (let i = 0; i < detailedCube.length; i++) {
    createElement(detailedCube[i].name);
}

// --- end of testing ---
