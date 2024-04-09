function easterDecoration (input){
    let index = 0;

    let clients = Number(input[index]);
    index++;
    let money = 0;

    for (let client = 0; client < clients; client++){
        let currentMoney = 0;
        let command = input[index];
        let count = 0;
        index++;
        
        while(command!=='Finish'){
            count++;
            let product = command;
            switch(product){
                case 'basket':
                    currentMoney += 1.50;
                    break;
                case 'wreath':
                    currentMoney += 3.80;
                    break;
                case 'chocolate bunny':
                    currentMoney += 7.00;
                    break;
            }
            command = input[index];
            index++;
        }
        if(count % 2 === 0){
            currentMoney *= 0.80;
        }
        console.log(`You purchased ${count} items for ${currentMoney.toFixed(2)} leva.`);
        money += currentMoney;
    }
    let avg= money / clients;
    console.log(`Average bill per client is: ${avg.toFixed(2)} leva.`);
}
easterDecoration()

