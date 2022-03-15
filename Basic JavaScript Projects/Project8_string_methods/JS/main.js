function full_Sentence() { // combining parts to make a whole, ie, concatenating
    var part_1 = "I know this";
    var part_2 = " defies the law of";
    var part_3 = " gravity, but I";
    var part_4 = " never studied law!";
    var part_5 = "<br> -Bugs Bunny.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { // displaying just a section of text on the index.html document as a new string. Count every character, including spaces. First position is 0.
    var Sentence = "I said-a hip, hop, the hippie, the hippie to the hip hip hop-a you don't stop the rock.";
    var Section = Sentence.slice(53, 78);
    document.getElementById("Slice").innerHTML = Section;
}

function shouty_Caps() { // turning all the text to upper case
    let text = "Eureka!";
    let result = text.toUpperCase();
    document.getElementById("uppercase").innerHTML = result;
}

function find_It() { //searching for a particular word in text. It finds the 1st appearance of the word then stops.
    let text = "she sells seashells by the seashore";
    let position = text.search("sea");
    document.getElementById("here_it_is").innerHTML = position;
}

function string_Method() { //turns a numerical value into a string
    var W = 1306;
    document.getElementById("Numbers_to_string").innerHTML = W.toString();
}

function precision_Method() { //number presented at the desired length
    var V = 42.857142857142857142857142857143;
    document.getElementById("Precision").innerHTML = V.toPrecision(7);
}

function fixed_Method() { //number is rounded to a specific number of decimals
    var V = 42.857142857142857142857142857143;
    document.getElementById("round").innerHTML = V.toPrecision(5);
}

function valueof_Method() { //number or string is returned in its original form - that didn't go as I expected
    var V = 42.857142857142857142857142857143;
    var result = V
    document.getElementById("original").innerHTML = result;
}