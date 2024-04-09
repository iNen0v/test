function demo(input){
    let word = input[0];
    let vowel = 0;

    for(let index = 0; index < word.length; index++) {
        let curretChar = word[index];
        switch(curretChar){
            case 'a': vowel +=1; break;
            case 'e': vowel +=2; break;
            case 'i': vowel +=3; break;
            case 'o': vowel +=4; break;
            case 'u': vowel +=5; break;
        }
          
        
    }
    console.log(vowel);
}
demo(["beer"])