function repainting (input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hoursWork = Number(input[3]);

    let totalNylon = nylon + 2;
    let priceNylon = totalNylon * 1.50;

    let extraPaint = 0.100 * paint;
    let totalPaint = paint + extraPaint;
    let pricePaint = totalPaint * 14.50;

    let thinnerPrice = thinner * 5;

    let totalMaterialPrice = priceNylon + pricePaint + thinnerPrice + 0.40;
    let workersPayPerHour = 0.3 *  totalMaterialPrice;
    let totalWorkersPay = hoursWork * workersPayPerHour;

    console.log(totalMaterialPrice + totalWorkersPay);
}
repainting(["10 ","11 ","4 ","8 "]);