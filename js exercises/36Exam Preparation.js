function examPreparation(input){
    let maxBadGrades = Number(input[0]);
    let index = 1;
    let command = input[index];
    index++;
    let gradesCount = 0;
    let badGradesCount = 0;
    let gradesSum = 0;
    let problemName = '';

    while(command !== 'Enough'){
        problemName = command;
        let problemGrade = Number(input[index]);
        index++;

        if(problemGrade <= 4){
            badGradesCount++;
        }

        if (badGradesCount === maxBadGrades){
            console.log(`You need a break, ${badGradesCount} poor grades.`);
            return;
        }

        gradesSum += problemGrade;
        gradesCount++;
        
        command = input[index];
        index++;
    }

    if (command === 'Enough'){
        let avgGrade = gradesSum / gradesCount;
        console.log(`Average score: ${avgGrade.toFixed(2)}`);
        console.log(`Number of problems: ${gradesCount}`);
        console.log(`Last problem: ${problemName}`);
    }
}
examPreparation(["3","Money","6","Story","4","Spring", "Time","5","Bus","6","Enough"])
