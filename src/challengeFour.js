function LongestWord(sen) {

  const words = sen.split(" ");

  let longestWord = words[0];
  for (let i = 0; i < words.length; i++) {

    /* regex [^a-z] finds all non-alphabetical characters; the "i" ensures the matches
       are case-insensitive. */
    words[i].replace(/[^a-z]/gi, '');

    if (words[i] > longestWord) longestWord = words[i];
  }

  sen = longestWord;
  return sen;

}

// keep this function call here
console.log(LongestWord(readline()));