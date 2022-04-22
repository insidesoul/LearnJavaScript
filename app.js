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