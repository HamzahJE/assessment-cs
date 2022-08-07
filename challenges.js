// 1) Sum Zero

let addToZero = (arr) => {
    for (i=0;i<arr.length;i++) {
        for (j=1;j<arr.length;j++) {
            if((arr[i]+arr[j])===0){
               return console.log(true)
            } }
    }return console.log(false) 
} 
// O(n^2) time 
// O(n) space


// addToZero([]);
// // -> False

// addToZero([1]);
// // -> False

// addToZero([1, 2, 3]);
// // -> False

// addToZero([1, 2, 3, -2])
// // -> True
// -----------------------------------------------------------------------

// 2) Unique Characters
const hasUniqueChars = (str) => {
    arr=str.split('')
    for (i=1;i<arr.length;i++) {
        if(arr[i-1]===arr[i]){
        return console.log(false) 
        }
    }return console.log(true) 
} 
// time O(n)
// space O(n)

// hasUniqueChars("Monday");
// // -> True

// hasUniqueChars("Moonday");
// // -> False

// -----------------------------------------------------------------------
// 3) Pangram Sentence
const isPangram= (str) =>{
    // str=str.toLowerCase() no needed since regex has i at end so it is case insensitive 
    let regex = /([a-z])(?!.*\1)/gi; 
    // (?!.*\1) is for negative lookahead it only matches if the letter is not present previously meaning it only takes in one match since we have t more than one time if only looks at last t
   if((str.match(regex)).length === 26){
    console.log(str.match(regex))
    return console.log(true)
} return console.log(false) 

}   
// O(n) time
// O(1) space



// isPangram("The quick brown fox jumps over the lazy dog!");
// // -> True

// isPangram("I like cats, but not mice");
// // -> False

// -----------------------------------------------------------------------
// 4) Longest Word

const findLongestWord = (arr) =>{
    let strLength=0
    for(i=0;i<arr.length;i++){
        if(arr[i].length>strLength){
            strLength=arr[i].length
        }
    }return console.log(strLength)
}
// O(n) time 
// O(n) space

// findLongestWord(["hi", "hello"]);
// // -> 5