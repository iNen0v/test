function newHouse(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0;

    switch (flowerType) {
        case 'Roses':
            price = flowerCount * 5;
            break
        case 'Dahlias':
            price = flowerCount * 3.8;
            break
        case 'Tulips':
            price = flowerCount * 2.8;
            break;
        case 'Narcissus':
            price = flowerCount * 3;
            break;
        case 'Gladiolus':
            price = flowerCount * 2.5;
            break;

    }
    if (flowerType === 'Roses' && flowerCount >80){
        price *= 0.9;
    } else if (flowerType === 'Dahlias' && flowerCount > 90){
        price *= 0.85;
    } else if (flowerType === 'Tulips' && flowerCount > 80){
        price *= 0.85;
    } else if (flowerType === 'Narcissus' && flowerCount < 120){
        price *= 1.15;
    } else if (flowerType === 'Gladiolus' && flowerCount < 80){
        price *= 1.20;
    }
        if (budget >= price) {
            console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - price).toFixed(2)} leva left.`);
        } else {
            console.log(`Not enough money, you need ${(price - budget).toFixed(2)} leva more.`);
        }
}
newHouse(["Roses","55","250"])
