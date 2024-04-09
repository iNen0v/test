// 1. Име на сериал – текст
// 2. Продължителност на епизод – цяло число в диапазона [10… 90]
// 3. Продължителност на почивката – цяло число в диапазона [10… 120]

function lunchBreak (input){
    let serial = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration= Number(input[2]);

    let luchTime  = (1 / 8) * breakDuration;
    let relaxTime = (1 / 4) * breakDuration;

    let leftTime =breakDuration - luchTime - relaxTime;

    if (leftTime >= episodeDuration ){
        let timeLeft =leftTime - episodeDuration;
        console.log(`You have enough time to watch ${serial} and left with ${Math.ceil(timeLeft)} minutes free time.`);
    }
    if (episodeDuration > leftTime){
        let timeNeeded = episodeDuration - leftTime;
        console.log(`You don't have enough time to watch ${serial}, you need ${Math.ceil(timeNeeded)} more minutes.`);
    }
    
}
lunchBreak(["Teen Wolf","48","60"]);