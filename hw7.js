// 2.7
// Задание 1
// Преобразуйте строку js в верхний регистр JS.

let str = 'sfjfkl';
console.log(str.toUpperCase());

//Задание 2
//Создайте функцию, которая в качестве параметров принимает массив строк 
//и строку. Возвращать данная функция должна новый массив, содержащий 
//только те элементы переданного массива, которые начинаются с переданной 
//строки. Регистр символов не должен влиять.

function stringsFilter(arr, str) {
    return arr.filter(item => item.toLowerCase().startsWith(str.toLowerCase()));
}

console.log(stringsFilter(['кошка', 'Кит', 'Комар', 'Носорог'], 'Ко')); // ['кошка', 'комар']
console.log(stringsFilter(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); // ['груша']
console.log(stringsFilter(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино')); // []

// Задание 3
// Округлите число 32.58884:
// До меньшего целого
// До большего целого
// До ближайшего целого

let number = 32.58884;

console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.round(number));

// Задание 4
// Даны числа 52, 53, 49, 77, 21, 32. Необходимо найти среди этих чисел 
// наименьшее и наибольшее числа и вывести их в консоль.

const nums = [52, 53, 49, 77, 21, 32];
console.log(Math.min(...nums));
console.log(Math.max(...nums));

// Задание 5
// Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.

function getRandomNumber() {
    let randomNumber = Math.round((Math.random() * 10));
    console.log(randomNumber);
}
getRandomNumber();

// Задание 6
// Напишите функцию, которая будет принимать на вход целое число, а возвращать массив 
// случайных целых чисел от 0 до переданного числа. Длина массива должна быть в 2 раза 
// меньше переданного числа.

function getRandomArrNumbers(num) {
    const result = [];
    const conditionValue = Math.floor(num / 2);
    for (let i = 0; i < conditionValue; i++) {
        result.push(Math.round(Math.random() * num))
    }
    return result;
}

console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

// Задание 7
// Напишите функцию, которая на вход принимает 2 целых числа, а в качестве результата 
// возвращает случайное целое число в этом диапазоне.

function getRandomNumber(min, max) {
    let randomNumber = Math.round((Math.random() * (max - min)) + min);
    console.log(randomNumber);
}

getRandomNumber(2, 9);

// Задание 8
// Выведите в консоль текущую дату в стандартном режиме. Используйте один из трех 
// рассмотренных в уроке способов.

console.log(new Date());

// Задание 9
// Создайте переменную currentDate и сохраните в нее текущую дату. Выведите дату, которая
// наступит через 73 дня после текущей.

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// Задание 10
// Написать функцию, которая на вход принимает дату, а возвращает ее отображение в виде:
// Дата: <число> <месяц на русском> <год> - это <день недели на русском>.
// Время: <часы>:<минуты>:<секунды>
// Время, которое будет выведено, также хранится в объекте Date.

function formatedDateAndTime(inputDate) {

    const daysOfWeeks = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const dayOfTheWeek = daysOfWeeks[inputDate.getDay()];

    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const month = months[inputDate.getMonth()];


    const year = inputDate.getFullYear();
    const day = inputDate.getDate();
    const hours = inputDate.getHours();
    const minutes = inputDate.getMinutes();
    const seconds = inputDate.getSeconds();

    const formatedDate = `Дата: ${day} ${month} ${year} - это ${dayOfTheWeek}`;
    const formatedTime = `Время: ${hours}:${minutes}:${seconds}`;

    return `${formatedDate}\n${formatedTime}`;
}

console.log(formatedDateAndTime(new Date()));

// Задание 11
// Дан массив слов: 
// ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'].
// Необходимо перемешать элементы массива и вывести на экран пользователю с использованием 
// alert();


function rememberWords() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    let fruit = fruits.sort(() => Math.random() - 0.5); // либо отриц, либо положительное 
    alert(fruit.join(' '));

    let oneQuestion = prompt('Чему равнялся первый элемент массива?');

    if (oneQuestion === null) {
        alert('Вы отменили ввод');
        return;
    }

    let twoQuestion = prompt('Чему равнялся последний элемент массива?');

    if (twoQuestion === null) {
        alert('Вы отменили ввод');
        return;
    }

    if (!oneQuestion.trim() || !twoQuestion.trim()) {
        alert('Строка пустая или состоит только из пробелов');
        return;
    }

    if (oneQuestion === fruits[0] && twoQuestion === fruits[fruits.length - 1]) {
        alert("Поздравляем! Вы угадали оба слова.");
    } else if (oneQuestion === fruits[0] || twoQuestion === fruits[fruits.length - 1]) {
        alert("Вы были близки к победе!");
    } else {
        alert("Вы не угадали ни одного слова.");
    }
} 
