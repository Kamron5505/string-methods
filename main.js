let ism = prompt("Введите ваше имя").toUpperCase();
let letter = prompt("Введите одну букву").toUpperCase();
if (ism.includes(letter)) {
    alert(`Your name include the letter "${letter}".`);
}else {
    alert(`Your name don't include the letter "${letter}".`);
}
