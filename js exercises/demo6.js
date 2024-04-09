function oneToThre (input){
    let n = Number(input[0]);

    for(let i = 1; i <= n; i +=3 )
    console.log(Math.pow(2,i));
}
oneToThre((["10"]))