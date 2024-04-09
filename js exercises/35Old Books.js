function oldBooks (input){
    let searchedBook = input[0];
    let booksChecked =0;
    let index = 1;
    let command = input[index];
    index++;

    while(command != 'No More Books'){
        let bookTitle = command;
        if(bookTitle === searchedBook){
            console.log(`You checked ${booksChecked} books and found it.`)
            break;
        }
        command = input[index];
        index++
        booksChecked ++;
    }
    if (command === 'No More Books'){
        console.log(`The book you search is not here!`);
        console.log(`You checked ${booksChecked} books.`);
    }
    

}
oldBooks(["Troy",

"Stronger",

"Life Style",

"Troy"])
