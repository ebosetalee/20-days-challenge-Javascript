const baseList = [2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16];
const digit = Math.floor(Math.random() * 100000);
let base = baseList[Math.floor(Math.random() * baseList.length)];

function calculateBase(number, baseNumber) {
    return `${number} to base ${baseNumber} is ${number.toString(baseNumber)}.`;
}

console.log(calculateBase(digit, base));
