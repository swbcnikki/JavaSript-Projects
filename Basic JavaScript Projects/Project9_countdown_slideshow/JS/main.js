function countdown() { //
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1; // counts down in seconds from whatever number you put in the text box
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000); // 1 second in between 
        if (seconds == -1) {
            alert("Time's up!"); // pop up with time's up alert
            clearTimeout(time); // clears out the ticking seconds
            timer.innerHTML = "";
        }
    }
    tick(); // shows number of seconds counting down
}

var slideIndex = 1;
showSlides(slideIndex);

//Next/back controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides")
    var dots = document.getElementsByClassName("dot");
    if (n > 9) { slideIndex = 1 }
    if (n < 1) { slideIndex = 9 }
    for (i = 0; i < 9; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < 9; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += "active";
}