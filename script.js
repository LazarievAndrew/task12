// Создаем функцию для получения и возврата корректного числа:

function getNumber(){
    var number = +prompt('Введите любое число');
    while (isNaN(number)) {
        number = +prompt('Введите число корректно');
    }
    return number;
}

// Создаем функцию для получения и возврата корректного знака математического действия:

function getSymbol(){
    var simbol = prompt('Введите знак математического действия: "+", "-", "*", "/" или "%"');
    if (simbol == '+' || simbol == '-' || simbol == '*' || simbol == '/' || simbol == '%'){
        return simbol;
    } else {
        getSymbol();
    }
}

// функция doMath(x, znak, y):

var x = getNumber();
var znak = getSymbol();
var y = getNumber();

// первое решение:
// function doMath(x, znak, y){
//     if (znak == '+'){
//         return x + y;
//     } else if (znak == '-'){
//         return x - y;
//     } else if (znak == '*'){
//         return x * y;
//     } else if(znak == '/'){
//         return x / y;
//     } else {
//         return x % y;
//     }
// }

function doMath(i, j, k){
    return eval(i + j + k);
}

var act = doMath(x, znak, y);

// Вывод решения:

function actOutput(){
    if (act === Infinity || isNaN(act)){
        alert ('На нуль делить нельзя!!!');
    } else {
        alert ('Результатом действия функции  doMath(' + x + ', ' + znak +', ' + y + ') будет число ' + act);
    }
}

actOutput();
