const toGoatLatin = function(S) {
    let result = ""
    let sentence = S.split(' ')
    let vowels =  ["a", "e", "i", "o", "u"]

    for (let i = 0; i < sentence.length; i++) {
       let word = sentence[i].split('')
       let firstLetter = word[0]

       if (!vowels.includes(firstLetter.toLowerCase())){
           word.splice(0,1)
           word.push(firstLetter)
       }

       word.push("ma")
       let addon = ("a").repeat(i + 1)
       word.push(addon)
       result += word.join('') + ' '
    }
return result.substring(0, result.length - 1)
};
