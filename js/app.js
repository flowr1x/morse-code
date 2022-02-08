const field = document.querySelector(".fieldcode"),
      result = document.querySelector(".result");

function onInputField(event) {
    const valueField = event.target.value;
    let stringFinally = "";
    
    for (let letter of valueField) {
        letter = decodeDictionary[letter.toUpperCase()];
        stringFinally += letter ? letter : "";
    }
    
    result.value = stringFinally;
}

field.addEventListener("input", onInputField);

const decodeDictionary = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": "-.-",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "0": "-----",
    ".": "......",
    ",": ".-.-.-",
    ":": "---...",
    ";": "-.-.-.",
    "?": "..--..",
    "!": "--..--"
}