function validateForm() {
    let x = document.forms["myForm"]["cfname"].value;
    if (x == "") {
        alert("Must be filled out");
        return false;
    }
    let y = document.forms["myForm"]["clname"].value;
    if (y == "") {
        alert("Must be filled out");
        return false;
    }
    let z = document.forms["myForm"]["origin"].value;
    if (z == "") {
        alert("Must be filled out");
        return false;
    }
}