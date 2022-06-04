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

function isOdd(n) {
  console.log(n)
 if (Math.round(n) !== n){
   return false
 }
 return Math.abs(n) % 2 === 0 ? false : true
}

function isDivisible(n, x, y) {
  return n % x === 0 && n % y === 0 ? true : false
}

function isTriangle(a,b,c) {
    console.log(a,b,c)
  return (b + c) > a && (c + a) > b && (a + b) > c
}

const rps = (p1, p2) => {
  return p1 === 'rock' && p2 === 'paper' ? 'Player 2 won!' : p1 === 'paper' && p2 === 'scissors' ? 'Player 2 won!' : p1 === 'scissors' && p2 === 'rock' ? 'Player 2 won!' : p1 === p2 ? 'Draw!' : 'Player 1 won!'
}

function setAlarm(employed, vacation){
 return vacation === false && employed === true
}

function isDivideBy(number, a, b) {
  return (+number % +a) === 0 && (+number % +b) === 0 ? true : false
}

function finalGrade (exam, projects) {
  return exam > 90 || projects > 10 ? 100 : exam > 75 && projects >= 5 ? 90 : exam > 50 && projects >= 2 ? 75 : 0
}

//--------------------------------------------------------------------------------------------------------------------------------

function areYouPlayingBanjo(name) {
  return name[0] === 'r' || name[0] === 'R' ? `${name} plays banjo` : `${name} does not play banjo`
}

function getAges(sum,difference){
  console.log(sum, difference)
  let a = (sum - difference) / 2
  let b = a + difference
  return sum < 0 || difference < 0 || difference > sum ? null : [b, a]
}

//--------------------------------------------------------------------------------------------------------------------------------

function plural(n) {
  return n !== 1 ? true : false
}

function triangular( n ) {
  if (n < 0){
    return 0
  } else {
    return (n*(n+1)/2)
  }
}

function describeAge(a){let b="You're a(n)"
return a<13?`${b} kid`:a>12&&a<18?`${b} teenager`:a>17&&a<65?`${b} adult`:`${b} elderly`}

function howManyDalmatians(number){
  console.log(number)
  let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"]; 
 return number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number === 101 ? dogs[3] : dogs[2]
  }

function bonusTime(salary, bonus) {
 return bonus === true ? `£${salary * 10}` : `£${salary}`
}

function saleHotdogs(n){
  if (n < 5) return n * 100
  else if (n > 4 && n < 10) return n * 95
  else return n* 90
}

//--------------------------------------------------------------------------------------------------------------------------------

function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break
    case 2:
      name = 'Venus'
      break
    case 3:
      name = 'Earth'
      break
    case 4:
      name = 'Mars'
      break
    case 5:
      name = 'Jupiter'
      break
    case 6:
      name = 'Saturn'
      break
    case 7:
      name = 'Uranus'
      break
    case 8:
      name = 'Neptune'
      break
  }
  return name;
}

function calculate(num1, operation, num2) {
  if (operation === '/' && num2 === 0) return null
  switch (operation) {
      case '+': return num1 + num2
      break
      case '/': return num1 / num2
      break
      case '-': return  num1 - num2 
      break
      case '*': return num1 * num2
      break
      default: return null
  }
}

function switchItUp(number){
 switch(number) {
     case 0: return 'Zero'
     break
     case 1: return 'One'
     break
     case 2: return 'Two'
     break
     case 3: return 'Three'
     break
     case 4: return 'Four'
     break
     case 5: return 'Five'
     break
     case 6: return 'Six'
     break
     case 7: return 'Seven'
     break
     case 8: return 'Eight'
     break
     case 9: return 'Nine'
     break
 }
}

function calculator(a,b,sign){
  switch (sign) {
      case '+': return a + b
      break
      case '/': return a / b
      break
      case '-': return  a - b 
      break
      case '*': return a * b
      break
      default: return 'unknown value'
}
}

//--------------------------------------------------------------------------------------------------------------------------------

function isPowerOfTwo(n){
  let i = 2
  while (i < n) {
    i *= 2
  }
  return i === n || n === 1? true : false
}

function differenceOfSquares(n){
  let i = 1;
  let b = 0;
  let c = 0;
  while (i <= n) {
    b = b + i ** 2
    c += i
    i++
  }
  return c = c ** 2 - b
}

function movie(card, ticket, perc) {
  console.log(card, ticket, perc)

  let i = 0
  let a = 0
  let b = card
  do {
    a += ticket
    b += ticket * perc ** i
    i++
  } while (Math.ceil(b) >= a)
  return i - 1
}

function calculateYears(principal, interest, tax, desired) {
  let i = 0;
  let div = principal * interest
  let tx = div * tax
  while (principal < desired) {
      i++
      principal = principal + (div - tx)
    div = principal * interest
    tx = div * tax
    }
  return i
}

const remainder = (D, d) =>  {
  console.log(D,d)
  while (D >= d) {
  D =  D - d
  }
  return D
}

function noBoringZeros(n) {
  while (n % 10 === 0 && n !== 0) {
    n = n / 10
  }
  return n
}

function factorial(n){
 let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function largestPower(n){
  console.log(n)
  if(n === 1) return -1
let i = 0
  while (Math.pow(3,i) < n) {
    i++
  }
  return n === 3 ? 0 : i - 1
}

function squaresNeeded(grains){
  console.log(grains)
  let i = 1
  let b = 1
  while (i < grains) {
    i *= 2
    b++
  }
  return grains < 1 ? 0 : grains === 4 || grains === 2 || grains === 1 ? b : b - 1
}

//--------------------------------------------------------------------------------------------------------------------------------

function getDivisorsCnt(n){
  let del = 0;
    for (let i = 1; i < n + 1 ; i++) {
      if (n % i === 0) {
        del++
      }
    }
  return del
}

function divisors(integer) {
  let arr = []
  for (let i = 2 ; i < integer ; i++) {
    if (integer % i === 0) {
      arr.push(i)
    }
  }
  return arr.length > 0 ? arr : `${integer} is prime`
};

function SeriesSum(n){
  if (n < 1) return '0.00'
  let del = 4;
  let sum = 1;
  for (let i = 1; i < n; i++) {
    sum = sum + 1/del
    del += 3
  }
  return sum.toFixed(2)
}

function isPronic(n){
  for (let i = 0; (i*2) < (n+1); i++){
    if (i * (i+1) === n) return true 
    }
  return false
}

var summation = function (num) {
  let sum = 0;
  for(let i = 1; i <= num; i++) {
    sum += i
  }
  return sum
}

function getSum( a,b ){
  console.log(a,b)
  let sum = 0;
  if (a < b) {
  for (let i = a; i <= b; i++){
    sum = sum + i;
    }
  } else {
      for (let i = a; i >= b; i--){
      sum = sum + i;
      }
    }
  return sum
}

function pickIt(arr){
  var odd=[],even=[];
  for(let i = 0; i < arr.length; i++) {
   if (arr[i] % 2 === 0) even.push(arr[i])
    else odd.push(arr[i])
  }
  return [odd,even];
}

function sumMul(n,m){
  console.log(n,m)
  if (n >= m) return "INVALID"
 let sum = 0;
  for(let i = 0; i < m; i++) {
    if(i % n === 0) {
      sum += i;
    }
  }
  return sum
}

function sumTriangularNumbers(n) { 
  let sum = 0;
  for (let i = 1; i <= n; i++) { 
    sum += (i * (i + 1)) / 2; 
  } 
  return sum;
}

function drawStairs(n) {
  let cnt = 0;
    let result = '';
    while(n > cnt){
      result += ' '.repeat(cnt) + 'I';
      cnt++;
      if(n > cnt) result += '\n';
    }
    return result;
}