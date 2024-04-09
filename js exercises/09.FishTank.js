function fishTank (input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    
    let volume = length * width * height;
    let volumeLiter = volume / 1000;
    let totalPercent = percent / 100;
    
    let totalLiters = volumeLiter * (1 - totalPercent);
    console.log(totalLiters);
}
fishTank(["85 ","75 ","47 ","17 "]);