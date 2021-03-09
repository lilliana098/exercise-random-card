window.onload = () => {
    document.querySelector('.card').classList.add(randomSuit());
    document.querySelector('.card').innerHTML = randomNumber();
};
let randomNumber = () => {
    let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let numeritos = Math.floor(Math.random() * numbers.length);
    return numbers[numeritos];
};
let randomSuit = () => {
    let suit = ["spade", "club", "hearts", "diams"];
    let dibujitos = Math.floor(Math.random() * suit.length);
    return suit[dibujitos]
};