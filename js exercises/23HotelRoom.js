function hotelRoom (input){
    let month = input[0];
    let nightCount = Number(input[1]);
    let studioPrice = 0;
    let aparmentPrice = 0;

    switch (month){
        case'May':
        case'October':
            studioPrice = nightCount * 50;
            aparmentPrice = nightCount * 65;
            if(nightCount > 7 && nightCount <= 14){
                studioPrice  *= 0.95;
            }else if (nightCount > 14){
                studioPrice *= 0.70;
            }
            break;
        case'June':
        case'September':
            studioPrice = nightCount * 72.50;
            aparmentPrice = nightCount * 68.70;
            if(nightCount > 14){
                studioPrice *= 0.8;
            }
            break;
        case'July':
        case'August':
            studioPrice = nightCount * 76;
            aparmentPrice = nightCount * 77;
            break;
    }
    if(nightCount > 14){
        aparmentPrice *= 0.9;
    }
    console.log(`Apartment: ${aparmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);


}
hotelRoom (["May",

"15"])

// · За апартамент, при повече от 14 нощувки, без значение от месеца : 10% намаление.