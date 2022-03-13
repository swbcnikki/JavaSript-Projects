function my_Dictionary() { //function - subprogram to be called by html code. subprogram's name is my_Dictioncary
    var Animal = { // variable is the object. Here it's declared to be animal
        Species: "Struthio casuarius", //properties are the species, sound, color etc
        Common_Name: "Sourthern Cassowary", // values are Struthio casuarius, low freqency boom etc
        Location: "Aru Islands, Australia, New Guinea",
        Sound: "Low frequency boom",
        Color: "Multiple",
        Lifespan: "40-50 years in the wild"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound; // innerHTML will send animal sound from the dictionary to the index.html file when clicked
}

function dup_Demo() {
    var House = {
        Ranch: "One level home",
        Town: "Two or three level home",
        Apartment: "Unit within a building of multiple units",
        Ranch: "a large piece of farming land" //This is the 2nd Ranch key. When the House.Ranch is run, it will replace the first Ranch value.
    };
    document.getElementById("Dictionary").innerHTML = House.Ranch;
}

function del_Demo() {
    var House = {
        Ranch: "One level home",
        Town: "Two or three level home", // when the House.Town is run, it will show undefined because it has been deleted.
        Apartment: "Unit within a building of multiple units",

    };
    delete House.Town;
    document.getElementById("Dictionary").innerHTML = House.Town;
}