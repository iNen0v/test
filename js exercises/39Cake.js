function cake(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let totalPieces = width * length;
    let index = 2;

    while (index < input.length) {
        let command = input[index];
        if (command === 'STOP') {
            break;
        }

        let takenPieces = Number(command);
        totalPieces -= takenPieces;

        if (totalPieces < 0) {
            let piecesNeeded = Math.abs(totalPieces);
            console.log(`No more cake left! You need ${piecesNeeded} pieces more.`);
            return;
        }

        index++;
    }

    if (totalPieces >= 0) {
        console.log(`${totalPieces} pieces are left.`);
    }
}
cake[("10","2","2","4","6","STOP")]