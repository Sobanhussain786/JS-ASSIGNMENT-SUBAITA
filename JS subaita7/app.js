            // CHAP 35-38 
// Q.1
// function showDateTime() {
//     alert("Current Date & Time: " + new Date());
// }
// showDateTime();

//Q.2 
// function greetUser() {
//     let firstName = prompt("Enter your first name:");
//     let lastName = prompt("Enter your last name:");
//     alert("Hello " + firstName + " " + lastName);
// }
// greetUser();

//Q.3
// function addNumbers() {
//     let a = +prompt("Enter first number:");
//     let b = +prompt("Enter second number:");
//     alert("Sum: " + (a + b));
// }
// addNumbers();

// Q.4
// function calculator() {
//     let num1 = +prompt("Enter first number:");
//     let operator = prompt("Enter operator (+, -, *, /):");
//     let num2 = +prompt("Enter second number:");
//     let result;
//     switch (operator) {
//         case '+': result = num1 + num2; break;
//         case '-': result = num1 - num2; break;
//         case '*': result = num1 * num2; break;
//         case '/': result = num2 !== 0 ? num1 / num2 : "Division by zero!"; break;
//         default: result = "Invalid operator";
//     }
//     alert("Result: " + result);
// }
// calculator();

// Q.5
// function square() {
//     let num = +prompt("Enter a number:");
//     alert("Square: " + (num * num));
// }
// square();

// Q.7
// function displayCounting() {
//     let start = +prompt("Enter start number:");
//     let end = +prompt("Enter end number:");
//     let output = "";
//     for (let i = start; i <= end; i++) {
//         output += i + " ";
//     }
//     alert("Counting: " + output);
// }
// displayCounting();

// Q.8 
// function calculateHypotenuse() {
//     let base = +prompt("Enter base:");
//     let perpendicular = +prompt("Enter perpendicular:");
//     function calculateSquare(num) {
//         return num * num;
//     }
//     let hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
//     alert("Hypotenuse: " + hypotenuse);
// }
// calculateHypotenuse();

// Q.9
// function areaRectangle() {
//     let width = +prompt("Enter width:");
//     let height = +prompt("Enter height:");
//     alert("Area of rectangle: " + (width * height));
// }
// areaRectangle();

// Q.10
// function isPalindrome() {
//     let str = prompt("Enter a string:");
//     let reversed = str.split("").reverse().join("");
//     alert(str === reversed ? "Palindrome!" : "Not a palindrome.");
// }
// isPalindrome();

// Q.12
// function findLongestWord() {
//     let str = prompt("Enter a sentence:");
//     let words = str.split(" ");
//     let longest = words.reduce((a, b) => a.length > b.length ? a : b);
//     alert("Longest word: " + longest);
// }
// findLongestWord();

// Q.13
// function countOccurrences() {
//     let str = prompt("Enter a string:");
//     let letter = prompt("Enter a letter to count:");
//     let count = str.split(letter).length - 1;
//     alert("Occurrences of '" + letter + "': " + count);
// }
// countOccurrences();

// Q.14
// function calcCircumference() {
//     let radius = +prompt("Enter radius:");
//     let circumference = 2 * Math.PI * radius;
//     alert("The circumference is " + circumference.toFixed(2));
// }
// function calcArea() {
//     let radius = +prompt("Enter radius:");
//     let area = Math.PI * radius * radius;
//     alert("The area is " + area.toFixed(2));
// }
// calcCircumference();
// calcArea();

        //CHAP #38–42

// Q.1
// function power(a, b) {
//     return Math.pow(a, b);
// }
// alert("Power (2^3): " + power(2, 3));

// Q.3
// function calculateS(a, b, c) {
//     return (a + b + c) / 2;
// }
// function areaOfTriangle(a, b, c) {
//     let S = calculateS(a, b, c);
//     return Math.sqrt(S * (S - a) * (S - b) * (S - c));
// }
// alert("Area of Triangle (3,4,5): " + areaOfTriangle(3, 4, 5).toFixed(2));

// Q.4
function average(m1, m2, m3) {
    return (m1 + m2 + m3) / 3;
}
function percentage(m1, m2, m3) {
    let total = m1 + m2 + m3;
    return (total / 300) * 100;
}
function mainFunction() {
    let m1 = +prompt("Enter marks of subject 1 (out of 100):");
    let m2 = +prompt("Enter marks of subject 2 (out of 100):");
    let m3 = +prompt("Enter marks of subject 3 (out of 100):");

    let avg = average(m1, m2, m3);
    let perc = percentage(m1, m2, m3);

    alert("Average: " + avg.toFixed(2) + "\nPercentage: " + perc.toFixed(2) + "%");
}
mainFunction();

// Q.5
// function customIndexOf(str, char) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === char) return i;
//     }
//     return -1;
// }
// alert("Custom IndexOf (search 'e' in 'Hello'): " + customIndexOf("Hello", "e"));

// Q.6
// function deleteVowels(sentence) {
//     return sentence.replace(/[aeiouAEIOU]/g, "");
// }
// let sentence = prompt("Enter a sentence (max 25 chars):");
// alert("Without vowels: " + deleteVowels(sentence));


