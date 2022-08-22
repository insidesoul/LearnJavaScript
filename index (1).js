// Синтаксис «class»
// Базовый синтаксис выглядит так:

// class MyClass {
//   // методы класса
//   constructor() { ... }
//   method1() { ... }
//   method2() { ... }
//   method3() { ... }
//   ...
// }
// Затем используйте вызов new MyClass() для создания нового объекта со всеми перечисленными методами.

// При этом автоматически вызывается метод constructor(), в нём мы можем инициализировать объект.

// Например:

// class User {

//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     alert(this.name);
//   }

// }

// // Использование:
// let user = new User("Иван");
// user.sayHi();
// Когда вызывается new User("Иван"):

// Создаётся новый объект.
// constructor запускается с заданным аргументом и сохраняет его в this.name.
// …Затем можно вызывать на объекте методы, такие как user.sayHi().


// Class Expression
// Как и функции, классы можно определять внутри другого выражения, передавать, возвращать, присваивать и т.д.

// Пример Class Expression (по аналогии с Function Expression):

// let User = class {
//   sayHi() {
//     alert("Привет");
//   }
// };
// Аналогично Named Function Expression, Class Expression может иметь имя.

// Если у Class Expression есть имя, то оно видно только внутри класса:

// // "Named Class Expression"
// // (в спецификации нет такого термина, но происходящее похоже на Named Function Expression)
// let User = class MyClass {
//   sayHi() {
//     alert(MyClass); // имя MyClass видно только внутри класса
//   }
// };

// new User().sayHi(); // работает, выводит определение MyClass

// alert(MyClass); // ошибка, имя MyClass не видно за пределами класса
// Мы даже можем динамически создавать классы «по запросу»:

// function makeClass(phrase) {
//   // объявляем класс и возвращаем его
//   return class {
//     sayHi() {
//       alert(phrase);
//     };
//   };
// }

// // Создаём новый класс
// let User = makeClass("Привет");

// new User().sayHi(); // Привет





