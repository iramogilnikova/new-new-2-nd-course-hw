// footer__button

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

// footer__button2

function rememberWords() {
    let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    let fruit = fruits.sort(() => Math.random() - 0.5); 
    alert(fruit.join(' '));
    
    let oneQuestion = prompt('Чему равнялся первый элемент массива?');
    
    if (oneQuestion === null) {    
        alert ('Вы отменили ввод');
        return;
    }
     
    let twoQuestion = prompt('Чему равнялся последний элемент массива?');
    
    if (twoQuestion === null) {    
      alert ('Вы отменили ввод');
      return;
    }
    
    if (!oneQuestion.trim() || !twoQuestion.trim()) {
      alert ('Строка пустая или состоит только из пробелов');
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
