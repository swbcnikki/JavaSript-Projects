function Call_Loop() {
    var Digit = "";
    var P = 1;
    while (P < 6) {
        Digit += "<br>" + P;
        P++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//while loop to display message 7 times
function loop_Demo() {
    let Text = ""
    var Q = 1;
    while (Q < 8) {
        Text += "<br>Roll with the punches, it will get better";
        Q++;
    }
    document.getElementById("Mantra").innerHTML = Text;
}

// Finding the length of a word or sentence etc. This includes spaces if there are any
function length_Demo() {
    let text = "JavaScript";
    let length = text.length;
    document.getElementById("Word_length").innerHTML = length;
}

// For loop to display a list

var Chores = ["Laundry", "Clean the fridge", "Vacuum the house", "Take out garbage", "Wash the dishes"];
var Content = "";
var R;

function for_Loop() {
    for (R = 0; R < Chores.length; R++) {
        Content += Chores[R] + "<br>";
    }
    document.getElementById("List_of_Chores").innerHTML = Content;
}

// In dis array, Baby_Picture is the object, 0,1,2,3 are the indices, and eating etc are the properties 
function baby_Pics() { // 
    var Baby_Picture = [];
    Baby_Picture[0] = "bath"
    Baby_Picture[1] = "crying"
    Baby_Picture[2] = "sleeping"
    Baby_Picture[3] = "laughing"
    document.getElementById("Baby").innerHTML = "In this picture, the baby is " + Baby_Picture[3] + ".";
}

//Constant keyword
function constant_Function() {
    const Cereal = { type: "cocoapuffs", brand: "General Mills", serving: "1 cup" };
    Cereal.serving = "3 cups";
    Cereal.shape = "round";
    document.getElementById("Constant").innerHTML = Cereal.brand;
    document.getElementById("Constant").innerHTML = "The shape of " + Cereal.type + " is " + Cereal.shape;
}

// Let keyword - in this case, it will show car because let only changes it within its own block of code and does not affect var
function let_Function() {

    var S = "car";
    document.getElementById("letkeyword").innerHTML = S; {
        let S = "boat";
        document.getElementById("letkeyword").innerHTML + "<br>" + S;
    }
    document.getElementById("letkeyword").innerHTML + "<br>" + S;
}

//Return statement stops the execution of a function and returns a value
function return_Statement() {
    return Math.E
}
document.getElementById("return_Demo").innerHTML = return_Statement();

function return_Statement2(name) {
    return "T2: " + name;
}
document.getElementById("return_Demo2").innerHTML = return_Statement2("Judgement Day");

//Creating an object with let, properties and a method

let burger = {
    make: "In-n-Out ",
    style: "double-double ",
    secret_recipe: "animal-style ",
    option: "animal-style fries",
    description: function incredible_Burger() {
        return "The best fastfood burger is the " + this.make + this.style + this.secret_recipe + " , and, if you are really hungry, include the " + this.option + "!";
    }
};
document.getElementById("Cure_for_HAngry!").innerHTML = burger.description();

// Break can be used to jump out of a loop
function break_Demo() {
    let text = "";
    for (let i = 0; i < 25; i++) {
        if (i === 8) { break; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("break_stmt").innerHTML = text;
}

// Continue is used to break one iteration in the loop if a specified condition is met and continues with the next iteration in the loop
function continue_Demo() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 7) { continue; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("continue_stmt").innerHTML = text;
}