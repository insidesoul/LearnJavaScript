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

// Тема: Особый объект - массив
// 1. Задайте переменную arr, запишите в нее массив с элементами 3, -6, 0, -7, 4, 12
const arr = [3, -6, 0, -7, 4, 12];
// 2. Выведите массив arr в консоль в одну строку
console.log(arr);
// 3. Выведите элементы массива arr в консоль по одному (т.е. в столбец)
for (let i = 0; i < arr.length; i++){
   console.log(arr[i]); //выводим по одному элементы массива
}
// 4. Выведите в консоль третий элемент массива arr (значение которого ноль)
console.log(arr[2]);
// 5. Выведите в консоль длину массива arr
console.log(arr.length);
// 6. Вычислите и выведите в консоль сумму первого и последнего элементов массива arr
console.log(arr[0] + arr[5]);
// 7. Добавьте в конец массива элемент 'end'. Выведите массив в консоль.
arr.push('end');
console.log(arr);
// 8. Добавьте в начало массива элемент 'start'. Выведите массив в консоль.
arr.unshift('start');
console.log(arr);
// 9. Удалите первый и последний элемент массива. Выведите массив в консоль.
arr.pop();
arr.shift();
console.log(arr);
//10. Пройдитесь циклом по этому массиву и увеличьте каждый элемент массива на 1. 
//    Выведите получившийся массив в консоль.
for (let i = 0; i < arr.length; i++){
   console.log(arr[i] + 1); //выводим по одному элементы массива
}

//-----------------------------------------------------------------------------------------------

//Массивы имеют особое свойство - length (длина). Обычно говорят, что длина массива - это количество элементов в массиве. Вычисление длины происходит при обращении к этому свойству через точку:

const arr = ['a', 'b', 'c', 'd', 'e'];
console.log( arr.length ); // length = 5
//Самым распространенным способом задания массива является объявление его через квадратные скобки:
const arr = [];
//Существует еще один синтаксис для создания массива:
const arr = new Array(1, 2, 3);
//Этот способ редко используется, т.к. квадратные скобки короче.

//Объявление массива как функцию:
//создание пустого массива
const array1 = Array();
//создание массива и инициализация
const array2 = Array(1,2);
//создание массива с заданной длинной
const array3 = Array(3);
//С помощью метода Array.of():
const arr = Array.of(1, 2, 3);

//-----------------------------------------------------------------------------------------------

//Массив хранит в себе пронумерованные значения, и элементы массива нумеруются, начиная с нуля. Чтобы получить нужный элемент ("обратиться к нему"), указывается его номер в квадратных скобках:

const arr = ['a', 'b', 'c'];
console.log(arr[1]); // "b"
//Ранее мы говорили, что длина массива - это количество элементов в массиве. Так как элементы нумеруются с нуля, то длина массива равна индексу последнего элемента плюс единица.

//Вывод массива с "дырами"
//Если в массиве есть пропущенные индексы, то при выводе в большинстве браузеров появляются "лишние" запятые, например:

const arr = [];
arr[0] = 0;
arr[3] = 3;
console.log(arr); // [0, undefined, undefined, 3]
//Эти запятые появляются потому, что алгоритм вывода массива идёт от 0 до arr.length и выводит всё через запятую. Отсутствие значений даёт undefined.

//Приведенный выше пример будет эквивалентен следующему способу задания массива:

const arr = [0, , , 3];
console.log(arr); // [0, undefined, undefined, 3]

//-----------------------------------------------------------------------------------------------

// Тема: Как создать массив
//1. Создайте пустой массив. Выведите в консоль массив и его длину.
const abc = []
console.log(abc.length);
//2. С помощью цикла создайте массив, заполненный десятью нулями.
//   Выведите в консоль массив и его длину.
for (let i = 0; i <= 9; i++) {
  abc[i] = 0;
}
console.log(abc);
//3. С помощью цикла создайте массив, заполненный 
//   числами: 1,2,3,4,5,6,7,8,9,10. Выведите полученный массив в консоль.
const avb = [];
for (let z = 0; z <= 9; z++) {
  avb[z] = z + 1;
}
console.log(avb);
//4. С помощью цикла создайте массив, заполненный числами: 
//   2,4,6,8,10,12,14,16,18,20. Выведите полученный массив в консоль.
const acc = [];
let total = 2;
for (let s = 0; s <= 9; s++) {
  acc[s] = total;
  total += 2;
}
console.log(acc);
//5. С помощью цикла создайте массив, заполненный числами: 
//   1,3,5,7,9,11,13,15,17,19. Выведите полученный массив в консоль.
 const aaa = [];
  let tott = 1;
for (let q = 0; q <= 9; q++) {
  aaa[q] = tott;
  tott += 2;
}
console.log(aaa);
//6. С помощью цикла создайте массив, заполненный числами: 
//   1,-2,3,-4,5,-6,7,-8,9,-10. Выведите полученный массив в консоль.
const mvs = [];
for(let i = 1; i <= 10; i++){
    if (i % 2 === 1){
        mvs.push(i)
    }
    
    else {
        mvs.push(-i)
    }
}
console.log(mvs)
//7*. С помощью цикла создайте массив, заполненный случайными
//    целыми числами. Выведите полученный массив в консоль.
//   (Используйте метод Math.random(), умножение и округление)
const mvcc = [];
for(let we = 0; we <= 10; we++){
    let a = Math.round( Math.random() * 100 );
    mvcc.push(a);
}
console.log(mvcc)
//8. Создайте массив, заполненный десятью числами Фибоначчи. 
//   В последовательности Фибоначчи первые два числа равны 1, 
//   а начиная с третьего, каждый элемент равен сумме двух предыдущих.  
let abcd = [1, 1];
for (let ff = 2; ff < 11; ff++) {
  abcd.push(abcd[abcd.length - 1] + abcd[abcd.length - 2]);
}
console.log(abcd);

//-----------------------------------------------------------------------------------------------

// Тема: Обращение к элементам массива
//1. Создайте массив numbers со значениями:
//   2, 13, 7, 6, 41, -7, 12, -4, 89, 5. Выведите массив в консоль.
//  Далее задания 2-8 будут относиться к этому массиву!!!
const number = [2, 13, 7, 6, 41, -7, 12, -4, 89, 5]
console.log(number);
//2. С помощью цикла выведите в консоль все отрицательные элементы массива
for (let i = 0; i < number.length; i++) {
   if (number[i] < 0) {
     console.log(number[i]);
   }
}
//3. С помощью цикла выведите в консоль все четные элементы массива
for (let i = 0; i < number.length; i++) {
   if (number[i] % 2 === 0) {
     console.log(number[i]);
   }
}
//4. Подсчитайте количество элементов, значения которых больше 10
let a = 0;
for (let i = 0; i < number.length; i++) {
   if (number[i] > 10) {
     
     a = a + 1;     
   }
}
console.log(a);
//5. Задайте переменную sum. Найдите сумму элементов массива.
let sum = 0;
for (let i = 0; i < number.length; i++) {
  sum += number[i]; 
}
console.log(sum);
//6. Найдите среднее арифметическое элементов массива.
let arfm = 0;
arfm = sum / number.length;
console.log(arfm);
//7. Задайте переменную product. Найдите произведение 
//   положительных элементов массива.
let product = 1;
for (let i = 0; i < number.length; i++) {
  if (number[i] > 0) {
    product *= number[i];
  }
}
console.log(product);
//8. Измените массив, чтобы отрицательные элементы стали положительными.
for (let i = 0; i < number.length; i++) {
  if (number[i] < 0) {
    number[i] *= -1;
  }
  
}
console.log(number);
//9. Массив содержит значения роста в см. 1 inch = 2.54 cm
//   Выведите в консоль массив, который содержит значения роста в inch
let height = [158, 160, 165, 168, 170, 175, 178, 180];
for (let i = 0; i < height.length; i++) {
  height[i] *= 2.54
}
console.log(height);

//-----------------------------------------------------------------------------------------------

// Тема: Добавление и удаление элементов массива
//1. Создайте пустой массив arr. Выведите массив в консоль.
const arr = [];
console.log(arr);
//2. Используя метод push, заполните в цикле массив числами от 20 до 30.
//   Выведите полученный массив в консоль.
//  (должно получиться [20,21,22,23,24,25,26,27,28,29,30])
for (let i = 20; i < 31; i++) {
  arr.push(i);
}
console.log(arr);
//3. Используя метод unshift, добавьте с цикле в начало массива 1,2,3,4,5.
//   Выведите полученный массив в консоль. 
//  (должно получиться [1,2,3,4,5,20,21,22,23,24,25,26,27,28,29,30])
for (let i = 5; i > 0; i--) {
  arr.unshift(i);
}
console.log(arr);
//4. Используя метод pop, удалите в цикле последние 5 элементов массива.
//   Выведите полученный массив в консоль.
//  (должно получиться [1,2,3,4,5,20,21,22,23,24,25])
for (let i = 0; i < 5; i++) {
  arr.pop();
}
console.log(arr);
//5. Используя метод shift, удалите в цикле первые 3 элемента массива.
//   Выведите полученный массив в консоль.
//  (должно получиться [4,5,20,21,22,23,24,25])
for (let i = 0; i < 3; i++) {
  arr.shift();
}
console.log(arr);

//-----------------------------------------------------------------------------------------------

// Тема: Цикл while
//1. Дан цикл for. Запишите те же действия с помощью цикла while
for (let i = 0; i < 15; i+=2){
  console.log(i);
}
let i = 0;
while (i < 15) {
  console.log(i);
  i+=2;
}
//2. Используя цикл while, выведите 10 раз в консоль ваше имя.
i = 0;
while (i < 10) {
  console.log('Vladimir');
  i++;
}
//3. Используя цикл while, выведите в консоль числа от -7 до 7.
i = -7;
while (i < 8) {
  console.log(i);
  i++;
}
//4. Создайте пустую строку. Используяцикл, запишите в нее 27 букв Z.
//   Выведите в консоль полученную строку и ее длину.
let b = '';
i = 0;
while (i < 27) {
  b+='z'
  i++
}
console.log(b);

//-----------------------------------------------------------------------------------------------

//5. Выведите в консоль фрагмент таблицы умножения на 2:
//   Используйте при выводе backticks``
//   1 х 2 = 2
//   2 х 2 = 4  ...
//   10 х 2 = 20
i = 1;
// let jj = 2;
while (i <= 10) {
  console.log(`${i} * 2 = ${i * 2}`);
  i++;
}

//-----------------------------------------------------------------------------------------------

//Тема: Цикл For
//1. Выведите в консоль с помощью цикла for числа от 1 до 10 с шагом 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//2. Выведите в консоль с помощью цикла for числа от 20 до 40 с шагом 2
for (let i = 20; i <= 40; i+=2) {
  console.log(i);
}
//3. Выведите в консоль обратный "таймер", который выводит в столбец
//   время до старта: 10, 9, 8,.., 1, 'start!'
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log('start!');
//4. Выведите в консоль числа от 1 до 10, их квадраты  кубы в виде:
//1  1  1
//2  4  8
//3  9  27 ...
for (let i = 1; i <= 10; i++) {
  console.log(i*i + ' ' + i*i*i);
}
//5. Задайте переменную price = 3.5 (стоимость 1 кг яблок).
// Выведите на экран стоимость 1, 2, 3, …, 10 кг яблок (используйте ``)
// `the cost of ... kg of apples is equal to ...`
let price = 3.5;
for (let i = 1; i <= 10; i++) {
  console.log(`the cost of ${i} kg of apples is equal to ${i * price}`);
}
//6. Задан массив arr, хранящий значение температуры в градусах Цельсия.
// arr = [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
// Задайте пустой массив temp. Пройдитесь циклом по массиву arr 
// и заполните массив temp значениями этой температуры в градусах Фаренгейта.
const arr = [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
const temp = [];
for (let i = 0; i < arr.length; i++) {
  temp[i] = (arr[i] * 9/5) + 32
}
console.log(temp);
// 7. Используя template string (${}), напишите цикл,
// выводящий в консоль таблицу умножения для чисел от 0 до 10.
for (let i = 0; i <= 10; i++) {
  for (let a = 0; a <= 10; a++) {
    console.log(`${i} * ${a} = ${i * i}`);
  }
  console.log('-------------');
}

//-----------------------------------------------------------------------------------------------

//Тема: Разновидности циклов
//1. Выведите в консоль числа от 1,3,5,7,9,11,13,15 
// с помощью цикла for:
for (let i = 1; i <= 15; i++) {
  console.log(i);
}
// с помощью цикла while:  
let i = 1;
while (i<=15) {
  console.log(i);
  i++;
}
// с помощью цикла do...while:
let dd = 1;
do {
  console.log(dd);
   dd++;
} while (dd <= 15);
//2.Дана строка word = 'alternation';
//  Выведите в консоль символы строки word через один (используйте цикл).
//  (должно получиться 'atrain') 
let word = 'alternation';
for (let i = 0; i < word.length; i+=2) {
  console.log(word[i]);
}
//3. Дана строка back = 'Madam I am Adam';
//  Выведите в консоль каждый символ строки back 
//  поочередно, с конца (используйте цикл).
let back = 'Madam I am Adam';
for (let i = back.length - 1; i >= 0; i--) {
  console.log(back[i]);
}
//4.Дана строка str = 'student';
//  Задайте пустую строку result =''; 
//  Пройдите циклом по строке str и путем операции + (слияние)
//  запишите в строку result символы строки str, разделяя их пробелами.
//  (должно получиться 's t u d e n t ')
let result ='';
let str = 'student';
for (let i = 0; i < str.length; i++) {
  result = result + str[i] + ' ';
}
console.log(result);
//5*.Дана строка row = 'pull up if i pull up';
// Задайте пустую строку rowBack, в которую запишите все символы
// строки row, начиная с конца, кроме пробелов.
// Выведите в консоль true, если строка row равна строке rowBack,
// и false, если строка row не равна строке rowBack
let row = 'pull up if i pull up';
let rowBack = '';
for (let i = row.length - 1; i >= 0; i--) {
  if (row[i] === ' ') {
    
  } else {
    rowBack = rowBack + row[i];
  }
}
console.log(rowBack === row);

//-----------------------------------------------------------------------------------------------

//Тема: Комбинирование циклов и условных операторов
//1. Выведите в консоль числа, кратные 3, в диапазоне от 1 до 40.
for (let i = 1; i <= 40; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
//2. Задайте пустой массив arr. Используя метод push, заполните 
//   в цикле массив четными числами от 30 до 10 с порядке убывания.
const arr = [];
for (let i = 30; i >= 10; i--) {
  if (i % 2 === 0) {
    arr.push(i);
  }
}
console.log(arr);
//3. Задана строка str = 'Now I am studying programming on JS'.
// Найти количество пробелов в строке.
let str = 'Now I am studing programming on JS'
let sum = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === ' ') {
    sum++;
  }
}
console.log(sum);
//4. Найти общее количество гласных букв (a,o,e,u,i) в строке str.
let um = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] === 'a' || str[i] === 'o' || str[i] === 'e' || str[i] === 'u' || str[i] === 'i') {
    um++;
  }
}
console.log(um);
//5. Дан массив arr = [3, 7, 4, 9, 2, 10, 1, 17, 6, 23, 5, 13];
// Найти разность между максимальным и минимальным элементом массива.
const arra = [3, 7, 4, 9, 2, 10, 1, 17, 6, 23, 5, 13];
let min = arra[0];
let max = arra[0];
let raz = 0;
  for(let i = 0; i < arra.length; i++) {
    if (arra[i] > max) {
      max = arra[i];
    }
    if (arra[i] < min) {
      min = arra[i];
    }
  }
console.log(raz = max - min);

// let result = Math.max(...arra) - Math.min(...arra)
// console.log(result);

//-----------------------------------------------------------------------------------------------

//Тема: “Кирпичики” программы
//1. Напишите функцию sum, которая принимает как аргументы два числа 
//   и возвращает сумму этих чисел.
//   Выведите в консоль результат  работы функции для чисел 23 и 18.  
function sum (a, b) {
  return a + b;
}
console.log(sum(23, 18));
//2. Напишите функцию с именем mult, которая принимает как аргументы два числа 
//   и вычисляет произведение этих чисел.
//   Выведите в консоль результат работы функции для чисел 25 и 4.
function mult (a, b) {
  return a * b;
}
console.log(mult(25, 4));
//3. Напишите функцию multiply, которая принимает три числа 
//   и возвращает их произведение. 
//   Выведите в консоль результат работы функции для чисел: 2, 4, 7.
function multiply (a, b, c) {
    return a * b * c;
}
console.log(multiply(2, 4, 7));
//4. Напишите функцию absValue, которая принимает значение числа и 
//   возвращает абсолютное значение (модуль) этого числа. 
//   Выведите в консоль результат работы функции для чисел: -10, 0, 10.
function absValue (a) {
  return Math.abs(a);
}
console.log(absValue(10));

//-----------------------------------------------------------------------------------------------

//Тема: Способы задания функций
//1. Напишите функцию, которая принимает число как аргумент и возвращает 
//  противоположное по значению число. (1  => -1; -5 => 5; 0 => 0).
function opposite(a) {
  return -a;
}
console.log(opposite(-5));
//2. Напишите функцию, которая принимает целое число как аргумент и возвращает 
//  "Even" для четных чисел  или  "Odd" для нечетных чисел.
function evenOdd (a) {
  if (a % 2 === 0) return 'Even';
  return 'Odd'
}
console.log(evenOdd(5));
//3. Напишите функцию, которая принимает строку и возвращает первый символ строки. 
function firstSymbol (str = 0) {
  return str[0];
}
console.log(firstSymbol('blabla'));
//4. Напишите функцию, которая принимает число и возвращает 
//  его отрицательным. Если число уже отрицательное, то возвращается само число. 
//  Если число равно 0, возвращается 0.
function negative (a) {
  if (a > 0) return -a;
  return a
}
console.log(negative(145));
//5. Напишите функцию, которая принимает число, трансформирует это число  
//   в строку и возвращает эту строку.
function string (a) {
     return a + '';
}
console.log(string(5));

//-----------------------------------------------------------------------------------------------

//Тема: Функциональные выражения, стрелочные функции и многое другое
//1. Дан массив arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   Напишите функцию sum, которая принимает массив как аргумент и возвращает
//   сумму элементов массива.
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum1 = 0;
function sum (arr1) {
   for (let i = 0; i < arr1.length; i++) {
    sum1 += arr1[i];
  }
  return sum1
}
console.log(sum(arr1));
//2. Дан массив arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   Напишите функцию reverse, которая принимает массив как аргумент и возвращает
//   массив, в котором элементы расположены в обратном порядке.
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr2Rev = [];
function reverse (arr2) {
  for (let i = arr2.length - 1; i >= 0; i--) {
    arr2Rev.push(arr2[i]);
  }
  return arr2Rev;
}
console.log(reverse(arr2));
console.log(arr2.reverse());
//3. Дан массив arr3 = [1, 2, -3, 4, -5, 6, 7, -8, 9, 10];
//   Напишите функцию indexOfFirstNegative, которая принимает массив и возвращает
//   индекс первого отрицательного элемента массива (в данном массиве это 2).

// const arr3 = [1, 2, -3, 4, -5, 6, 7, -8, 9, 10];
// let negativSymbol = 0;
// function indexOfFirstNegative (arr3) {
//   for (let i = arr3.length - 1; i >= 0; i--) {
//     if (arr3[i] < 0) {
//       negativSymbol = i;
//     }  
//   }
//   return negativSymbol;
// }
// console.log(indexOfFirstNegative(arr3));

const arr3 = [1, 2, -3, 4, -5, 6, 7, -8, 9, 10];
let negativSymbol = 0;
function indexOfFirstNegative (arr3) {
  for (let i = 0; i < arr3.length; i++) {
    if (arr3[i] < 0) {
      negativSymbol = i;
      break;
    }  
  }
  return negativSymbol;
}
console.log(indexOfFirstNegative(arr3));

//4. Напишите функцию с именем newArray, которая принимает два числа x, y (x<y)
//   и возвращает массив, в котором записаны целые числа от x до y.
//   Например, если x = 5, y = 10, вернуть массив [5,6,7,8,9,10];
const newArr = [];
function newArray (x, y) {
  for (let i = x; i <= y; i++) {
    newArr.push(i);
  }
  return newArr;
}
console.log(newArray(10, 15));
//5. Дан массив строк: 
//   arr4 = ['apple', 'orange', 'grape', 'banana', 'mango', 'peach'];
//   Напишите функцию countWords, которая принимает массив как аргумент 
//   и возвращает количество слов, длина которых равна 5.
const arr4 = ['apple', 'orange', 'grape', 'banana', 'mango', 'peach'];
let count = 0;
function countWords (arr4) {
  for (let i = 0; i < arr4.length; i++) {
    if (arr4[i].length === 5) {
      count++
    }
  }
  return count
}
console.log(countWords(arr4));

//-----------------------------------------------------------------------------------------------



//-----------------------------------------------------------------------------------------------
