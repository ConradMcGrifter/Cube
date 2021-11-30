import { zendikarRisingObj } from "../sets/zendikar.js";
import { adventureForgottenRealmsObj } from "../sets/AFR.js";
import { core2021Obj } from "../sets/core2021.js";
import { ikoriaObj } from "../sets/ikoria.js";
import { kaldheimObj } from "../sets/kaldheim.js";
import { masters25Obj } from "../sets/masters25.js";
import { warOfTheSparkObj } from "../sets/warOfTheSpark.js";

// import all the set objects --> each set object has a card's name as its key
// detailedCube --> create a new array of card objects containing only cards in the cube
// detailedGoldCards --> creatue a new array of objects containing only gold cards in the cube
// detailedColorless --> creatue a new array of objects containing only colorless cards in the cube
// allCards --> combine all the detailed card arrays
// detailedCubeObj --> reduce the allCards array into an object that has each card as an object with the card name as the key

export const cube = [
    "Fireblade Charger",
    "Frenzied Goblin",
    "Goblin Arsonist",
    "Grim Initiate",
    "Sneaking Guide",
    "Fissure Wizard",
    "Heartfire Immolator",
    "Burning Prophet",
    "Teeterpeak Ambusher",
    "Grotag Bug-Catcher",
    "Goma Fada Vanguard",
    "Ardent Electromancer",
    "Grotag Night-Runner",
    "Tuktuk Rubblefort",
    "Spikeshot Goblin",
    "Breakneck Berserker",
    "Spellgorger Weird",
    "Tuskeri Firewalker",
    "Ahn-Crop Invader",
    "Hulking Bugbear",
    "Expedition Champion",
    "Ferocious Tigorilla",
    "Hoarding Ogre",
    "Scorch Rider",
    "Turret Ogre",
    "Goblin Assault Team",
    "Thundering Sparkmage",
    "Basalt Ravager",
    "Hagi Mob",
    "Rockslide Sorcerer",
    "Chainwhip Cyclops",
    "Pitchburn Devils",
    "Cyclops Electromancer",
    "Chartooth Cougar",
    "Bone Pit Brute",
    "Akoum Warrior",
    "Shatterskull Minotaur",
    "Hellkite Punisher",
    "Scorching Dragonfire",
    "Soul Sear",
    "Volcanic Geyser",
    "Kazuul's Fury",
    "Farideh's Fireball",
    "Shock",
    "Chandra's Pyrohelix",
    "Jaya's Greeting",
    "Heartfire",
    "Molten Blast",
    "Cinderclasm",
    "You Find Some Prisoners",
    "Bolt Bend",
    "Thundering Rebuke",
    "Roil Eruption",
    "Turn to Slag",
    "Fire Prophecy",
    "Blindblast",
    "Furious Rise",
    "Dueling Rapier",
    "Goblin Morningstar",
    "Scavenged Blade",
    // ---
    "Bala Ged Recovery",
    "Tangled Florahedron",
    "Khalni Ambush",
    "Vastwood Fortification",
    "Colossal Dreadmaw",
    "Lead the Stampede",
    "Exuberant Wolfbear",
    "Rabid Bite",
    "Warden of the Woods",
    "Invigorating Surge",
    "Arachnoform",
    "Pridemalkin",
    "Titanic Growth",
    "Ram Through",
    "Wildwood Scourge",
    "Elderleaf Mentor",
    "Horizon Seeker",
    "Guardian Gladewalker",
    "Drowsing Tyrannodon",
    "Burlfist Oak",
    "Territorial Scythecat",
    "Joraga Visionary",
    "Rune of Might",
    "Scale the Heights",
    "Cultivate",
    "Iridescent Hornbeetle",
    "Garruk's Uprising",
    "Hunter's Edge",
    "Rootless Yew",
    "Reclaim the Wastes",
    "Quirion Dryad",
    "Broken Wings",
    "Trufflesnout",
    "Murasa Sproutling",
    "Sabertooth Mauler",
    "Taunting Arbormage",
    "Veteran Adventurer",
    "Humble Naturalist",
    "Turntimber Ascetic",
    "Fierce Empath",
    "Springmantle Cleric",
    "Llanowar Visionary",
    "Snakeskin Veil",
    "Thrashing Brontodon",
    "Masked Vandal",
    "Skyway Sniper",
    "Monstrous Step",
    "Fungal Rebirth",
    "Ornery Dilophosaur",
    "Vine Gecko",
    "Jaspera Sentinel",
    "Tajuru Snarecaster",
    "Murasa Brute",
    "Tajuru Blightblade",
    "Gnarlid Colony",
    "Dauntless Survivor",
    "Track Down",
    "Mammoth Growth",
    "Ravenous Lindwurm",
    "Purple Worm",
    "Zof Consumption",
    "Blackbloom Rogue",
    "Malakir Rebirth",
    "Lightfoot Rogue",
    "Rise Again",
    "Hoard Robber",
    "Blood Price",
    "Goremand",
    "Blood Glutton",
    "Mind Drain",
    "Deadly Alliance",
    "Nimana Skitter-Sneak",
    "Kaya's Ghostform",
    "Pestilent Haze",
    "Baleful Beholder",
    "Herald of Hadar",
    "Acquisitions Expert",
    "Tavern Swindler",
    "Nimana Skydancer",
    "Guul Draz Mucklord",
    "Archfiend's Vessel",
    "Feed the Swarm",
    "Skeleton Archer",
    "Dogged Pursuit",
    "Expedition Skulker",
    "Shadow Stinger",
    "Grasp of Darkness",
    "Tergrid's Shadow",
    "Karfell Kennel-Master",
    "Subtle Strike",
    "Skyclave Shadowcat",
    "Ghastly Gloomhunter",
    "Vampire Spawn",
    "Fetid Imp",
    "Skull Raid",
    "Liliana's Steward",
    "Highborn Vampire",
    "Deathbloom Thallid",
    "Elderfang Disciple",
    "Malakir Blood-Priest",
    "Draugr Recruiter",
    "Lithoform Blight",
    "Deadly Dispute",
    "Power Word Kill",
    "Thwart the Grave",
    "Oblivion's Hunger",
    "Silversmote Ghoul",
    "Liliana's Devotee",
    "Draugr's Helm",
    "Alchemist's Gift",
    "Feed the Serpent",
    "Blood Beckoning",
    "Dreadwurm",
    "Malefic Scythe",
    "Gloom Sower",
    "Masked Blackguard",
    "Eternal Taskmaster",
    "Deathknell Berserker",
    "Scion of the Swarm",
    "Eliminate",
    "Sejiri Shelter",
    "Skyclave Cleric",
    "Kabira Takedown",
    "Makindi Stampede",
    "Battershield Warrior",
    "Patagia Tiger",
    "Legion's Judgment",
    "Kaya's Onslaught",
    "Siege Striker",
    "Canyon Jerboa",
    "Kor Blademaster",
    "Tazeem Raptor",
    "Aven Gagglemaster",
    "Shepherd of Heroes",
    "Anointed Chorister",
    "Faith's Fetters",
    "Expedition Healer",
    "Seasoned Hallowblade",
    "Shepherd of the Cosmos",
    "Banishing Light",
    "Beskir Shieldmate",
    "Codespell Cleric",
    "Tempered Veteran",
    "Daybreak Charger",
    "Valkyrie's Sword",
    "Basri's Solidarity",
    "Feat of Resistance",
    "Act of Heroism",
    "Valorous Steed",
    "Kabira Outrider",
    "Farsight Adept",
    "Practiced Tactics",
    "Selfless Savior",
    "Story Seeker",
    "Journey to Oblivion",
    "Sea Gate Banneret",
    "Minimus Containment",
    "Emeria Captain",
    "Divine Arrow",
    "White Dragon",
    "Basri's Acolyte",
    "Disenchant",
    "Secure the Scene",
    "Battlefield Raptor",
    "Starnheim Courser",
    "Arborea Pegasus",
    "Spontaneous Flight",
    "Moon-Blessed Cleric",
    "Devoted Paladin",
    "Prowling Felidar",
    "Paired Tactician",
    "Attended Healer",
    "Swift Response",
    "Concordia Pegasus",
    "Iron Verdict",
    "Bound in Gold",
    "Wings of the Cosmos",
    "Warhorn Blast",
    "Falconer Adept",
    "Gale Swooper",
    "Jwari Disruption",
    "Cascade Seer",
    "Rousing Read",
    "Anticognition",
    "Waker of Waves",
    "Tazeem Roilmage",
    "Concerted Defense",
    "Charmed Sleep",
    "Sure-Footed Infiltrator",
    "Cunning Geysermage",
    "Lofty Denial",
    "Frost Breath",
    "Rewind",
    "Skyclave Plunder",
    "Depart the Realm",
    "Opt",
    "Vodalian Arcanist",
    "You Find the Villains' Lair",
    "Windrider Wizard",
    "Roaming Ghostlight",
    "Air-Cult Elemental",
    "Capture Sphere",
    "Enthralling Hold",
    "Tolarian Kraken",
    "Keen Glidemaster",
    "Deliberate",
    "Reconnaissance Mission",
    "Karfell Harbinger",
    "Arcane Investigator",
    "Zulaport Duelist",
    "Pixie Guide",
    "Rimeshield Frost Giant",
    "Tide Skimmer",
    "Cleric of Chill Depths",
    "Wall of Runes",
    "Lullmage's Domination",
    "Disdainful Stroke",
    "Bubble Snare",
    "Seafloor Stalker",
    "Counterspell",
    "Teferi's Protege",
    "Glacial Grasp",
    "Draugr Thought-Thief",
    "Expedition Diviner",
    "Saw It Coming",
    "Clever Conjurer",
    "One with the Stars",
    "Augury Raven",
    "Wingfold Pteron",
    "Inga Rune-Eyes",
    "Merfolk Windrobber",
    "Shipwreck Dowser",
    "Spined Megalodon",
    "Gust of Wind",
    "Unsubstantiate",
    "Teferi's Tutelage",
    "Brinebarrow Intruder",
    "Mistral Singer",
    "Soulknife Spy",
    "Library Larcenist",
];

export const goldCards = [
    "Conclave Mentor",
    "Soaring Thought-Thief",
    "Cleric of Life's Bond",
    "Twinblade Assassins",
    "Experimental Overload",
    "Umara Mystic",
    "Indulging Patrician",
    "Watcher of the Spheres",
    "Murasa Rootgrazer",
    "Lorescale Coatl",
    "Spoils of Adventure",
    "Brushfire Elemental",
    "Leafkin Avenger",
    "Primal Empathy",
    "Binding the Old Gods",
    "Ravager's Mace",
    "Dire Fleet Warmonger",
    "Kargan Warleader",
    "Obsessive Stitcher",
    "Alpine Houndmaster",
];

export const dualLands = [
    "Bloodfell Caves",
    "Jungle Hollow",
    "Thornwood Falls",
    "Dismal Backwater",
    "Blossoming Sands",
    "Rugged Highlands",
    "Tranquil Cove",
    "Blossoming Sands",
    "Scoured Barrens",
    "Bloodfell Caves",
    "Rugged Highlands",
    "Thornwood Falls",
    "Swiftwater Cliffs",
    "Wind-Scarred Crag",
    "Swiftwater Cliffs",
    "Tranquil Cove",
    "Scoured Barrens",
    "Jungle Hollow",
    "Dismal Backwater",
    "Wind-Scarred Crag",
];

export const artifacts = [
    "Springjaw Trap",
    "Short Sword",
    "Goldvein Pick",
    "Relic Axe",
    "Utility Knife",
    "Cliffhaven Kitesail",
    "Silent Dart",
    "Meteorite",
    "Relic Vial",
    "Relic Amulet",
    "Spare Supplies",
    "Prismite",
    "Palladium Myr",
    "Epitaph Golem",
    "Forgotten Sentinel",
    "Relic Golem",
    "Stonework Packbeast",
    "Skyscanner",
    "Sea Gate Colossus",
    "Skyclave Sentinel",
];

// ---------
// create card objects for the cards in the cube array
export let detailedCube = cube
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

// create card objects of the gold cards array + fix color
export let detailedGoldCards = goldCards
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
export let detailedColorless = artifacts.map((card) => {
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
export const allCards = detailedCube.concat(detailedGoldCards, detailedColorless);

// create an object from the allCards array with the card name as the key
export let detailedCubeObj = allCards.reduce((acc, card) => {
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
