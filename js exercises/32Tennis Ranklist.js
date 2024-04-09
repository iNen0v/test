function tennisRanklist (input){
    let tournamentCount = Number(input[0]);
    let initialPoints = Number(input[1]);

    let poitWon=0;
    tournamentWon=0;

    for (let i = 2; i < tournamentCount +2; i++){
        let result = input[i];

        if (result === 'W'){
            poitWon += 2000;
            tournamentWon++
        }else if(result === 'F'){
            poitWon +=1200;
        }else if (result === 'SF'){
            poitWon +=720;
        }
    }
    console.log(`Final points: ${initialPoints + poitWon}`);

    let avgPoints = poitWon / tournamentCount;
    console.log(`Average points: ${Math.floor(avgPoints)}`);
    let wonPercent = (tournamentWon / tournamentCount) * 100;
    console.log(`${wonPercent.toFixed(2)}%`);

}
tennisRanklist(["5",

"1400",

"F",

"SF",

"W",

"W",

"SF"])