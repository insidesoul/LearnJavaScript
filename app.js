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