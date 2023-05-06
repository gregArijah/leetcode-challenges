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

    for (let i = 0; i < ransomNoteArray.length; i++){
        for (let j = 0; j < magazineArray.length; j++){
            if (ransomNoteArray[i] === magazineArray[j]){
                magazineArray[j] = null;
                break;
            }
            if (j === magazineArray.length - 1){
                return false;
            }
        }
    }
    return true;
}