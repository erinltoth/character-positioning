function countLetters(randString){
  var sChars = randString;
// var sChars = randString.split("").join("");
  var oResult = {};

  for(var i = 0; i < sChars.length; i++) {
    if (sChars[i] != ' ') {
      if (oResult[sChars[i]] === undefined) {
        oResult[sChars[i]] = [];
      }
      oResult[sChars[i]].push(i);
    }
  }
  return(oResult);

}

var uInput = process.argv.slice(2);
var sInput = uInput.join(" ");
countLetters(sInput);

console.log(countLetters(sInput));