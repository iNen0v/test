function shopping(input) {
    let budget = Number(input[0]);
    let videoCard = Number(input[1]);
    let procesor = Number(input[2]);
    let ramPamet = Number(input[3]);
 
    let sumVideoCard = videoCard * 250;
    let sumProcesor = 0.35 * sumVideoCard;
    let sumRamPamet = 0.10 * sumVideoCard * ramPamet;
 
    let totalSum = sumVideoCard + sumProcesor + sumRamPamet;
 
    if(videoCard > procesor) {
        totalSum *= 0.85;    
    } 
 
    if(totalSum <= budget) {
        let totalMoney = budget - totalSum;
        console.log(`You have ${totalMoney.toFixed(2)} leva left!`);        
     } else {
         let moneyNeeded = totalSum - budget;
         console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
 }
 
}

shopping(["900", "2", "1", "3"]);