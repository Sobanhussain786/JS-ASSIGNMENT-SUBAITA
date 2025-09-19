// CHAP 14-16
// Q1
//  var student=[];
//   console.log(student);

// Q2(Q1&Q2 SAME)

// Q3
//  var names=["Soban"];
//   console.log(names);

// Q4
//  var number=[10];
//  console.log(number);

// Q5
//  var boolean=[true];
//    console.log(boolean); 

// Q6
// var mixed=[10,"Soban",false];
// console.log(mixed);

// Q7
// document.write("<h3>Qualifications:</h3> <br>")

// var pakistan=[ " 1) SSC <br>" + " 2) HSC <br>" + " 3) BCS <br>" +" 4) BS <br>" + " 5) BCOM <br>" + " 6) MS <br>" + " 7) M.Phil <br>" + " 8) PhD <br>"  ];
// document.write(pakistan);

// Q8
// var studentName=["Soban" , "Ahad" , "Bilal"];
// var studentScore=[360 , 230 ,400];
// var totalMarks=[500];

// document.write(" Score of " + studentName[0] + " is " + studentScore[0] + " .Percentage : " + (studentScore[0] / totalMarks *100 + "%" + "<br>")   );
// document.write(" Score of " + studentName[1] + " is " + studentScore[1] + " .Percentage : " + (studentScore[1] / totalMarks *100 + "%" + "<br>")   );
// document.write(" Score of " + studentName[2] + " is " + studentScore[2] + " .Percentage : " + (studentScore[2] / totalMarks *100 + "%" + "<br>")   );

// Q9
// var color=["Black" + "White" + "Green" + "Yellow"];
// document.write("<b>Initilize Colour : </b>" + color + "<br><br>");

// // a)
// var addStart=prompt("What color you want to add the begining");
// color.unshift(addStart);
// document.write("<b>After Adding color to the begining : </b>" + color + "<br><br>");

// // b)
// var addEnd=prompt("What color you want to add the end");
// color.push(addEnd);
// document.write("<b>After Adding color to the end : </b>" + color + "<br><br>");

// // c)
// color.unshift("pink" + "grey");
// document.write("<b>After Adding two colors to the begining : </b>" + color + "<br><br>");

// // d)
// color.shift()
// document.write("<b>After removing one color to the begining : </b>" + color + "<br><br>");

// // e)
// color.pop();
// document.write("<b>After removing one color to the end : </b>" + color + "<br><br>");

// // f)
// var indexAdd=prompt("At which index you want to add the color" )
// var colorAdd=prompt("What color you want to add");
// color.splice(indexAdd + 0 + colorAdd);
// document.write("<b>After adding color at index </b>" + indexAdd + color + "<br><br>" );

// // g)
// var indexDelete=prompt("At which index you want to delete color");
// var colorDelete=prompt("How many colors you want to delete");
// color.splice(indexDelete + 0 + colorDelete);
// document.write("<b>After deleting " + countDel + " color(s) from index " + indexDel + ":</b> " + colors + "<br><br>");



// Q10
// var studentScore=[320,300,240,200,120,140];
// document.write(" Scores of Students : " + studentScore +  "<br>");
// document.write(" Ordered Scores of Students : " +  studentScore.sort());

// Q11
// var cities=["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
// document.write("Cities List :" + "<br>" + cities + "<br>" +  "<br>");
// document.write("Selected Cities List : " + "<br>"  );
// var copy=cities.slice(2,4);
// document.write(copy);

// Q12
// var arr = ["This", "is", "my", "cat"];

// document.write("Array:<br>" + arr + "<br><br>");

// document.write("String:<br>" + arr.join(" "));

// Q13
// var devices=["keyboard","Mouse","Printer","Monitor"];
// document.write("Devices : <br>" + devices);

// Q15
// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// var options = "<option>" + manufacturers.join("</option><option>") + "</option>";
// document.write("<select>" + options + "</select>");







