function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride";
}

function ballot_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not of age" : "You are eligible";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function Vacation(Where, When, Who, How) {
    this.Vacation_Where = Where;
    this.Vacation_When = When;
    this.Vacation_Who = Who;
    this.Vacation_How = How;
}
var Geralt = new Vacation("Brazil", "Immediately", "Triss", "Horseback")
var Yennefer = new Vacation("Australia", "Next year", "Alone", "Magic Mirror")
var Dandelion = new Vacation("Italy", "In 6 months", "Priscilla", "Boat")

function z_Function() {
    document.getElementById("New_and_This").innerHTML =
        "The " + Yennefer.Vacation_How + " will take Yennefer to " + Yennefer.Vacation_Where + " for some " + Yennefer.Vacation_Who + " time " + Yennefer.Vacation_When;
}

function Adoptable_kitten(age, gender, size, breed) {
    this.Adoptable_kitten_age = age;
    this.Adoptable_kitten_gender = gender;
    this.Adoptable_kitten_size = size;
    this.Adoptable_kitten_breed = breed;
}
const Penny = new Adoptable_kitten("Young", "Female", "Medium", "Domestic Short Hair");

function y_Function() {
    document.getElementById("ObjConstr_Demo").innerHTML =
        "Penny is a " + Penny.Adoptable_kitten_age + " playful " + Penny.Adoptable_kitten_breed + " ready to be adopted today!";
}

function count_Function() {
    document.getElementById("nested_Function").innerHTML = Count();

    function Count() {
        var Begin_at = 7;

        function Plus_eight() { Begin_at += 8; }
        Plus_eight();
        return Begin_at;
    }
}