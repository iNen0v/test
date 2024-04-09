function easterEggsBattle (input){
    let index = 0;
    
     let playerOneEggs = Number(input[index]);
     index++;
     let playerTwoEggs = Number(input[index]);
     index++;

     let command = input[index];
     index++;
     let isEmptyPlayerEgg = false;
     while(command !== 'End'){
        switch(command){
            case 'one':
                playerTwoEggs --;
                break;
            case 'two':
                playerOneEggs--;
                break;
        }
        if (playerTwoEggs ===0){
            console.log(`"Player two is out of eggs. Player one has ${playerOneEggs} eggs left.`);
            isEmptyPlayerEgg = true;
            break;
        }else if (playerOneEggs ===0){
            console.log(`Player one is out of eggs. Player two has ${playerTwoEggs} eggs left.`);
            isEmptyPlayerEgg = true;
            break;
        }
        command = input[index];
        index++;
        
     }
     if (!isEmptyPlayerEgg){
        console.log(`Player one has ${playerOneEggs} eggs left.`);
        console.log(`Player two has ${playerTwoEggs} eggs left.`);
     }


    
}
easterEggsBattle ([
    '5',   '4',   'one',
    'two', 'one', 'two',
    'two', 'End', '',
    '',    ''
  ])