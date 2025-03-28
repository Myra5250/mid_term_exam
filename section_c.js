// 1.
function reverseString(str){
    return str.split("").reverse().join("")
}
console.log(reverseString("coding"))

// 2.
function sumEvenNumbers(array){
   return array.filter(num => num % 2 ===0).reduce((sum,num) => sum + num, 0);
}
console.log(sumEvenNumbers([1,2,3,4,5]));

// 3.
function compute(x, y){
    return x ===y ? x * y : x + y;
}
console.log(compute(2,2));
console.log(compute(1,2));

//4.
function isPalindrome(word){
    let reversed = word.split("").reverse().join("");
    return word === reversed;
}
console.log(isPalindrome("pop"));
console.log(isPalindrome("false"));











