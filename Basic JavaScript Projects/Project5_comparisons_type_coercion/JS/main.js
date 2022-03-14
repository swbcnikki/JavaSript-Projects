document.write(typeof "10 + 10 + 10" + 20 + "<br>"); //the part in quotes is evaluated as string while the 20 is not evaluated. This is also coersion

document.write(typeof 10 + 10 + 10 + 20 + "<br>"); // only the first 10 is evaluated. The rest is not evaluated and prints as a concatenated number

document.write("205" + 205 + "<br>"); // this does not add, it concatenates. Not all programs do this.

function a_Function() {
    document.getElementById("nan_Demo").innerHTML = 0 / 0; // 0/0 is undefined and returns the NaN
}

function b_Function() {
    document.getElementById("nan_Demo").innerHTML = isNaN("Jenny, Jenny"); // the words are NaN so the answer will be true
}

function c_Function() {
    document.getElementById("nan_Demo").innerHTML = isNaN("8675309") // this is a number so the answer will be false
}

document.write(5E350 + "<br>"); // positive infinity

document.write(-5E350 + "<br>"); // negative infinity

document.write(0.1 > -1); //operator greaterthan

document.write(0.1 < -1); // operator lessthan

console.log(50 + 50); //F12 in html screen, click console

console.log(isNaN("NestInNest")); // same as above, can be used for testing and also to track hidden errors

document.write(12 == 12); // operator is equal to, produces t or f answer

document.write(80 == 08); // same as above

L = 13;
M = 13;
document.write(L === M); // operator comparison, produces t or f answer - here same data str and values

N = "13";
O = 13;
document.write(N === O); // same as above - here different data str same values

P = 31;
Q = 13;
document.write(P === Q); // same as above - here same data str different values

R = 31;
S = "thirteen";
document.write(R === S) // same as above - here diff data str and values

document.write(2 > 1 && 5 < 6); // operator AND produces a t or f answer

document.write(4 > 2 && 10 < 3); // same as above

document.write(2 > 1 || 5 < 6); // operator OR produces a t or f answer

document.write(4 < 2 || 10 < 3); // same as above

function d_Function() {
    document.getElementById("not_Demo").innerHTML = !(12 > 21); // operator NOT produces a t or f answer
}

function e_Function() {
    document.getElementById("not_Demo").innerHTML = !(15 == 15) // same as above
}