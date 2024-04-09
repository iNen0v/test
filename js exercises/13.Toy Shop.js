
function toyShop (input){
    let tripPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let truckCount = Number(input[5]);
    let moneyEarned = (puzzleCount  * 2.60) + (dollsCount * 3) + (bearsCount * 4.10) + (minionsCount * 8.20) + (truckCount * 2);
    let toysCount = puzzleCount + dollsCount + bearsCount + minionsCount + truckCount;

    if (toysCount >= 50){
        moneyEarned *= 0.75;
    }

    moneyEarned *= 0.90;
    if (moneyEarned >= tripPrice){
        let moneyLeft  = moneyEarned - tripPrice;
        console.log(`"Yes! ${moneyLeft.toFixed(2)} lv left.`)
    }else {
        moneyNeeded = tripPrice - moneyEarned;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}
toyShop(["40.8","20","25","30","50","10"]);