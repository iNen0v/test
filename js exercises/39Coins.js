function coins (input){
    let change = Number(input[0]);
    let cents = Math.trunc(change * 100);
    let coinsUsed = 0;
    
    while(cents > 0){
        if(cents >= 200){
            cents -= 200;
            coinsUsed++;
        }else if(cents >= 100){
            cents -=100;
            coinsUsed++;
        }else if(cents >= 50){
            cents -=50;
            coinsUsed++;
        }else if(cents >=  20){
            cents -=20;
            coinsUsed++;
        }else if(cents >= 10){
            cents -=10;
            coinsUsed++;
        }else if(cents >= 5){
            cents -=5;
            coinsUsed++;
        }else if(cents >= 2){
            cents -=2;
            coinsUsed++;
        }else if(cents >=1){
            cents -=1
            coinsUsed++;
        }

    }

    console.log(coinsUsed);
}
coins(["1.23"])