 // CHAPTER 21-25

// Q1
// var frstName = prompt ("Enter first name");
// var lastName = prompt("Enter last name");
// var fullName = (frstName + lastName);
// console.log("Welcome" , fullName);        

// Q2
// var mobileModel= prompt("Enter Your Favourite Mobile Model");
// var inputLength = mobileModel.length;
// document.write("My Favourite phone is :" + mobileModel +  "<br><br>");
// document.write("Length of string " + inputLength);

// Q3
// var char = "Pakistani";
// var index = char.indexOf("n");
// document.write("String :" + char + "<br><br>");
// document.write("Index of 'n'  :" + index);

// Q4
// var char = "Hello World";
// var findIndex = char.lastIndexOf("l");
// document.write("String :" + char + "<br><br>");
//  document.write("Index of 'l'  :" + findIndex);

// Q5
// var char = "Pakistani";
// var indexThree =char.charAt(3);
// document.write("String :" + char + "<br><br>");
// document.write("Character at index 3 : " + indexThree)

// Q6 ( YE METHOD KARWAYA NAHI HA)

// Q7
// var char = "Hyderabad";
// var afterReplace = char.replace("Hyderabad" , "Islamabad")
// document.write("City : " + char + "<br><br>");
// document.write("After Replacement : " + afterReplace);

// Q9
// var char = "472";
// document.write("Value : " + char + "<br><br>");
// document.write("Type : " + typeof char + "<br><br>");

// var num =472;
// document.write("Value : "  + num + "<br><br>");
// document.write("Type : " + typeof num);

// Q10
// var userInput="peanuts";
// document.write("User Input : " + userInput + "<br><br>");
// var upperCase=userInput.toUpperCase(userInput);
// document.write("Upper Case :" + upperCase);

// Q11
// var userInput="javascript";
// document.write("User Input : " + userInput + "<br><br>");

// var capitalized = userInput.charAt(0).toUpperCase( ) + userInput.slice(1);
// document.write("Title Case : " + capitalized);

// Q12
// var num=25.26;
// var convertNumber=num.toString().replace("." , "");
// document.write("Number : " + num + "<br><br>");
// document.write ("Result : " + convertNumber);

// Q17
// var userInput = "Pakistan";
// var lastChar = userInput.charAt(7)
// document.write("User Input : " + userInput + "<br><br>");
// document.write("Last Character of Input : " + lastChar);

// Q18
// var str = "The quick brown fox jumps over the lazy dog";


// var lowerStr = str.toLowerCase();

// // "the" ke occurrences count karen
// var word = "the";
// var count = 0;

// var wordsArray = lowerStr.split(" "); 

// for (var i = 0; i < wordsArray.length; i++) {
//     if (wordsArray[i] === word) {
//         count++;
//     }
// }

// document.write("Text: " + str + "<br>");
// document.write("There are " + count + " occurrence(s) of word 'the'.");


// Chapter 26 - 30
// Q1
// var userInput= + prompt("Enter Positive Integer");
// var roundofNumber = Math.round(userInput);
// var floorVlue = Math.floor(userInput);
// var  ceilValue= Math.ceil(userInput);


// document.write("Number : " + userInput + "<br><br>");
// document.write("Round of value : " + roundofNumber + "<br><br>");
// document.write("Floor Value :  " + floorVlue + "<br><br>");
// document.write("Ceil  value : " + ceilValue + "<br><br>");

// if(userInput < 0){
//     alert("Enter Positive Integer")

// } 

// Q2
// var userInput= + prompt("Enter Negative Integer");
// var roundofNumber = Math.round(userInput);
// var floorVlue = Math.floor(userInput);
// var  ceilValue= Math.ceil(userInput);

// document.write("Number : " + userInput + "<br><br>");
// document.write("Round of value : " + roundofNumber + "<br><br>");
// document.write("Floor Value :  " + floorVlue + "<br><br>");
// document.write("Ceil  value : " + ceilValue + "<br><br>");

// if(userInput > 0){
//     alert("Enter Negative Integer")

// } 

// Q4
// var random = Math.ceil(Math.random() * 6);

//  document.write(random);
// Q5

// var toss = Math.random();  
// var coin;

// if (toss < 0.5) {
//     coin = "Heads";
// } else {
//     coin = "Tails";
// }

// document.write("<h2>Coin Toss Result: " + coin + "</h2>");

// Q6
// var num = +prompt("Enter Number between 1-100");


// if (num > 100) {
//     alert("Please Enter Number between 1-100");
// } else if (num < 1) {
//     alert("Please Enter Number between 1-100");
// } else {
//     alert("Thanks for understanding my requirement");

    
//     var randomNum = Math.floor(Math.random() * 100) + 1; 

//     document.write("The random number between 1-100 is : " + randomNum);
// }

// Q7

// var  userInput = prompt("Enter your weight (e.g. 50, 50kgs, 50.2kgs, 50.2kilograms):");

// var weight = parseFloat(userInput);


// if (!isNaN(weight)) {
//     document.write("<h2>Your weight is: " + weight + " kilograms</h2>");
// } else {
//     document.write("<h2> Invalid input! Please enter a valid weight.</h2>");
// }


// Q8
//  var secretNum = 7;
//  var num = +prompt("Guess a secret number between 1-10") ;
 
//  if(num > 10 ){
//    alert("Please follow the instruction")
//  } else if (num < 0){
//    alert("Please follow the instruction")
//  } 

//  if(num === secretNum){
//      alert("Congratulate ! you guess the right number");
//     } else{
//         alert("Try ! Again")
//     }