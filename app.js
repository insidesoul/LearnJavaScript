// !! solving problems on codewars !!

function multiply (a, b) {
  return a * b;
}

function doubleInteger(i) {
  return i + i;
}

function converter (mpg) {
  let a  =  (mpg / 4.54609188 * 1.609344).toFixed(2);
  if (a[a.length - 1] === 0) {
    return Number(a.toFixed(1));
  } else {
    return Number(a);
  }
}

function past(h, m, s){
  return ((h * 60 + m) * 60 + s) * 1000;
}

let getName = (number) => {
    switch (number) {
        case 1:
            return 'I love you'; break
        case 2:
            return 'a little'; break
        case 3:
            return 'a lot'; break
        case 4:
            return 'passionately'; break
        case 5:
            return 'madly'; break
        case 6:
            return 'not at all'; break

    }
}

function howMuchILoveYou(nbPetals) {
    let result = ''
    for (let i = 1; i <= nbPetals; i++){
        result = getName((i % 6) === 0 ?  6 :(i % 6))
    }
    return result
}

function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - (col - 1)) * (nRows - row);
}

function angle(n) {
  let result = 180;
  for (let i = 3; i < n; i++){
    result += 180;
  }
  return result
}

function maxMultiple(divisor, bound){
  for(let i = bound; i > 0; i--) {
     if ((i % divisor) === 0) {
       return i;
     }
  }
}

//--------------------------------------------------------------------------

function boolToWord( bool ){
  if (bool === true) {
    return 'Yes'
  } else {
    return 'No'
  }
}

function problem(x){
  if (typeof(x) === 'string') {
    return 'Error'
  } else {
    return x * 50 + 6
  }
}

function cookie(x){
  if (typeof(x) === 'string') {
    return "Who ate the last cookie? It was Zach!"
  } else if (typeof(x) === 'number') {
    return "Who ate the last cookie? It was Monica!"
  } else {
    return "Who ate the last cookie? It was the dog!"
  }
}

function isUndefined(value) {
  if (value === undefined) {
    return true
  } else {
    return false
  }
}

function myFirstKata(a, b) {
  if (typeof(a) !== "number" || typeof(b) !== "number") {
    return false;
  } else {
    return a % b + b % a;
  }
}

function typeOfSum(a, b) {
  if (typeof a !== 'string' && typeof b !== 'string'){
    return 'number'
    } else {
      return 'string'
    }
}

//--------------------------------------------------------------------------

function numberToString(num) {
  return String(num)
}

const stringToNumber = function(str){
  return Number(str);
}

function sumStr(a,b) {
  return String(Number(a) + Number(b))
}

//--------------------------------------------------------------------------

function discoverOriginalPrice(discountedPrice, salePercentage){
  return (Math.round(((discountedPrice / (100 - salePercentage)) * 100) * 100)) / 100
}

function twoDecimalPlaces(number) {
  number = String(number)
  let ab = "";
  for(let i = 0; i < number.length; i++){
     ab += number[i]
    if (number[i] === ".") {
      i++
       ab += number[i]
      i++
       ab += number[i]
      return (+ab)
    }
    }
}

function squareRoot(x) {
  x = x ** 0.5
  x = String(x)
  let ab = "";
  for(let i = 0; i < x.length; i++){
     ab += x[i]
    if (x[i] === ".") {
      i++
       ab += x[i]
      i++
       ab += x[i]
       i++
       ab += x[i]
       i++
       ab += x[i]
       i++
       ab += x[i]
      i++
       ab += x[i]
      return Math.round((+ab) * 100000)/100000
    } else if (i === x.length - 1){
       return (+ab) }
}
}

//--------------------------------------------------------------------------------------------------------------------------------

// Конспект
// Часто при решении задач нам необходимо использовать математические функции: модуль, корень квадратный, синус, косинус, возведение в степень, округление числа и др. Объект Math является встроенным объектом, хранящим в своих свойствах и методах различные математические константы и функции.

// Одно из популярных свойств Math.PI – представляет отношение длины окружности круга к его диаметру, приблизительно равное 3,14159 (всем известное число Пи).

// Наиболее часто применяются следующие методы объекта Math:

Math.abs(x) возвращает абсолютное значение числа x;
Math.cos(x) возвращает косинус числа x (x – значение в радианах);
Math.sin(x) возвращает синус числа x (x – значение в радианах);
Math.atan() возвращает арктангенс числа (в радианах);
Math.sqrt(x) возвращает квадратный корень числа x. Если число отрицательное, то вернется NaN;
Math.pow(x, y) возвращает x в степени y;
Math.floor(x) округление вниз. Округляет аргумент x до ближайшего меньшего целого;
Math.ceil(x) округление вверх. Округляет аргумент x до ближайшего большего целого;
Math.round(x) возвращает число, округлённое к ближайшему целому;
Math.trunc(x) возвращает целую часть числа путём удаления всех дробных знаков;
Math.max(x, y, ..., ) возвращает наибольшее из нуля или более чисел;
Math.min(x,y, ..., ) возвращает наименьшее из нуля или более чисел;
Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1), то есть, от 0 (включительно) до 1 (но не включая 1).
Примеры:

console.log(Math.abs(-9.3)); // 9.3
console.log(Math.cos(0)); // 1
console.log(Math.sin(0)); // 0
console.log(Math.sqrt(9)); // 3
console.log(Math.pow(2, 3)); // 8
console.log(Math.floor(3.56)); // 3
console.log(Math.ceil(3.14)); // 4
console.log(Math.round(3.5)); // 4 
console.log(Math.trunc(3.9)); // 3
console.log(Math.max(3, 5, 2)); // 5
console.log(Math.min(3, 5, 2)); // 2
console.log(Math.random()); // 0.9991760164762054 (случайное число от 0 до 1)
// Пример функции, которая вычисляет площадь круга радиусом r:

function circle(r){
  return Math.floor(Math.PI * Math.pow(r, 2)); 
}
// Метод Number.toFixed() форматирует число, используя запись с фиксированной запятой.

// Синтаксис:

// numObj.toFixed([digits])
// Возвращаемое значение: строка, представляющая число numObj и содержащая ровно digits цифр после десятичной запятой.

// Пример:

let x = 5.534;
console.log(x.toFixed(0)); // "6"
console.log(x.toFixed(1)); // "5.5"

//--------------------------------------------------------------------------------------------------------------------------------

function litres(time) {
  return Math.floor(time * 0.5);
}

const closestMultiple10 = num => {
 return (Math.round(num / 10)) * 10
}

function oddCount(n){
 return Math.floor(n / 2)
}

function century(year) {
  return Math.ceil(year / 100)
}

function womensAge(n) {
  if (n % 2 === 0) {
    let b = n / 2
    return `${n}? That's just 20, in base ${b}!`
  } else {
    let c = (n - 1) / 2
    return `${n}? That's just 21, in base ${c}!`
  }
}

function hoopCount (n) {
   if (n >= 10) {
     return 'Great, now move on to tricks'
   } else {
     return "Keep at it until you get it"
   }
}

function ifChuckSaysSo(){
  return 0 > 2 
}

function trueOrFalse(val){
 return !!val === true ? 'true' : 'false';
}

function add(a, b){
 return a == b
}

function hero(bullets, dragons){
 return bullets >= (dragons * 2)
}

//--------------------------------------------------------------------------------------------------------------------------------

function even_or_odd(number) {
  return number % 2 ? 'Odd' : 'Even'
}

function isLucky(n) {
  n = String(n);
  let a = 0;
  for (let i = 0; i < n.length; i++) {
    a = a + n[i]
  }
  return a === 0 || a % 9 === 0 ? true : false
}

function weatherInfo (a) {
  let celsius = (a - 32) * (5/9)
  let c = celsius
  if (c < 0)
    c = "is freezing temperature"
  else
    c = "is above freezing temperature"
   return `${celsius} ${c}`
}

function getGrade (s1, s2, s3) {
  let sm = (s1 + s2 + s3) / 3
  if (sm >= 90 && sm <= 100) {
    return 'A'
  } else if (sm >= 80 && sm <= 90) {
    return 'B'
  } else if (sm >= 70 && sm <= 80) {
    return 'C'
  } else if (sm >= 60 && sm <= 70) {
    return 'D'
  } else {
    return 'F'
  }
}

function calculate(a, o, b) {
 let result = null;
 if(o === "+") { 
   return a + b;
 }
   else if(o === "-") {
     return a - b;
   }
else if(o === "/" && b!==0) { 
   return a / b;
  }
 if(o === "*") {
   return a * b;
 } else {
 return result; 
 }
}

function chromosomeCheck(sperm) {
  return sperm === 'XX' ? "Congratulations! You're going to have a daughter." : "Congratulations! You're going to have a son."
}

function checkAlive (health) {
  if (health <= 0) {
    return false
  } else {
    return true
  }
}

function rainAmount(mm){
    if (mm < 40) {
         return `You need to give your plant ${40 - mm}mm of water`
    }
    else {
         return "Your plant has had more than enough water for today!"
    }
}

function getRealFloor(n) {
  if (n < 13 && n > 0) {
    return n - 1
  } else if (n >= 13) {
    return n - 2
  } else {
    return n
  }
}

function  calculateAge(a1, a2) {
  let b = a1 - a2;
  return b === 1 ? 'You will be born in 1 year.' : b === -1 ? 'You are 1 year old.' : a1 > a2 ? `You will be born in ${a1 - a2} years.` : a1 < a2 ? `You are ${a2 - a1} years old.` : 'You were born this very year!';
}

function bmi(weight, height) {
  let b = weight / Math.pow(height, 2)
  return b <= 18.5 ? 'Underweight' : b <= 25.0 ? 'Normal' : b <= 30.0 ? 'Overweight' : 'Obese'
}

function fuelPrice(litres, pricePerLitre) {
  let a = litres
  let b = 0;
  console.log(pricePerLitre, litres)
  a < 2 ? b = a * pricePerLitre : a < 4 ? b = a * (pricePerLitre - 0.05) : a < 6 ? b = a * (pricePerLitre - 0.10) : a < 8 ? b = a * (pricePerLitre - 0.15) : a < 10 ? b = a * (pricePerLitre - 0.20) : b = a * (pricePerLitre - 0.25)
  return Math.round(b * 100) / 100
}

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  if (dolphin === true) {
    sharkSpeed /= 2
  }
  sharkDistance /= sharkSpeed
  pontoonDistance /= youSpeed
  console.log(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin)
  return sharkDistance > pontoonDistance ? "Alive!" : "Shark Bait!"
}

function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9
}

function enough(cap, on, wait) {
  return (on + wait) > cap ? (on + wait) - cap : 0 
}

function humanYearsCatYearsDogYears (humanYears) {
  let a = 0
  let b = 0
  if (humanYears > 2) {
    a = 15 + 9 + ((humanYears - 2) * 4)
    b = 15 + 9 + ((humanYears - 2) * 5)
  } else if (humanYears > 1) {
    a = 15 + 9
    b = 15 + 9
  } else {
    a = 15
    b = 15
  }
  return [humanYears,a,b];
}

const areaOrPerimeter = function(l , w) {
  return l === w ? l * w : 2 * ( l + w )
}

//--------------------------------------------------------------------------------------------------------------------------------

