// Ваше имя и фамилия:
console.log('Vladimir Dzyuba');
// 1. Задайте переменную с именем a, присвойте ей значение 24, выведите значение переменной в консоль.
let a = 24
console.log(a);
//   Задайте переменную с именем b, присвойте ей значение 4, выведите значение переменной в консоль.
let b = 4
console.log(b);
// 2. Задайте четыре переменные и дайте им "говорящие" имена.
//   Названия давайте исходя из того, что в них будет храниться:
//   результаты сложения, вычитания, умножения и деления других переменных.
let addition;
let subtractions;
let multiplications;
let division;
// 3. Присвойте в первую (сложение) переменную a + b, выведите значение в консоль.
addition = a + b;
console.log(addition);
// 4. Присвойте во вторую (вычитание) переменную a - b, выведите значение в консоль.
subtractions = a - b;
console.log(subtractions);
// 5. Присвойте в третью (умножение) переменную a * b, выведите значение в консоль.
multiplications = a * b;
console.log(multiplications);
// 6. Присвойте в четвертую (деление) переменную a / b, выведите значение в консоль.
division = a / b;
console.log(division);
// 7. С помощью переприсваивания переменных увеличьте a на 7, уменьшите b на 4.
a = a + 7;
b = b + 4;
//   Выведите новые значения переменных a и b в консоль.
console.log(a);
console.log(b);
// Выведите в консоль результаты сложения, вычитания, умножения и деления измененных переменных a и b.
addition = a + b;
console.log(addition);
subtractions = a - b;
console.log(subtractions);
multiplications = a * b;
console.log(multiplications);
division = a / b;
console.log(division);
alert(a);

//----------------------------------------------------------

// Ваше имя и фамилия:
console.log('Vladimir Dzyuba');
// 1.Задайте переменную str, запишите в нее следующее значение: how do you do?
// 2.Выведите в консоль значение переменной str
// 3.Выведите в консоль длину строки str
// 4.Выведите в консоль вопросительный знак из строки str (последний символ строки)
// 5.Задайте переменную name, запишите в нее ваше имя. 
// 6. Выведите в консоль фразу, являющуюся результатом слияния слова 'Hello' и строки name  
// 7. Задайте две строки с произвольными значениями. 
// 8. Выведите в консоль результат слияния этих строк и длину полученной строки.
// 9. Задайте строку s,  запишите в нее следующее значение: tractor
// 10. Обращаясь к символам строки s по индексу и используя операцию конкатенации, получите слово 'cat'.
let str = 'how do you do?';
console.log(str);
console.log(str.length);
console.log(str[13]);
let name = 'Vladimir';
console.log('Hello' + ' ' + name);
let a = 'hello';
let b = 'everyone';
console.log(a + ' ' + b);
let s = 'tractor';
console.log(s[3] + s[2] + s[0]);