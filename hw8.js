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

function isPositive(el) {
    return el > 0;
}

function isMale(el) {
    return el.gender === 'male';
}

function filter(arr, callback) {
    const result = arr.filter(el => {
        if (callback(el)) {
            return el
        }
    })
    return result
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

function dateOutput() {
    const interval = setInterval(() => {
        console.log(new Date())
    }, 3000)
    setTimeout(() => {
        clearInterval(interval)
        console.log('30 секунд прошло');
    }, 30000)
}

dateOutput()


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
        cb();
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => {
    sayHi('Глеб');
});