function doingMath() {
    var res = 4 + 3;
    document.getElementById("Math").innerHTML = res;
}

function subtraction_action() {
    var Subtraction = 22 - 20;
    document.getElementById("Math").innerHTML = "22-20=" + Subtraction;
}

function multiplication_station() {
    var simple_Math = 7 * 10;
    document.getElementById("Math").innerHTML = "7 * 10 =" + simple_Math;
}

function division_conquer() {
    var pi4u = 22 / 7;
    document.getElementById("Math").innerHTML = "22 / 7 =" + pi4u;
}

function hey_a_party() {
    var blend = (5 + 4) * 3 / 2 - 1;
    document.getElementById("Math").innerHTML = "5 plus 4, trippled, halfed and subtracted 1 equals " + blend;
}

function modulus_Operator() {
    var not_carry_the_1 = 10 % 3;
    document.getElementById("Math").innerHTML = "Divide 10 by 3 and you have remainder of: " + not_carry_the_1;
}

function negation_Operator() {
    var b = 32;
    document.getElementById("Math").innerHTML = -b;
}

function increment() {
    var t = 6;
    t++;
    document.write(t);
}

function decrement() {
    var e = 6;
    e--;
    document.write(e);
}

function soRandom() {
    window.alert(Math.random() * 1000000);
}

function objectified() {
    document.getElementById("Math").innerHTML = Math.pow(64, 8); //math object like power, sqrt, log etc
}