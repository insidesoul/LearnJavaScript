//1. Создайте объект с именем greeting, у которого свойства - название языка (english, 
//   russian),  а значения свойств - фраза «Добро пожаловать!» на этом языке.
let greeting = {
  english: 'Welcome!',
  russian: 'Добро пожаловать!',
}
// 2. Выведите в консоль приветствие на русском языке.
console.log(greeting.russian);
//3. Создайте объект car, который описывает автомобиль. 
//   Учитывайте не только характеристики автомобиля, но и владельца, регистрационные данные
let car = {
  marka: 'BMW',
  person: 'Jack',
  run: 135135,
  status: 'Good',
}
// 4. Выведите в консоль имя владельца автомобиля. 
console.log(car.person);

//-----------------------------------------------------------------------------------------------

// Конспект
// Как определить, существует ли какое-то свойство у объекта:

let user = {
  name: 'Bob',
  age: 30,
  isStudent: true  
}
// 1 способ. Неявное преобразование в булевый тип:

if  (user.age) console.log ('Yes');  //'Yes'
// Здесь user.age неявно преобразуется в булевый (логический) тип, и т.к. значение user.age не равно нулю, NaN, пустой строке или undefined, то значение выражения в скобках будет true и в консоль будет выведено 'Yes'.

// 2 способ. Преобразование в булевый тип с помощью функции Boolean().

console.log(Boolean(user.age)); //true
// 3 способ. Преобразование в булевый тип c помощью двойного «не»: !!

console.log(!!(user.age)); //true
// 4 способ. Доступ к свойствам объекта через квадратные скобки.

console.log(!!user['age']); //true
const a = 'age';
console.log(!!user[a]); //true
if  (user[a]) console.log ('Yes');  //'Yes'
// 5 способ. Проверка существования свойства – сравнение его с undefined.

let user = {
  name: 'Alice',
  age: 25,
 }
console.log(user.address === undefined);  //true (свойства address нет)
// Вышеперечисленные способы не всегда работают, если свойство есть, но оно пустое (равно нулю, NaN, пустой строке или undefined). В этих случаях помогает использование метода hasOwnProperty().

// 6 способ. Использование метода hasOwnProperty().

// Чтобы проверить, есть ли вообще свойство у объекта, воспользуемся методом hasOwnProperty(), который возвращает логическое значение, указывающее, содержит ли объект указанное свойство. Например,

console.log(user.hasOwnProperty('age'));
// 7 способ. Использование переменной вместо свойства.

const a = 'age';
console.log(user.hasOwnProperty(a));
// 8 способ. Проверка существования свойства: "key" in obj .

// Обычно строгого сравнения "=== undefined" достаточно для проверки наличия свойства. Но есть особый случай, когда оно не подходит, и нужно использовать in.

// Это когда свойство существует, но содержит значение undefined:

let user = {
  name: 'Alice',
  age: 25,
  isStudent: true,
  address: undefined,
}

console.log(user.address === undefined);  // true (свойство address есть, но его значение undefined)
console.log(user.lastName === undefined); // true (свойства lastName нет)

console.log('address' in user);  // true (свойство address есть)
console.log('lastName' in user); // false (свойства lastName нет)

//---------------------------------------------------------------------------------------------------

// Тема: Операции с объектами
// Ваши имя и фамилия: 
//1. Создайте объект с именем user, который описывает пользователя  
//   cо свойствами username и status (online или offline).
let user = {
  username: 'Vladimir',
  status: 'online',
}
//2. Выведите объект в консоль.
console.log(user);
//3. Добавьте свойство lastActivity, значение которого - 
//   количество минут проведенных в сети. 
user = {
  username: 'Vladimir',
  status: 'online',
  lastActivity: 36,
}
//4. Выведите объект в консоль.
console.log(user);
//5. Добавьте свойство password.
user = {
  username: 'Vladimir',
  status: 'online',
  lastActivity: 36,
  password: 'qwerty',
}
//6. Удалите свойство lastActivity.
delete user.lastActivity;
//7. Добавьте свойство address, являющееся объектом и содержащее 
//   название города, штата и индекса.
user = {
  username: 'Vladimir',
  status: 'online',
  lastActivity: 36,
  password: 'qwerty',
  address: {
    city: 'Florida',
    state: 'Kz',
    index: 23413,
  }
}
//8. Выведите в консоль город проживания пользователя.
console.log(user.address.city);

//-----------------------------------------------------------------------------------------------

//1. Создайте объект, описываающий книгу со следующими свойствами:
//   authorFirstName, authorLastName, title, style, year,  numberOfPages,
//   задайте значения свойств объекта.
let book = {
  autorFirstName: 'Lend',
  autorLastName: 'Helder',
  title: 'King',
  style: 'Fantasy',
  year: 2022,
  numberOfPages: 654,
}
//2. Проверьте существование этих шести свойств у объекта разными способами.
if (book.autorFirstName)
  console.log('Yes');
console.log(!!(book.autorLastName));
console.log(Boolean(book.title));
console.log(!!book['style']);
const a = 'year';
console.log(!book[a]);
console.log(book.numberOfPages !== undefined);
console.log(book.hasOwnProperty('year'));
console.log('numberOfPages' in book);
//3. Проверьте существование у объекта свойства hardcover
console.log('hardcover' in book);

//-----------------------------------------------------------------------------------------------

//Создайте объект, описывающий вас как студента группы QA5.
const student = {
  name: 'Vladimir',
  age: 20,
}
//Добавьте любое свойство
student['city'] = 'Apatity';
//Измените значение какого-нибудь свойства
student.age = 21;
//Удалите любое свойство
delete student.name;
//Определите, есть ли у объекта свойство hasBackgroundAsProgrammer
console.log('hasBackgroundAsProgrammer' in student);
console.log(student);

//-----------------------------------------------------------------------------------------------

//1. Задайте переменную x, присвойте ей значение, например, 1.
const x = 1;
//2. Составьте и выведите в консоль условия, которые будут проверять: 
// является ли величина x  положительной
console.log(x >= 0);
// является ли величина x отрицательной
console.log(x < 0);
// является ли величина x - четной
console.log((x % 2) === 0);
// является ли величина x - нечетной
console.log((x % 2) === 1);
// правда ли, что х < 10?
console.log(x < 10);
//3. Задайте две переменных a и b, присвойте им соответствующие значения 5 и 15.
//   Составьте и выведите в консоль условия, значением которых будет true:
const a = 5;
const b = 15;
// a меньше b
console.log(a < b);
// a в три раза меньше b
console.log(a*3 === b);
// b кратно a
console.log(b%a === 0);
// разность b и a - четное число
console.log((b-a)%2 === 0);
// b - двухзначное число
console.log((b/10) > 0.9);

//-----------------------------------------------------------------------------------------------

//1. Задайте переменную x, присвойте ей значение 10.
const x = 10;
//1. Составьте с помощью операции ИЛИ и выведите в консоль условия, значением которых будет true:
//  ***** Например, "величина x - отрицательна или величина x равна 10 " ******
   console.log(x < 0 || x === 10); //выведет true
// величина x - положительная или меньше 5
console.log(x > 0 || x < 5);
// тип переменной x - строка или число
console.log(typeof x === 'string' || typeof x === 'number');
// x - четное или двухзначное число
console.log(x % 2 === 0 || x / 10 > 0.9);
//2. Задайте две переменных a и b, присвойте им соответствующие значения -1 и 1.
//   Составьте и выведите в консоль условия, значением которых будет false:
// a больше b или b  равно 0
const a = -1;
const b = 1;
console.log(a > b || b === 0);
// a положительно или b отрицательно
console.log(a > 0 || b < 0);
// a равно 1 или b равно -1
console.log(a === 1 || b === -1);

//-----------------------------------------------------------------------------------------------

//Тема: И (&&)
//1. Задайте переменные x и y, присвойте им соответственно значения 15 и '15'.
const x = 15;
const y = '15';
// Составьте с помощью операции И и выведите в консоль условия, значением которых будет true:
console.log(x === 15 && y == x);
// тип переменной x - число и тип переменной y - строка
console.log(typeof x === 'number' && typeof y === 'string');
// x и y равны по значению, но типы у них разные
console.log(x == y && x !== y);
//2. Задайте  переменную a, присвойте ей значение 20. Составьте и выведите 
//   в консоль условия с помощью операции И, значением которых будет true:
//   a больше 10 и меньше 50
const a = 20;
console.log(a > 10 && a < 50);
//   a  -  двухзначное число
//   a - четное положительное число
console.log((a / 10) > 0.9 && a > 0);
//3. Задайте две произвольные переменные. С использованием логической операции 
//   И составьте два истинных и одно ложное условия и выведите условия в консоль.
const q = 5;
const w = 2;
console.log(q > w && typeof q === 'number');
console.log((w / 10) <= 0.9 && (q - w) > 0);
console.log(q < w && q > w);

//-----------------------------------------------------------------------------------------------

//Тема: НЕ (!)
//1. Задайте переменную x, присвойте ей значение 100.
const x = 100;
// Составьте с помощью операции НЕ(!) и выведите в консоль условия, 
// значением которых будет true: (например, console.log(!(x===0)) или console.log(x!==0))
console.log(!(x < 99));
// x не меньше 50
console.log(!(x < 50));
// x не делится на 3
console.log((x % 3) !== 0);
// тип переменной x - не строка
console.log(typeof x !== 'string');
// x не отрицательное число
console.log(!(x<0));
//2. Задайте  переменную a, присвойте ей значение null. Придумайте и выведите 
//   в консоль два условия с использованием переменной а и операции НЕ(!), 
//   значением которых будет true:
const a = null;
console.log(!null);
console.log(null !== 1);
//3. Выведите в консоль преобразованные к логическому типу значения: 
//   5, 'pasv', 0, '', null, undefined 
console.log(!!5, !!'pasv', Boolean(0), Boolean(''), !!null, Boolean(undefined));

//-----------------------------------------------------------------------------------------------

//Тема: Верное условие if и неверное else
//1. Задайте 2 переменные x и y, присвойте им значения 12 и 7
//  (значения могут меняться, ваш код должен работать правильно всегда!)
//  Найти и вывести в консоль большее из этих двух чисел.
const x = 12;
const y = 7;
if (x > y) {
  console.log(x);
} else {
  console.log(y);
}
//2. Задайте переменную a, присвойте ей произвольное значение.
//  Определите, является ли это значение четным.
const a = 5;
if (a >= 0) {
  console.log("Even");
} else {
  console.log('Odd');
}
//3. Задайте переменную age (возраст человека), присвойте ей произвольное значение.
//   Определите, является ли этот человек школьником
//  (школьником будем считать человека в возрасте от 5 до 18 лет включительно).
const age = 23;
if (age <= 18 && age >= 5) {
  console.log('Schoolboy');
  } else {
  console.log('Not schoolboy');
}
//4. Задайте переменную year, присвойте ей произвольное значение. 
//   Определите, относится ли год к XXI веку 
//   (XXI век начинается с 2001 года и заканчивается в 2100 году).
 const year = 2000;
if ( year >= 2001 && year < 2100) {
  console.log('XXI century');
}  else {
  console.log('Another century');
}
//5. Задайте переменную  month, присвойте ей значение от 1 до 12.
//   Выведите в консоль название поры года (Winter, Spring, Summer, Fall). 
const month = 2;
if (month === 12 || month < 3) {
  console.log('Winter');
} else if (month > 2 && month < 6) {
  console.log('Spring');
} else if (month > 5 && month < 9) {
  console.log('Summer');
} else {
  console.log('Fall');
}

//-----------------------------------------------------------------------------------------------

//Тема: Тернарный оператор
//1. Задайте переменную x, присвойте ей произвольное значение.
//   Получите в переменной isPositive значение true, если x>0
//   и false, если x<=0 (используйте тернарный оператор)
let x = 31;
let isPositive = x > 0 ? 'true' : 'false';
console.log(isPositive);
//2. Задайте переменную y, присвойте ей произвольное значение.
//   Получите в переменной isEven значение true, если y четное,
//   и false, если y нечетное (используйте тернарный оператор)
let y = 23;
let isEven = y > 0 ? 'true' : 'false';
console.log(isEven);
//3. Задайте переменную z, присвойте ей произвольное значение.
//   Получите в переменной isString значение true, если это строка,
//   и false в противном случае.
let z = '21';
let isString = typeof z === 'string' ? 'true' : 'false';
console.log(isString);
//5. Задайте переменную number, присвойте ей произвольное числовое значение.
//   Если число четное, увеличьте его на 1, если нечетное - уменьшите его на 1. 
//   Получите в переменной newNumber значение новое значение этого числа.
let number = 23;
number % 2 ? (number === 0 ? number++ : number--) : 'error';
console.log(number);

//-----------------------------------------------------------------------------------------------

//Тема: Не будем забывать о switch!
//1. Напишите if..else, соответствующий следующему switch:
let score = 5;
switch (score) {
  case 1: 
  case 2:
    console.log('very bad');
    break;
  case 3: 
    console.log('bad');
    break;
  case 4:
    console.log('good');
    break;
  default:
    console.log('excellent');
}
//-------------
if (score < 3 && score > 0) {
  console.log('very bad');
} else if (score === 3) {
  console.log('bad');
} else if (score === 4) {
  console.log('good');
} else {
  console.log('excellent');
}
// 2. Задайте переменную dayOfWeek (номер дня недели - число от 1 до 7). 
//   Выведите в консоль название этого дня недели.
let dayOfWeek = 7;
switch (dayOfWeek) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thuesday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  case 7:
    console.log('Sunday');
    break;
    default:
    console.log('what?');
}
// 3. Задайте переменную month (номер месяца  - число от 1 до 12). 
//   Выведите в консоль название времени года
//  (используйте switch с группировкой)
let month = 12; 
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log('Winter');
    break;
  case 3:
  case 4:
  case 5:
    console.log('Spring');
    break;
  case 6:
  case 7:
  case 8:
    console.log('Summer');
    break;
  case 9:
  case 10:
  case 11:
    console.log('Autumn');
    break;
    default:
    console.log('what?');
}

//-----------------------------------------------------------------------------------------------
