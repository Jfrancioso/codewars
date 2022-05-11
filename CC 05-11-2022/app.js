//create a function named spinWords that takes a string as an argument and console log the input backwards 
function spinWords(string){
    //TODO Have fun :)
    var sentence = "";
    var separate = string.split(" ");
    

    for (var i = 0; i < separate.length; i++) {
      if (sentence) sentence += ' ';
      if (separate[i].length >= 5) {
        sentence += separate[i].split("").reverse().join("");
      } else {
        sentence += separate[i];
      }
    }
    return sentence;
  }
  
  console.log(spinWords("Hey OneHundred Devs"));