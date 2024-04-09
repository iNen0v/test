function worldSwimmingRecord (input){
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timePerMeter = Number(input[2]);

    let ivanTime = distanceInMeters * timePerMeter;
    let delayCount = Math.floor(distanceInMeters / 15);
    let totalDelayTime = delayCount * 12.5;

    let totalTime = ivanTime + totalDelayTime;

    if (totalTime >= recordInSeconds){
        let secondsMore = totalTime - recordInSeconds;
        console.log(`No, he failed! He was ${secondsMore.toFixed(2)} seconds slower.`);
    }else{
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }

}
worldSwimmingRecord 
// (["10464","1500","20"]);
(["55555.67","3017","5.03"])
