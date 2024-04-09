function salary(input){ 

     let tabsCount = Number(input[0]);
     let salary = Number(input[1]);

    for (let i = 2; i < tabsCount + 2; i++){
        let tab = input[i];

        if (tab === 'Facebook'){
            salary -= 150;
        }else if (tab === 'Instagram'){
            salary -= 100;
        }else if (tab === 'Reddit'){
            salary -= 50;
        }
        if (salary <= 0){
            console.log("You have lost your salary.");
            return;
        }
    }
    console.log(salary);
}
salary(([(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"])]))