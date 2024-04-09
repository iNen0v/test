function timePlus15Minuts (input){
    let hour = Number(input[0]);
    let min = Number(input[1]);
    let mins = hour * 60 + min + 15;

    let newHour = Math.floor(mins /60);
    let newMin = mins % 60;

    if (newHour === 24){
        newHour=0;
    }

    if (newMin < 10){
        console.log(`${newHour}:0${newMin}`)
    }else{
        console.log(`${newHour}:${newMin}`)
    }
}
timePlus15Minuts
// (["12", "49"])
// (["11", "08"])
(["23", "59"])
// (["0", "01"])

// ((["1","46"]))