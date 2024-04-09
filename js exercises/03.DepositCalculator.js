function depositCalculator (input){
    let deposite = Number(input[0]);
    let termDeposite =  Number(input[1]);
    let annual = Number(input[2]);
    let price = deposite + termDeposite * ((deposite * annual / 100) / 12);
    console.log(price);
}
depositCalculator(["200 ","3 ","5.7 "]);