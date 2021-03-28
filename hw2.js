//1

var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2  с присвоили значение а + 1
d = b++; alert(d);           // 1  d присвоили значение b(1) потом прибавили 1
c = (2+ ++a); alert(c);      // 5  Инкременировали а (а=3), далее с=2+3=5
d = (2+ b++); alert(d);      // 4  значение b увеличели после сложения (b = 3)
alert(a);                    // 3  
alert(b);                    // 3
//Почему код даёт именно такие результаты?


//2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2); //5  a=a*2=2*2=4; x=1+4

/* 3 Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. 
Затем написать скрипт, который работает по следующему принципу:
	если a и b положительные, вывести их разность;
	если а и b отрицательные, вывести их произведение;
	если а и b разных знаков, вывести их сумму; 
	ноль можно считать положительным числом.
*/
let a = 3, b = 7
if (a >= 0 && b >= 0) {
    console.log(a - b)
} else if (a < 0 && b < 0) {
    console.log(a * b)
} else {
    console.log(a + b)
}

//4. Присвоить переменной а значение в промежутке [0..15]. 
//С помощью оператора switch организовать вывод чисел от a до 15.
  
let a = Math.round(Math.random()*15)
    switch (a) {
        case 0: console.log(0)
        case 1: console.log(1)
        case 2: console.log(2)
        case 3: console.log(3)
        case 4: console.log(4)
        case 5: console.log(5)
        case 6: console.log(6)
        case 7: console.log(7)
        case 8: console.log(8)
        case 9: console.log(9)
        case 10: console.log(10)
        case 11: console.log(11)
        case 12: console.log(12)
        case 13: console.log(13)
        case 14: console.log(14)
        case 15: console.log(15)
    }



/* 5 Реализовать основные 4 арифметические операции (+, -, /, *) 
в виде функций с двумя параметрами.
Обязательно использовать оператор return.*/

function sum(a, b) {
    return a * b
}

function sub(a, b) {
    return a - b
}

function mul(a, b) {
    return a * b
}

function div(a, b) {
    return a / b
}


  
/* 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
 где arg1, arg2 – значения аргументов, operation – строка с названием операции.
  В зависимости от переданного значения операции выполнить одну из арифметических 
  операций (использовать функции из пункта 5) и вернуть полученное значение 
  (использовать switch).*/

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            sum(arg1, arg2)
            break
        case '-':
            sub(arg1, arg2)
            break
        case '*':
            mul(arg1, arg2)
            break
        case '/':
            div(arg1, arg2)
            break
        default:
            alert('Неверная операция')
    }
}

// 7. *Сравнить null и 0. Попробуйте объяснить результат.

alert(null == 0)  // false, т.к. null может сравниваться только с undefined

// 8. *С помощью рекурсии организовать функцию возведения числа в степень. 
//Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
    if (pow == 0) {
        return 1;
    } else if (pow == 1) {
        return val;
    }
    if (pow > 0) {
        return val * power(val, pow - 1);
    } else {
        return 1 / power(val, -pow);
    }
}
alert(power(2,10));  // 1024
alert(power(2,-3));  // 0.125