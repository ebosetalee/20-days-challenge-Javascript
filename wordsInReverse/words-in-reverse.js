const randomWords = [
    "Shine bright like a diamond in the sky",
    "fill the earth with your beautiful heart",
    "make your happiness glow always"
];
const random = Math.floor(Math.random() * randomWords.length);

function wordInReverse(sentence) {
    let reversed = sentence.split("").reverse().join("");
    let words = sentence.split(" ");
    let wordsReversed = "";
    for (let i = 0; i < words.length; i++) {
        wordsReversed += words[i].split("").reverse().join("") + " ";
    }
    return reversed + "\n \tAND \n" + wordsReversed;
}

console.log(wordInReverse(randomWords[random]));
