function oscars(input) {
    let actor = input[0];
    let pointsEnd = Number(input[1]);
   
    let pointsStart = pointsEnd;
 
    let indexa = 0;
    let points = 0;
 
    for (let i = 3; i < input.length; i++) {
        indexa = input[i].length;
        points = Number(input[i + 1]);
 
        if (i % 2 === 1) {
            pointsEnd = pointsEnd + ((indexa * points) / 2);
        }
    }
 
    if (pointsEnd > 1250.5) {
        console.log(`Congratulations, ${actor} Bullock got a nominee for leading role with ${pointsEnd.toFixed(2)}!`);
    } else {
        console.log(`Sorry, ${actor} you need ${(1250.5 - pointsEnd).toFixed(1)} more!`);
    }
}
 
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"]);