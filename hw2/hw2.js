// Exercise 1
let z = 10;
alert(z);
z = 20;
alert(z);

// Exercise 2
const iPhone = 2007;
alert(iPhone);

// Exercise 3
const Name = 'Brendan Eich';
alert(Name);


// Exercise 4
let x = 10;
let y = 2;
alert( x + y );
alert( x - y );
alert( x * y );
alert( x / y );

// Exercise 5
let result = 2**5;
alert(result);

// Exercise 6
let a = 9;
let b = 2;
alert( a % b);

// Exercise 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

// Exercise 8
let age = prompt('Сколько вам лет?');
alert(age);

// Exercise 9
let user = {
    name: 'Irina',
    age: 36,
    isAdmin: true,
};

// Exercise 9.1
user['city of residence'] = 'Moscow';

// Exercise 9.2
user.age = 30;

// Exercise 9.3
delete user['city of residence'];

// Exercise 9.4
let info = prompt ('Какую информацию хотите узнать о пользователе?');
alert (user[info]);

// Exercise 10
let username = prompt ('Как вас зовут?');
alert (`Привет, ${username}!`);