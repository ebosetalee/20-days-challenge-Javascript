const randomWords = [
    "Shine bright like a diamond in the sky",
    "fill the earth with your beautiful heart",
    "make your happiness glow always"
];
const random = Math.floor(Math.random() * randomWords.length) + 1;

function wordInReverse(sentence) {
    let reversed = sentence.split("").reverse().join("");
    let words = [];
    words = sentence.match(/\S+/g);
    let wordsReversed = "";
    for (let i = 0; i < words.length; i++) {
        wordsReversed += words[i].split("").reverse().join("") + " ";
    }
    return reversed + "\n \tAND \n" + wordsReversed;
}

console.log(wordInReverse(randomWords[random]));
