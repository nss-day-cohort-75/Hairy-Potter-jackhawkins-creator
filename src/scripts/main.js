// Imports go first
import { firePottery } from "./Kiln.js";
import { makePottery } from "./PotteryWheel.js";


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 3, 2)

let vase = makePottery("vase", 8, 10)

let plate = makePottery("plate", 5, 12)

let ugPlate = makePottery("ugly plate", 12, 4)

let sculpture = makePottery("sculpture", 8, 6)

// Fire each piece of pottery in the kiln
let mugFire = firePottery(mug, 2200)

let vaseFire = firePottery(vase, 2201)

let plateFire = firePottery(plate, 1958)

let ugPlateFire = firePottery(ugPlate, 3987)

let sculptureFire = firePottery(sculpture, 2093)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list