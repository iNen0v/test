function radiantsToDegrees (input){
    let radiants = Number(input[0]);
    let degrees = radiants * 180 / Math.PI;
    console.log(degrees);
}
radiantsToDegrees([3.1416]);