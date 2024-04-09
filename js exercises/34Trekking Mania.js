function trekkingMania (input){
    let groupCount = Number(input[0]);

    let musalaCount = 0;
    let monblanCount = 0;
    let kilimanjaroCOunt =0;
    let k2count = 0;
    let everestCount =0;

    for(let i= 1;i <= groupCount; i++){
        let groupSize = Number(input[i]);
        if (groupSize <= 5){
            musalaCount += groupSize;
        }else if(groupSize >= 6 && groupSize <=12){
            monblanCount += groupSize;
        }else if(groupSize >=13 && groupSize <=25){
            kilimanjaroCOunt += groupSize;
        }else if (groupSize >= 26 && groupSize <=40){
            k2count += groupSize;
        }else
            everestCount += groupSize;
    }
    let totalCount = monblanCount + monblanCount + kilimanjaroCOunt + k2count + everestCount;

    console.log(`${((musalaCount / totalCount) *100).toFixed(2)}%`);
    console.log(`${((monblanCount / totalCount)*100).toFixed(2)}%`);
    console.log(`${((kilimanjaroCOunt / totalCount)*100).toFixed(2)}%`);
    console.log(`${((k2count / totalCount)*100).toFixed(2)}%`);
    console.log(`${((everestCount / totalCount)*100).toFixed(2)}%`);





}
trekkingMania(["10",

"10",

"5",

"1",

"100",

"12","26", "17", "37", "40", "78"])