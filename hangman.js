Hangman.prototype.showGuessedCharacters = function(){
    let str = '';
    for (let i = 0; i < this.charactersGuessed.length; i++) {
        str += this.charactersGuessed[i];
    }
    return str;
}
