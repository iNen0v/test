function foodDelivery (input){
    let chikenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veggieMenu = Number(input[2]);

    let chikenPrice = chikenMenu * 10.35;
    let fishPrice = fishMenu * 12.40;
    let veggiePrice = veggieMenu * 8.15;
    let totalMenuPrice = chikenPrice + fishPrice + veggiePrice;
    let desertPrice = 0.20 * totalMenuPrice;
    let totalPrice = totalMenuPrice + desertPrice + 2.50
    console.log (totalPrice);
}
foodDelivery(["2 ","4","3 "]);