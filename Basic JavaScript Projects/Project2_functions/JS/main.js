function toastParty() { // function that will be invoked - in index.html it is set up to invoke with an onclick button
    var str = "Will you be having wine or whiskey?"; // var is a string
    document.getElementById("Button_Text").innerHTML = str; // innerHTML has been set as the string from the variable assignment
    let A = document.getElementById("Button_Text") // modifying the features of the element value by setting a variable, A, to represent the string.
        // Button_Text is set in the index.html document to create a button with said text defined in html
    A.style.color = "orange"; // changing the color property
    A.style.fontSize = "30px"; // changing fontsize property
    A.style.fontWeight = 900; // changing fontweight property
}

function theySay() { // function that will be invoked
    var sentence = "Math is the purest science"; //
    sentence += " followed by physics, then chemistry then biology"; // 2nd part of the sentence that will be concatenated
    document.getElementById("Concatenate").innerHTML = sentence; //innerHTML has been set as the sentence, from the id Concatenate defined in the index.html
}