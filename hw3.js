
// Задание 1
const password = 'Пароль';
const yourPassword = prompt('Введите пароль');

if (yourPassword === password) {
    alert('Пароль введен верно');
}
else {
    alert('Пароль введен неправильно');
}

// Задание 2
let c = 3;

if (c > 0 && c < 10) {
    console.log('Верно');
}
else {
    console.log('Не верно');
}

// Задание 3
let d = 40;
let e = 90;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Не верно');
}

// Задание 4
let a = '2';
let b = '3';

alert(Number(a) + Number(b));

// Задание 5
let monthNumber = Number(prompt("Введите номер месяца"));

switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert('Зима');
        break;
    case 3:
    case 4:
    case 5:
        alert('Весна');
        break;

    case 6:
    case 7:
    case 8:
        alert('Лето');
        break;

    case 9:
    case 10:
    case 11:
        alert('Осень');
        break;

    default: alert('Такого месяца не существует');
        break;
}
