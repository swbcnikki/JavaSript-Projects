var F = 25; // global variable example

function Subtract_numbers() {
    document.write(65 - F + "<br>");
}

function Add_numbers_1() {
    document.write(F + 5 + "<br>");
}
Subtract_numbers();
Add_numbers_1();


function Multiply_numbers() { // local variable example
    var G = 11;
    document.write(7 * G + "<br>");
}

function Add_numbers_2() { // local variable example
    var G = 6;
    document.write(G + 4 + "<br>");
}
Multiply_numbers();
Add_numbers_2();

function Divide_numbers() {
    var H = 144
    document.write(H / 12)
}
Divide_numbers();

function Activity() {
    if (new Date().getHours() > 4) { //Condition - to be executed if the condition is true. Is it after 4pm?
        document.getElementById("Busy").innerHTML = "Time between afternoon and evening. I will be pre-sorting and presoaking to do my laundry in the evening";
    }
}

function cut_Off() {
    if (new Date().getHours() < 11) { // Condition
        document.getElementById("Breakfast").innerHTML = "There will be no breakfast served after 11am";
    }
}