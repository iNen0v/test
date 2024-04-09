function shopping (input){
    let budget = Number(input[0]);
    let gpuCount = Number(input[1]);
    let cpuCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let gpuPrice = gpuCount * 250;
    let cpuPrice = cpuCount * 0.35 * gpuPrice;
    let ramPrice = ramCount * 0.10 * gpuPrice;

    let totalPrice = gpuPrice + cpuPrice + ramPrice;

    if (gpuCount > cpuCount){
        totalPrice *= 0.85;
    }

    if (totalPrice <= budget){
        let moneyLeft = budget - totalPrice;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    }
    if (budget < totalPrice){
        let moneyNeed = totalPrice - budget;
        console.log(`"Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }
}
shopping(["900","2","1","3"]);