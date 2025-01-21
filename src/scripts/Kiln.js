export function firePottery(pottery, temp) {
    pottery.fired = true
    if (temp > 2200) {
        pottery.cracked = true
    } else {
        pottery.cracked = false
    }
    return pottery
}