import { zendikarRisingObj, zendikarRising, zendikarRising_page1 } from "./zendikar.js";
import { cube } from "./cube.js";

let detailedCube = cube
    .map((card) => {
        if (zendikarRisingObj[card]) {
            return { ...zendikarRisingObj[card], ["name"]: card };
        }
        // add an if statement here to check kaldheim / AFR , etc... just like the above code
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

// --- testing card creation---
// function createElement(cardName) {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     document.body.append(card);
//     card.style.backgroundImage = `url(${detailedCubeObj[cardName].image})`;
// }

// for (let i = 0; i < detailedCube.length; i++) {
//     createElement(detailedCube[i].name);
// }

// --- end of testing ---
