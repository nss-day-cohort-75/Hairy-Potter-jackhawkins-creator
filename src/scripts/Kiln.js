export function firePottery(pottery, temp) {
    pottery.fired = true // shows that object was fired
    if (temp > 2200) { // determines if pottery object cracked because of high temp
        pottery.cracked = true
    } else {
        pottery.cracked = false
    }
    return pottery
}