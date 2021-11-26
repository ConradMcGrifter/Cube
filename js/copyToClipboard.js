import { cube, goldCards, dualLands, artifacts } from "./cube/cube.js";

export function copyToClipboardAndShuffle() {
    const textArea = document.getElementById("cubeText");
    const copyButton = document.getElementById("copyClipboard");
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
        shuffledCube.splice(i, 0, "\r");
        i++;
        i += 15;
    }

    textArea.value = shuffledCube.join("\n");
    copyClipboard.addEventListener("click", () => {
        textArea.select();
        document.execCommand("copy");
        copyButton.innerText = "Copied!";
        copyButton.style.backgroundColor = "lightBlue";
    });
}
