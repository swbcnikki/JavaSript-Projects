function Call_Loop() {
    var Digit = "";
    var P = 1;
    while (P < 6) {
        Digit += "<br>" + P;
        P++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}