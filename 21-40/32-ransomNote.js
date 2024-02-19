// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

 

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true



const canConstruct = function(ransomNote, magazine) {
    let count=0;
    for(let i=0;i<ransomNote.length;i++){
        for(let j=0;j<magazine.length;j++){
            if(ransomNote[i]==magazine[j]){
                magazine=magazine.replace(magazine[j],'');
                count++;
                j=magazine.length;
            }
        }
    }

    return count==ransomNote.length;
};

console.log(canConstruct('aa','aab'));