function basketBallEquipents (input){
    let annualFee = Number(input[0]);

    let shoesPrice = annualFee - (0.4 * annualFee );
    let basketballShirt = shoesPrice - (0.2 * shoesPrice);
    let basketBall = (1/4) * basketballShirt;
    let basketballAccessories = (1/5) * basketBall;

    let totalPrce = annualFee + shoesPrice + basketballShirt + basketBall + basketballAccessories;
    console.log(totalPrce);
}
basketBallEquipents(["365"]);