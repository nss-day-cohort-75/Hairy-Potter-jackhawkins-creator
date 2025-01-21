let pKey = 1;

export function makePottery(s, w, h) {
    return {
        shape: s,
        weight: w,
        height: h,
        id: pKey++ //remember: does not start increasing value until after running once
    };
}