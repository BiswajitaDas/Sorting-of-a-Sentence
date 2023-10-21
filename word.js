function reverseWordsInSentence(sentence) {
    var words = sentence.split(" ");
  
    var reversedWords = words.map(function(word) {
      return word.split("").reverse().join("");
    });
  
    var reversedSentence = reversedWords.join(" ");
  
    return reversedSentence;
  }
  
  var inputSentence = prompt("Enter a sentence:");
  
  var reversedSentence = reverseWordsInSentence(inputSentence);
  
  console.log("Reversed sentence: " + reversedSentence);