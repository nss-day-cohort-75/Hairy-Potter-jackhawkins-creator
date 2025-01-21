const sellList = []

export function toSellOrNotToSell(pottery) {
    if (pottery.cracked === true) {
        return pottery
    }
    
    if (pottery.weight >= 6) {
        pottery.price = 40
    } else {
        pottery.price = 20
    }

    sellList.push(pottery)
    return pottery
}

export function usePottery() {
    return [...sellList] //googled this method to copy arrays - the spread operator (seemed the easiest)
}