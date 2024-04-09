function walking (input){
    let totalStep = 0;

    let index = 0;
    let command = input[index];
    index++;

    while(command !== 'Going home'){
        let steps = Number(command);
        totalStep += steps;

        if (totalStep>= 10000){
            let stepsMore = totalStep - 10000;
            console.log("Goal reached! Good job!");
            console.log(`${stepsMore} steps over the goal!`);
            break;
        }
        
        command = input[index];
        index++;
    }
    if(command === 'Going home'){
        let stepGoingHOme = Number(input[index]);
        totalStep += stepGoingHOme;

        if(totalStep >= 10000){
            let stepsMore =totalStep - 10000;
            console.log("Goal reached! Good job!");
            console.log(`${stepsMore} steps over the goal!`);
        }else{
            let stepsNeeded = 10000 - totalStep;
            console.log(`${stepsNeeded} more steps to reach goal.`);
        }
    }
}
walking(["1000",

"1500",

"2000",

"6500"])