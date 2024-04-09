function skiTrip (input){
    let dayCount= Number(input[0]);
    let roomType = input[1];
    let feedback = input[2];

    let nightCount = dayCount - 1;
    let price = 0;
    
    switch(roomType){
        case 'room for one person':
            price = dayCount * 18;
            break;
        case 'apartment':
            price = dayCount * 25;
            if(nightCount < 10){
                price *= 0.7;
            }else if (nightCount <= 15){
                price *=0.65;
            }else{
                price *=0.5;
            }
            break;
        case 'president apartment':
            price = dayCount * 35;
            if (nightCount < 10){
                price *= 0.9;
            }else if (nightCount <= 15){
                price *= 0.85;
            }else{
                price *= 0.8;
            }
            break;
    }
    if(feedback === 'positive'){
        price *= 1.25;

    }else if (feedback === 'negative' ){
        price *= 0.9;
    }
console.log(price.toFixed(2));
}
skiTrip(["14","apartment","positive"]);