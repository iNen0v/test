function foodForPets(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let allFood = Number(input[index]);
    index++;

    let totalFood = allFood;
    let eatenDogFood = 0;
    let eatenCatFood = 0;
    let biscuits = 0;

    for (let i = 1; i <= days; i++) {
        let dogFood = Number(input[index]);
        index++;
        let catFood = Number(input[index]);
        index++;

        eatenDogFood += dogFood;
        eatenCatFood += catFood;
        totalFood -= (dogFood + catFood);

        if (i % 3 === 0) {
            biscuits += ((dogFood + catFood) * 0.10);
        }
    }

    console.log(`Total eaten biscuits: ${Math.round(biscuits)}gr.`);
    console.log(`${((eatenDogFood + eatenCatFood) / allFood * 100).toFixed(2)}% of the food has been eaten.`);
    console.log(`${((eatenDogFood / (eatenDogFood + eatenCatFood)) * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${((eatenCatFood / (eatenDogFood + eatenCatFood)) * 100).toFixed(2)}% eaten from the cat.`);
}