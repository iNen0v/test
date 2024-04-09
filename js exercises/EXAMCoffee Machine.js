function coffeeMachine(input){
    let type = (input[0]);
    let sugar = (input[1]);
    let quontity = Number(input[2]);

    let price = 0;

    switch (type) {
        case "Espresso":
            if(sugar === "Without"){
            price = quontity * 0.90 * 0.65;
            }
            if(sugar === "Normal"){
            price = quontity * 1;
            }
            if(sugar === "Extra"){
            price = quontity * 1.20;
            } 
            if (quontity >= 5){
            price = price * 0.75;
            }
            if (price > 15){
            price = price * 0.80;
            }
            break;
        case "Cappucino":
            if(sugar === "Without"){
            price = quontity * 1 * 0.65;
            }
            if(sugar === "Normal"){
            price = quontity * 1.20;
            }
            if(sugar === "Extra"){
            price = quontity * 1.60;
            } 
            if (price > 15){
            price = price * 0.80;
            }
            break;
        case "Tea":
            if(sugar === "Without"){
            price = quontity * 0.50 * 0.65;
            }
            if(sugar === "Normal"){
            price = quontity * 0.60;
            }
            if(sugar === "Extra"){
            price = quontity * 0.70;
            } 
            if (price > 15){
            price = price * 0.80;
            }
            break;
            default:
            break;

    }
console.log(`You bought ${quontity} cups of ${type} for ${(price).toFixed(2)} lv.`)
}

coffeeMachine(["Cappucino", "Normal", "13"]);