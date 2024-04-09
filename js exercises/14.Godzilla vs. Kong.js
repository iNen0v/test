function godzillaVsKong (input){
    let budget = Number(input[0]);
    let actorCount = Number(input[1]);
    let costumePerActor = Number(input[2]);

    let decorPrice =  budget * 0.1;
    let totalCostumePrice = costumePerActor * actorCount;
    if (actorCount > 150){
        totalCostumePrice *= 0.9;
    }

    let totalPrice = decorPrice + totalCostumePrice;

    if (budget >= totalPrice){
        let moneyLeft = budget - totalPrice;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    }
    if (budget < totalPrice){
        let moneyNeeded = totalPrice - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    }


}
godzillaVsKong(["20000",

"120",

"55.5"]);