function vacationBookList (input){
    let numPages = Number(input[0]);
    let pages = Number(input[1]);
    let days = Number(input[2]);

    let readBook = numPages / pages;
    let hours = readBook / days;
    console.log(hours);  
}
vacationBookList(["212 ","2 ","2 "]);