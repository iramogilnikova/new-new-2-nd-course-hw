//Задание 1
//С помощью метода массива sort отсортируйте массив people по возрастанию возраста и выведите их в консоль.

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

people.sort((a, b) => a.age - b.age);

console.log(people);

//Задание 2
//Реализуйте функцию filter, которая должна работать аналогично методу массива filter.
// За основу возьмите функцию map, которую мы реализовывали на уроке.
//Чтобы из функции map сделать filter, нужно, в зависимости от результата вызова ruleFunction,
// принимать решение о том, добавлять в результирующий массив очередной элемент или нет.

function map(arr, mapFunction) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(mapFunction(arr[i]));
    }
    return result;
}

function filter(arr, ruleFunction) {
    return map(arr, function (item) {
        if (ruleFunction(item)) {
            return item;
        } else {
            return null;
        }
    }).filter(Boolean);
}

function isPositive(num) {
    return num > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]

const whoMale = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(whoMale, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'}, {name: 'Олег', gender: 'male'}]


//Задание 3
//Напишите программу, которая на протяжении 30 секунд каждые 3 секунды будет выводить в консоль текущую дату.
//Последней строкой должно выводиться сообщение «30 секунд прошло».

let count = 0;
const interval = setInterval(function () {
    console.log(new Date().toLocaleString());
    count += 3;
    if (count >= 30) {
        clearInterval(interval);
        console.log('30 секунд прошло');
    }
}, 3000);


//Задание 4
//Сейчас код ниже выводит в консоль «Привет, Глеб!» сразу после запуска.
//Допишите функцию delayForSecond так, чтобы приветствие выводилось в консоль не сразу,
// а спустя 1 секунду. Используйте setTimeout.

function delayForSecond(callback) {
    setTimeout(callback, 1000);
}
delayForSecond(function () {
    console.log('Привет, Глеб!');
})

//Задание 5
//Посмотрите код. В нём допущена ошибка, и он выводит сообщения не в том порядке:
//Привет, Глеб!
//Прошла одна секунда

//Правильный порядок:
//Прошла одна секунда
//Привет, Глеб!

//Исправьте код, чтобы он выводил сообщения в правильном порядке:

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {   cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(function() {
    sayHi('Глеб');
});