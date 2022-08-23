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



// Статические свойства и методы
// Мы также можем присвоить метод самому классу. Такие методы называются статическими.
// В объявление класса они добавляются с помощью ключевого слова static, например:
// class User { static staticMethod() { alert(this === User); } } User.staticMethod(); // true
// Это фактически то же самое, что присвоить метод напрямую как свойство функции:
// class User { } User.staticMethod = function() { alert(this === User); };
// Значением this при вызове User.staticMethod() является сам конструктор класса User (правило «объект до точки»).
// Обычно статические методы используются для реализации функций, принадлежащих классу целиком, вообще, и при этом не относящимся к каким-то отдельным объектам.
// Звучит не очень понятно? Сейчас все встанет на свои места.
// Например, есть объекты статей Article, и нужна функция для их сравнения.
// Естественное решение – сделать для этого статический метод Article.compare:
// class Article { constructor(title, date) { this.title = title; this.date = date; } static compare(articleA, articleB) { return articleA.date - articleB.date; } } // использование let articles = [ new Article("HTML", new Date(2019, 1, 1)), new Article("CSS", new Date(2019, 0, 1)), new Article("JavaScript", new Date(2019, 11, 1)) ]; articles.sort(Article.compare); alert( articles[0].title ); // CSS
// Здесь метод Article.compare стоит «над» статьями, как средство для их сравнения. Это метод не отдельной статьи, а всего класса.
// Другим примером может быть так называемый «фабричный» метод.
// Скажем, нам нужно несколько способов создания статьи:
// Создание через заданные параметры (title, date и т. д.).
// Создание пустой статьи с сегодняшней датой.
// …или как-то ещё.



