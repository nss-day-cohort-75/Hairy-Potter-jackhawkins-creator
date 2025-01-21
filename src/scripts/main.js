// Imports go first
import { firePottery } from "./Kiln.js";
import { makePottery } from "./PotteryWheel.js";
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js";
import { PotteryList } from "./PotteryList.js";


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 3, 2)

let vase = makePottery("vase", 8, 10)

let plate = makePottery("plate", 6, 12)

let ugPlate = makePottery("ugly plate", 12, 4)

let sculpture = makePottery("sculpture", 8, 6)

// Fire each piece of pottery in the kiln
let mugFire = firePottery(mug, 2200)

let vaseFire = firePottery(vase, 2201)

let plateFire = firePottery(plate, 1958)

let ugPlateFire = firePottery(ugPlate, 3987)

let sculptureFire = firePottery(sculpture, 2093)

// Determine which ones should be sold, and their price
let testMug = toSellOrNotToSell(mugFire)
usePottery(testMug) //we're testing each piece of pottery for cracks and adding to our array if we find none

let testVase = toSellOrNotToSell(vaseFire)
usePottery(testVase)

let testPlate = toSellOrNotToSell(plateFire)
usePottery(testPlate)

let testUgPlate = toSellOrNotToSell(ugPlateFire)
usePottery(testUgPlate)

let testSculpture = toSellOrNotToSell(sculptureFire)
let filteredPottery = usePottery(testSculpture) //makes our copied array of non-cracked pottery a variable

// Invoke the component function that renders the HTML list
let potteryHTML = PotteryList(filteredPottery)

export const renderPotteryToDOM = (textHTML) => {
    const potList = document.querySelector(".potteryList");
    if (potList) {
        potList.innerHTML = textHTML;
    } else {
        console.error("potteryList ain't here");
    }
 };

renderPotteryToDOM(potteryHTML);