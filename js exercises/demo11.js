function demo(input){
    let sum = 0;
    let start = Number(input[0]);
    let end = Number(input[1]);

    for (let i = start; i <= end; i++){
        if(i % 9 === 0){
            sum += i
            
        }
    }
    console.log(`The sum: ${sum}`);
    for (let i = start; i <= end; i++){
        if(i % 9 === 0){
            sum += i
            console.log(i);
        }
    }


}
demo(["100", "200"])