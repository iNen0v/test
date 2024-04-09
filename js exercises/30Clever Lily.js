function cleverLily (input){
    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let totalMoney = 0;
    let moneyGiven = 10;
    for (let birthday = 1; birthday <= age; birthday++){
        if (birthday % 2 ===0){
            totalMoney +=moneyGiven - 1;
            moneyGiven +=10;
            
        }else{
            totalMoney += pricePerToy;
        }

    }
    if(totalMoney>= washerPrice){
        let moneyLeft = totalMoney - washerPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    }else {
        let moneyNeedeed = washerPrice - totalMoney;
        console.log(`"No! ${moneyNeedeed.toFixed(2)}`);
    }

}
cleverLily(["10","170.00","6"])