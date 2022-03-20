function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    alert(characterType + " is his character in the " + character.innerHTML + " movie!");
}