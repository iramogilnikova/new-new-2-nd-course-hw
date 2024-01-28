// Задание 1
// Дан массив: [1, 5, 4, 10, 0, 3].
// Необходимо создать цикл, который будет выводить элементы массива до тех
// пор, пока не встретит значение 10.
// После вывода значения 10 в консоль цикл должен прекратить свою работу.

const arr = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (arr[i] === 10) {
        break
    }
}

// Задание 2
// Дан массив: [1, 5, 4, 10, 0, 3].
// Найдите позицию (индекс) числа 4 в этом массиве.
// Подсказка: Задачу можно решить методом перебора элементов или используя 
// метод массива indexOf.

const arr = [1, 5, 4, 10, 0, 3];

console.log(arr.indexOf(4));

// Задание 3
// Дан массив чисел: [1, 3, 5, 10, 20].
// С помощью метода join выведите элементы массива через пробел (пустую строку ' ').

const numbers = [1, 3, 5, 10, 20];
console.log(numbers.join(' '));


// Задание 4
// С помощью вложенных циклов создайте многомерный массив вида: 
// [[1, 1, 1], [1, 1, 1], [1, 1, 1]].

const arr = [];
for (i = 0; i < 3; i++) {
    const nestArr = [];
    for (k = 0; k < 3; k++) {
        nestArr.push(1);
    }
    arr.push(nestArr);
}
console.log(arr);


// Задание 5
// Дан массив: [1, 1, 1].
// Добавьте в конец массива значения 2, 2, 2.

const arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);

// Задание 6
// Дан массив: [9, 8, 7, 'a', 6, 5].
// С помощью метода sort отсортируйте массив и удалите букву 'a'
// из данного массива. В результате работы программы вывести массив,
// состоящий из цифр.

const arr = [9, 8, 7, 'a', 6, 5];
const result = arr.filter((el) => typeof el === 'number');
let arrNumbs = result.sort();
console.log(arrNumbs);

// Задание 7
// Дан массив: [9, 8, 7, 6, 5].
// Попросить пользователя угадать число (использовать prompt). Если значение, 
// которое ввёл пользователь, есть в массиве, вывести в alert «Угадал», в 
// противном случае вывести «Не угадал».

const arr = [9, 8, 7, 6, 5];
let userAnswer = Number(prompt('Угадайте число'));

if (isNaN(userAnswer)) {
    console.log('nan')
} else if (arr.includes(userAnswer)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

// Задание 8
// Дана строка: 'abcdef'.
// Необходимо, чтобы программа вывела в консоль 'fedcba'.

const str = 'abcdef';
const reverseStr = str.split('').reverse().join('');
console.log(reverseStr);

// Задание 9
// Дан массив: [[1, 2, 3,],[4, 5, 6]].
// Выведите в консоль массив вида: [1, 2, 3, 4, 5, 6].

const arr = [[1, 2, 3,], [4, 5, 6]];
const flatArr = arr.flat();
console.log(flatArr)

// Задание 10
// Создайте массив с произвольными числами (диапазон от 1 до 10). Переберите его с 
// помощью цикла for и в каждой итерации выведите в консоль сумму текущего и 
// следующего элементов массива.
// Следующий элемент массива можно получить с помощью индекса: i + 1. 
// Обратите внимание, что у последнего элемента нет следующего.


let arr = [1, 3, 5, 7, 9];

for (let i = 0; i < arr.length - 1; i++) {
    let sumArr = arr[i] + arr[i + 1];
    console.log(`Сумма текущего элемента равна ${arr[i]} и следуещего эелемента ${arr[i + 1]} = ${sumArr}`);
}

// Задание 11
// Создайте функцию, которая принимает на вход массив целых чисел, 
// а возвращает массив квадратов этих чисел.

function getSquare(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] ** 2);
    }
    return result;
}

console.log(getSquare([1, 3, 5, 7, 9]));


// Задание 12
// Создайте функцию, которая принимает на вход массив строк, а возвращает массив длины слов.
// Пример вызова:
// getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']); // [5, 0, 4, 19, 5]

let words = ['солнце', 'звезды', 'луна', '-'];

function getLengthWords(words) {
    return words.map(word => word.length);
}

console.log(getLengthWords(words));

// Задание 13
// Создайте функцию, которая принимает на вход массив целых чисел, 
// а возвращает массив содержащий только отрицательные значения.

function filterNumbers(array) {
    return array.filter(num => num < 0);
}

console.log(filterNumbers([-5, 0, 7, -13, 26]));
console.log(filterNumbers([25, -35, 0, -44, -103])); 