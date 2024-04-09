function cinema (input){
    let typeFilm = input[0];
    let rows =  Number(input[1]);
    let cols = Number(input[2])
    
    let totalPlaces = rows * cols;
    let price = 0;

    if(typeFilm === "Premiere"){
        price = totalPlaces * 12;
    }else if(typeFilm ==="Normal"){
        price = totalPlaces * 7.50
    }else if(typeFilm === "Discount"){
        price = totalPlaces *5
    }
    console.log(`${price.toFixed(2)} leva`);

}   
cinema((["Premiere","10","12"]))

// Premiere – премиерна прожекция, на цена 12.00 лева.

// · Normal – стандартна прожекция, на цена 7.50 лева.

// · Discount – прожекция за деца, ученици и студенти на намалена цена от 5.00 лева.