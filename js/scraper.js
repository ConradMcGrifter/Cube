const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const app = express();
const zendikarRising =
    "https://gatherer.wizards.com/Pages/Search/Default.aspx?set=[%22Zendikar+Rising%22]";

axios(zendikarRising)
    .then((response) => {
        const html = response.data;
        const cards = [];

        const $ = cheerio.load(html);
        $(".cardItem", html).each(function () {
            const name = $(this).find("img").attr("alt");
            const img = $(this).find("img").attr("src");
            const cmc = $(this).find(".convertedManaCost").text();
            const color = $(this).find(".manaCost").find("img + img").attr("alt");
            const colorFixed = $(this).find(".manaCost").find("img").attr("alt");
            const type = $(this).find(".typeLine").text();

            const imgFixed = img.replace("../..", "https://gatherer.wizards.com");
            const typeFixed = type.split(" ").filter((type) => {
                if (type === "Creature") {
                    return type;
                }

                if (type.match(/(Instant)/)) {
                    let typeArr = [...type];
                    typeArr.splice(typeArr.length - 1, 1);

                    return typeArr.join("");
                }

                if (type.match(/(Sorcery)/)) {
                    return "Sorcery";
                }

                if (type.match(/(Land)/)) {
                    return "Land";
                }

                if (type.match(/(Artifact)/)) {
                    return "Artifact";
                }

                if (type.match(/(Enchantment)/)) {
                    return "Enchantment";
                }
            });

            const fixedType = type.split(" ");
            const filtered = fixedType.filter((ele) => {
                if (ele !== " ");
                return ele;
            });

            const filteredAgain = filtered.map((word) => {
                if (word === "Creature") {
                    return "Creature";
                }

                if (
                    word.match(/Instant/) ||
                    word.match(/Sorcery/) ||
                    word.match(/Enchantment/) ||
                    word.match(/Artifact/) ||
                    word.match(/Land/)
                ) {
                    let letters = [...word];
                    letters.splice(letters.length - 1, 1);
                    return letters.join("");
                } else {
                    return "";
                }
            });

            const typeFinal = filteredAgain.filter((ele) => {
                if (ele !== "") {
                    return ele;
                }
            });

            // console.log(typeFinal);

            if (color === undefined) {
                cards.push({
                    ["name"]: name,
                    ["image"]: imgFixed,
                    ["cmc"]: cmc,
                    ["color"]: colorFixed,
                    ["type"]: typeFinal[0],
                });
            } else {
                cards.push({
                    ["name"]: name,
                    ["image"]: imgFixed,
                    ["cmc"]: cmc,
                    ["color"]: color,
                    ["type"]: typeFinal[0],
                });
            }
        });
        console.log(cards);
    })
    .catch((err) => console.log("error"));

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
