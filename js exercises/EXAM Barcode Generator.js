function barCodeGenerator (input){
    let startInterval = input[0];
    let endInterval = input[1];

    let startA = Number(input(startInterval[0]));
    let startB = Number(input(startInterval[1]));
    let startC = Number(input(startInterval[2]));
    let startD = Number(input(startInterval[3]));

    let endA = Number(input(endInterval[0]));
    let endB = Number(input(endInterval[1]));
    let endC = Number(input(endInterval[2]));
    let endD = Number(input(endInterval[3]));

    let buff = "";
    for(let a = startA; a <= endA; a++){
        for (let b = startB; b <= endB; b++){
            for (let c = startC; c<= endC; c++){
                for (let d = startD; d <= endD; d++){
                    if(a % 2 !==0 && b % 2 !==0 & c % 2!==0 && d % 2 !==0 ){
                        buff += `${a}${b}${c}${d} `;
                    }
                        
                }
            }
        
        }
    }
    console.log(buff);
}
barCodeGenerator(["2345,6789"])