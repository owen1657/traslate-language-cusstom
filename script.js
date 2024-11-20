// Vocabulary dictionary
const vocabulary = {
    "i": "Loc", "you": "Mos", "he": "San", "she": "San", "it": "San",
    "we": "Co Mos", "they": "San Mos", "and": "So", "but": "Ma", "or": "Chus",
    "in": "Mos", "on": "So Ma", "with": "Co", "for": "Co", "under": "Ma So", 
    "above": "So Loc", "happy": "Op Tri", "thank": "Loc Cha",
    "where": "Co Cha", "you are": "Mos Cha", "i am": "Loc Cha"
};

// Alphabet dictionary
const alphabet = {
    "a": "chi", "b": "lee", "c": "chus", "d": "la", "e": "cha", "f": "bo",
    "g": "po", "h": "op", "i": "loc", "j": "gee", "k": "tok", "l": "ti",
    "m": "tam", "n": "ma", "o": "so", "p": "lom", "q": "tom", "r": "san",
    "s": "pu", "t": "soc", "u": "mos", "v": "stref", "w": "co", "x": "tro",
    "y": "tri", "z": "zam"
};

// Attach event listener
document.querySelector("button").addEventListener("click", translate);

// Translation function
function translate() {
    const inputText = document.getElementById("inputText").value.toLowerCase().trim();

    if (!inputText) {
        document.getElementById("outputText").innerText = "Please enter some text to translate.";
        return;
    }

    const words = inputText.split(/\s+/);

    const translatedWords = words.map(word => {
        // Check if the word exists in the vocabulary
        if (vocabulary[word]) {
            return vocabulary[word];
        }

        // Translate using the alphabet, if the word isn't in vocabulary
        return [...word].map(letter => alphabet[letter] || letter).join(" ");
    });

    document.getElementById("outputText").innerText = translatedWords.join(" ");
}
