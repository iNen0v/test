function createDivWithText(text){
    var div = document.createElement('div');
    div.innerHTML = text;
    return div;
}
{
    var htmlText = ['Hello!','this is my first time']
    var container = document.getElementById('container');
    for(var i= 0; i < htmlText.length; i++){
        var newDiv = createDivWithText(htmlText[i]);
        container.append(newDiv);
    }
}