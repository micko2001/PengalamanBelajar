const removeVowels = function(txt){
    
    return txt.replace(/[aeiou]/gi, '')
}

console.log(removeVowels("bacalagi"))