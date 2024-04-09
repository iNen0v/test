function fruitOrVeggie (input){
    let food = input[0];
    switch(food){
        case "banana":
        case  "grapes":
            console.log("fruit"); break;
        case "carrot":
            console.log("vegetable"); break;

        default:
            console.log("unkown"); break;
    }
}
fruitOrVeggie(["banana"])