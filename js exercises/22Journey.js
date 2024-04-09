function journey (input){
    let budget = Number(input[0]);
    let season = input[1];
    let price = 0;
    switch(season){
        case 'summer':
            if (budget <= 100){
                price = budget * 0.70;
                console.log('Somewhere in Bulgaria');
                console.log(`Camp - ${(budget - price).toFixed(2)}`);
            }else if (budget <= 1000){
                price = budget * 0.60;
                console.log('Somewhere in Balkans');
                console.log(`Hotel - ${(budget - price).toFixed(2)}`);
            }else{
                price - budget * 0.10;
                console.log('Somewhere in Europe');
                console.log(`Hotel - ${(budget - price).toFixed(2)}`);
            }
            break;
        case 'winter':
            if(budget <= 100){
                price = budget * 0.30;
                console.log('Somewhere in Bulgaria');
                console.log(`Camp - ${(budget - price).toFixed(2)}`);
            }else if (budget <= 1000){
                price = budget * 0.20;
                console.log('Somewhere in Balkans');
                console.log(`Hotel - ${(budget - price).toFixed(2)}`);
            }else{
                price = budget * 0.10;
                console.log('Somewhere in Europe');
                console.log(`Hotel - ${(budget - price).toFixed(2)}`);
            }
            break;
}

}
journey(["50", "summer"])