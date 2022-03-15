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
    console.log(h / 12)
}
Divide_numbers();

function Activity() {
    if (new Date().getHours() > 16) { //Condition - to be executed if the condition is true. Is it after 4pm?
        document.getElementById("Busy").innerHTML = "Time between afternoon and evening. I will be pre-sorting and presoaking to do my laundry in the evening";
    }
}

function cut_Off() {
    if (new Date().getHours() > 11) { // Condition - watch for the < and >. It can sometimes hobble you.
        document.getElementById("Breakfast").innerHTML = "There will be no breakfast served after 11am";
    }
}

function enlist_Function() { // if - else function. If the 1st part is false then the 2nd part runs. If the 1st part is true, the 2nd part doesn't run.
    Age = document.getElementById("Age").value;
    if (Age > 18) {
        Reply = "Welcome to the military. We are glad to have you!";
    } else {
        Reply = "We are happy you are eager to join, however, come back when you are at least 18 years old!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Reply;
}

function take_Off() { // if - else function. If the 1st part is true then the 2nd and 3rd don't run. If the 1st part is false, the 2nd runs if it's true, 3rd doesn't. If both 1st and 2nd are false, 3rd runs.
    var Time = new Date().getHours();
    var Reply;
    if (Time < 16 == Time > 0) {
        Reply = "Announce: Board the space ship!";
    } else if (Time >= 17 == Time < 1706) {
        Reply = "Announce: Get ready for take off! We launch at 1721hrs - Loop song until launch: Final Countdown by Europe";
    } else {
        Reply = "Announce: We are aborting the launch. We will try again tomorrow.";
    }
    document.getElementById("Time_of_launch").innerHTML = Reply;
}

// Oops! I realized after the fact that I was supposed to copy what was on the screen so the above is a bonus.

function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    } else if (Time >= 12 == Time < 18) {
        Reply = "It is afternood.";
    } else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}