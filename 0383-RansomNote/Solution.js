/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    //for each letter in ransomNote, if it is in magazine, remove it from magazine
    //if it is not in magazine, return false
    //if all letters in ransomNote are in magazine, return true

    var ransomNoteArray = ransomNote.split("");
    var magazineArray = magazine.split("");
    for (let letters of ransomNoteArray) {
        if (magazineArray.includes(letters)) {
            magazineArray.splice(magazineArray.indexOf(letters), 1);
        } else {
            return false;
        }
    }
    return true;


    
};