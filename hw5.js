
// Задание 1 
//Напишите функцию, которая возвращает меньшее из 2 чисел. 
//Например, из двух чисел — 8 и 4 — функция должна вернуть 4. 
//Если передадим 6 и 6, то функция должна вернуть 6.

function getMinNumber(a, b) {
    if (a < b) {
        return a;
    }
    else {
        return b;
    }
}

console.log(getMinNumber(8, 4))
console.log(getMinNumber(6, 6))
console.log(getMinNumber(2, 5))


// Задание 2
//Напишите функцию, которая принимает число, а возвращает
//строку 'Число четное', если число четное,
//'Число нечетное' — если нечетное.

function chekNumber(n) {
    if (n % 2 == 0) {
        return 'Число четное'
    }
    else {
        return 'Число нечетное'
    }
}

console.log(chekNumber(6))
console.log(chekNumber(5))


// Задание 3
//3.1. Напишите функцию, которая принимает параметром число 
//и выводит в консоль квадрат этого числа

function printSquare(n) {
    console.log(n ** 2);
}

//3.2. Напишите функцию, которая принимает параметром число
//и возвращает квадрат этого числа.

function getSquare(n) {
    return n ** 2
}

// Задание 4
//Создайте функцию, которая:
//Спрашивает у пользователя, сколько ему лет.
//Если пользователь вводит отрицательное число, выводит на экран «Вы ввели неправильное значение».
//Если пользователь введет число от 0 до 12, выводит на экран «Привет, друг!».
//Если пользователь введет число больше или равно 13, выводит на экран «Добро пожаловать!».

function welcomeUser() {
    let age = prompt('Сколько вам лет?');

    if (age < 0) {
        alert('Вы ввели неправильное значение')
    } else if (age >= 0 && age <= 12) {
        alert('Привет, друг!')
    } else {
        alert('Добро пожаловать!')
    }
}


// Задание 5
//Напишите функцию, которая на вход принимает 2 числа:
//Проверяет, являются ли переданные параметры корректными числами.
//Если нет, то вернуть строку 'Одно или оба значения не являются числом'.
//Если оба параметра — числа, то вернуть произведение данных чисел.

function mulyiplayNumbers(a, b) {
    if (isNaN(Number(a)) || isNaN(Number(b))) {
        return 'Одно или оба значения не являются числом'
    } else {
        return a * b
    }
}


// Задание 6
//Напишите функцию, которая спрашивает у пользователя число, проверяет его на корректность, 
//после чего возводит его в куб и возвращает следующую строку: 
//'n в кубе равняется <получившееся значение>'. 
//Если переданный параметр не число, вернуть строку 'Переданный параметр не является числом'.
//Проверьте самостоятельно, что данная функция работает корректно 
//и выводит правильный результат с параметрами от 0 до 10 включительно.

function cubeNumber() {
    let n = prompt('Введите число');
    n = Number(n);

    if (isNaN(n)) {
        return 'Переданный параметр не является числом';
    } else {
        return `${n} в кубе равняется ${n ** 3}`;
    }

}
console.log(cubeNumber())


// Задание 7
//Создайте объекты circle1 и circle2 со свойством radius.
//У объектов должен быть методам getArea,
//которое возвращает площадь круга через радиус,
//а также getPerimeter, который возвращает периметр окружности.

function getArea() {
    return this.radius * this.radius * 3.14;
}

function getPerimeter() {
    return this.radius * 3.14;
}

const circle1 = {
    radius: 3,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

const circle2 = {
    radius: 6,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());


// Задание 8
// Сделайте функцию, которая принимает параметром номер месяца (от 1 до 12)
// и возвращает время года, в которое попадает этот месяц
//("Зима", "Лето", "Весна", "Осень").
//Придумайте, как должна работать функция, если ей передать неправильный параметр.
//Выведите пример использования функции в консоль.

function getSeason() {
    let month = +prompt('Введите число');
    if (month === 3 || month === 4 || month === 5) {
        alert('Весна');
    } else if (month === 6 || month === 7 || month === 8) {
        alert('Лето');
    } else if (month === 9 || month === 10 || month === 11) {
        alert('Осень');
    } else if (month === 1 || month === 2 || month === 12) {
        alert('Зима');
    } else {
        alert('Неизвестное значение');
    }
}