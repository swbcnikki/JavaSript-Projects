window.alert("Hello, World!"); // This creates an alert window that pops up with an ok button to close it out.
// window - object, alert - method, () - holds data, "Hello, World!" - string, ; - ends statement

document.write("Hello, World!<br>"); // This creates text in the document itself
// document - object, write - method, () - holds data, "Hello, World!" - string, ; - ends statement

var A = " This is a string."; // This creates a named value that holds any type of needed data. Can be numeric, alpha or a combination of both.
document.write(A + "<br>");
// var - keyword, A - variable name, = - operator assigning value to the variable, "This is a string" - value of the variable, in this case, a string, ; - ends statement

document.write(" Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!\"<br>\"Eat my shorts!\" Bart responded. <br>"); // Using " and ' without affecting the string by "escaping" with a \. This symbol comes before the problem character.
// document - object, write - method, () - holds string, "Lisa told..." - string, \ - escape, <br> creates a new line. Doesn't work everywhere. Research needed. ; - ends statement
// after consultation, the br can be used, just make sure its included before the final parenthesis.

document.write(" \"Be who you are and say what you feel," +
    " because those who mind don\'t matter and those who matter don\'t mind.\"" +
    "-Dr. Seuss <br>"); // Concatenating a string
// document - object, write - method, () - holds string, "\"Be who..." - string, \ - escape, + - operator to concatenate. Notice the addititional "". ; - ends statement

var Family = "The Arezzinis", // creating multiple variables in a statement
    Dad = "Jeremiah",
    Mom = "Hermoine",
    Daughter = "Penny",
    Son = "Zorro";
document.write(Dad + "<br>"); //variable selected and value populates
// var - keyword, Family - object, Dad & Mom & Daughter & Son - variables, Jeremiah & Hermoine & Penny & Zorro - values, document - object, write - method, () - holds variable, ; - ends statement 

document.write(3 + 3);
//document - object, write - method, () - holds the argument, 3+3 - expression, 3 and 3 - parameters, + - operator, ; - end of statement

function My_First_Function() {
    var str = "Orange you lucky I\'m not pink!";
    document.getElementById("Button_Text").innerHTML = str;
    let c = document.getElementById("Button_Text");
    c.style.color = "#ff0000";
    c.style.fontWeight = 600;
    c.style.fontSize = "30px";
}

function changeColor() {
    var text2 = "I am a color with multiple personalities";
    text2 = text2.fontcolor("magenta");
    document.write(text2);
}