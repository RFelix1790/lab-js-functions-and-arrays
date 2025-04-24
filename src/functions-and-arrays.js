// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1>num2){
        console.log(num1)
        return num1
    }
    else if (num1<num2) {
        console.log(num2)
        return num2
    }
    else {
        return num1 || num2
    }

}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrayofwords) {
    if (arrayofwords.length === 0) {
        return null
    }

    let word = arrayofwords[0]
    for(let i=0; i<arrayofwords.length;i++){
   if (word.length<arrayofwords[i].length){
    word = arrayofwords[i]
   }
}
return word; 

}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function sumNumbers(sum) {
    let total = 0;
    for (let i=0; i<sum.length;i++){
        total += sum[i]
    }
    return total
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(average) {
    if(average.length === 0) {
        return 0
    }
    const total = sumNumbers(average)
    return total / average.length
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords , wordToSearch) {
if(arrayOfWords.length === 0) {
    return null
}
return arrayOfWords.includes(wordToSearch)
}