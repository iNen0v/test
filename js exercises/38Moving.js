function moving(input){
    let width = Number(input[0]);
    let lenght = Number(input[1]);
    let heigth = Number(input[2]);

    let totalVolume = width * lenght * heigth;

    let index = 3;
    let command = input[index];
    index++;

    while(command != 'Done'){
        let boxesCount = Number(command);
        let boxesVolume = boxesCount;

        totalVolume -= boxesVolume;

        if(totalVolume <=0){
            let volumeNeeded = Math.abs(totalVolume);
            console.log(`No more free space! You need ${volumeNeeded} Cubic meters more.`);
            break;
        }

        command = input[index];
        index++
    }

    if (command === 'Done'){
        console.log(`${totalVolume} Cubic meters left.`);
        
    }
    
}
moving(["10",

"1",

"2",

"4",

"6",

"Done"])

