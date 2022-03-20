function Number_Function() {
    var Number_Output;
    var Numbers = document.getElementById("Number_Input").value;
    var Number_String = " is the winning number! You get a car, and you get a car, EVERYBODY GETS A CAR!";
    switch (Numbers) {
        case "748159":
            Number_Output = "748159" + Number_String;
            break;
        case "321654":
            Number_Output = "321654" + Number_String
            break;
        case "632357":
            Number_Output = "632357" + Number_String
            break;
        case "258963":
            Number_Output = "258963" + Number_String
            break;
        case "987147":
            Number_Output = "987147" + Number_String
            break;
        default:
            Number_Output = "Please enter the number exactly as it was given to you.";
    }
    document.getElementById("Output").innerHTML = Number_Output;
}

function getElementsByClassName_Function() {
    var T = document.getElementsByClassName("Click");
    T[0].innerHTML = "Grab a chair";
}

var c = document.getElementById("canvas_Name");
var ctx = c.getContext("2d");
ctx.font = "30px Comic";
ctx.fillText("BATMAN!", 10, 150);
var my_Gradient = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
my_Gradient.addColorStop(0, "white");
my_Gradient.addColorStop(1, "yellow");
ctx.fillStyle = my_Gradient;
ctx.fillRect(20, 20, 150, 100);