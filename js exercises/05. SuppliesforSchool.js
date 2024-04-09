function suppliesForSchool (input){
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let preparation = Number(input[2]);
    let percent = Number(input[3]);
    
    let pensPrice = pens * 5.80;
    let markersPrice = markers * 7.20;
    let preparationPrice  = preparation * 1.20;
    let totalPrice = pensPrice  + markersPrice + preparationPrice;
    
    let totalPercent = percent / 100;
    let discount = totalPrice * totalPercent;
    let discountPrice = totalPrice - discount;
    console.log(discountPrice);
}
suppliesForSchool(["2 ","3 ","4 ","25 "]);