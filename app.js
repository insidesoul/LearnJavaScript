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

// Math.abs(x) возвращает абсолютное значение числа x;
// Math.cos(x) возвращает косинус числа x (x – значение в радианах);
// Math.sin(x) возвращает синус числа x (x – значение в радианах);
// Math.atan() возвращает арктангенс числа (в радианах);
// Math.sqrt(x) возвращает квадратный корень числа x. Если число отрицательное, то вернется NaN;
// Math.pow(x, y) возвращает x в степени y;
// Math.floor(x) округление вниз. Округляет аргумент x до ближайшего меньшего целого;
// Math.ceil(x) округление вверх. Округляет аргумент x до ближайшего большего целого;
// Math.round(x) возвращает число, округлённое к ближайшему целому;
// Math.trunc(x) возвращает целую часть числа путём удаления всех дробных знаков;
// Math.max(x, y, ..., ) возвращает наибольшее из нуля или более чисел;
// Math.min(x,y, ..., ) возвращает наименьшее из нуля или более чисел;
// Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1), то есть, от 0 (включительно) до 1 (но не включая 1).
// Примеры:

// console.log(Math.abs(-9.3)); // 9.3
// console.log(Math.cos(0)); // 1
// console.log(Math.sin(0)); // 0
// console.log(Math.sqrt(9)); // 3
// console.log(Math.pow(2, 3)); // 8
// console.log(Math.floor(3.56)); // 3
// console.log(Math.ceil(3.14)); // 4
// console.log(Math.round(3.5)); // 4 
// console.log(Math.trunc(3.9)); // 3
// console.log(Math.max(3, 5, 2)); // 5
// console.log(Math.min(3, 5, 2)); // 2
// console.log(Math.random()); // 0.9991760164762054 (случайное число от 0 до 1)
// // Пример функции, которая вычисляет площадь круга радиусом r:

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

//-----------------------------------------------------------------

function roundToNext5(n){
 let i = 1
  do {
   if(n%5 === 0) return n
  n += i
  }
  while(n % 5 !== 0)
    return n
}

function padIt(str,n){
  let strF = ''
  if(n%2 === 1) {
      strF += '*'
      n--
  }
  n /= 2
  let i = 1;
  while (i <= n) {
    strF += '*'
    i++
  }
  let b = 1
  strF += str
  while (b <= n) {
    strF += '*'
    b++
  }
  return strF
}

function numberToPower(number, power){
  console.log(number, power)
  if (power < 1) return 1
  if (power === 1) return number
  let i = 1;
  let pow = number
  do {
    pow *= number
    i++
  } while (i < power)
return pow
}

function halvingSum(n) {
     var s_sum = 0;
    while (n > 0) {
        s_sum += n;
        n = Math.floor(n / 2);
    }
    return s_sum;  
}

//-----------------------------------------------------------------

function grabDoll(dolls){
  var bag=[];
  for(let i = 0 ; i < dolls.length; i++){
    if (bag.length === 3) {
      break
    }
    if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll'){
      bag.push(dolls[i])
    } else {
      continue
    }
  }
  
  return bag;
}

//------------------------------------------------------------

function solve(n) {
  if (n % 10 !== 0) return -1
  let amount = 0
  for(let i = 1; n >= 10; i++) {
    if (n >= 500) {
      amount++
      n -= 500
    } else if (n >= 200) {
       amount++
      n -= 200
    } else if (n >= 100) {
      amount++
      n -= 100
    } else if (n >= 50) {
      amount++
      n -= 50
    } else if (n >= 20) {
      amount++
      n -= 20
    } else if (n >= 10) {
      amount++
      n -= 10
    }
  }
  return amount
}

 function animals(heads, legs){
 let cow = (legs - heads * 2) / 2;
  let chicken = heads - (legs - heads * 2) / 2;
  if (chicken < 0 || cow < 0 || Math.round(chicken) != chicken || Math.round(cow) != cow){
    return "No solutions";
  } else if(heads == 0 || legs == 0){
    return [0, 0];
  }else{
    return [chicken, cow];
  }
}

//------------------------------------------------------------

var FilterString = function(value) {
  let result = '';
  let bool = '';
  for(let i = 0; i < value.length; i++){
    bool = value[i]
    if(isNaN(bool) === false) {
      result += bool
    }
  } 
  return +result
}

const isReallyNaN = (val) => {
  console.log(val)
    if (Number.isNaN(val) === true) return true
    else return false
};

//------------------------------------------------------------

function findStrangeValue() {
  return NaN
}

//------------------------------------------------------------

// Конспект
// В JavaScript есть такие особенные числовые значения как Infinity и -Infinity, тип которых также определяется как number. Значение Infinity больше любого другого числа.

// При делении любого числа на Infinity или -Infinity итогом всегда будет 0, а при совершении других математических операций с положительной или отрицательной бесконечностью мы получим Infinity или -Infinity (знак числа будет сохранён).

let num = 20;
console.log(num + Infinity); // Infinity
console.log(-Infinity - num); // -Infinity, сохраняется знак минуса
console.log(num / Infinity); // 0
console.log(num * Infinity); // Infinity
console.log(num * (-Infinity)); // -Infinity, сохраняется знак минуса
// Для проверки, что число x является конечным, можно использовать функцию isFinite(x) или метод Number.isFinite(x).

// Функция isFinite() преобразует, если необходимо, переданное значение в число, а затем определяет является ли оно конечным. Возвращает false для NaN, -Infinity, Infinity.

// Метод Number.isFinite(x) возвращает true только для конечных чисел.

console.log(isFinite('')); // true
console.log(Number.isFinite('')); // false
console.log(isFinite('20')); // true
console.log(Number.isFinite('20')); // false
console.log(isFinite(20)); // true
console.log(Number.isFinite(20)); // true
console.log(isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false

//------------------------------------------------------------

function SafeInteger(n) {
  return Number.isSafeInteger(n)
}

//------------------------------------------------------------

function makeNegative(num) {
  return num < 0 ? num : -num
}

function opposite(number) {
    return -number 
}

function invert(array) {
  const arr = []
   for(let i = 0; i < array.length; i++){
      arr.push(-array[i])
   }
  return arr
}

//------------------------------------------------------------

function multiply(number){
  console.log(number)
  let str = number + ""
  str = str.length
  console.log(str)
  return number <  0 ? number * (Math.pow(5,str - 1)) : number * (Math.pow(5,str))
}

function sixToast(num) {
  return Math.abs(6 - num)
}

function elevator(left, right, call){
  return Math.abs(left - call) < Math.abs(right - call) ? 'left' : 'right' 
}

//------------------------------------------------------------

function squareDigits(num){
  let result = ''
  num += '' 
  for (let i = 0; i < num.length; i++) {
    result = result + Math.pow(num[i],2)
  }
  return +result
}

function squares(x, n) {
const arr = []
for (let i = 1; i <= n; i++) {
  arr.push(x)
  x *= x
}
  return arr
}

function index(array, n){
  return n+1 > array.length ? -1 : Math.pow(array[n],n)
}

// const index = (array, n) => return n+1 > array.length ? -1 : Math.pow(array[n],n)

function squareOrSquareRoot(array) {
  return array.map(num => { 
    if(Number.isInteger(Math.sqrt(num))) return Math.sqrt(num)
    return Math.pow(num,2)
  } )  
}

//------------------------------------------------------------

var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n))
}

function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 === 0 ? Math.pow(Math.sqrt(sq) + 1, 2) : -1
}

//------------------------------------------------------------

function logs(x , a, b){
  console.log(x,a,b)
 return (Math.log(a) + Math.log(b)) / Math.log(x)
}

//------------------------------------------------------------

function cockroachSpeed(s) {
  return Math.floor(s*1000*100/60/60)
}

function mango(quantity, price){
  return (quantity - Math.floor(quantity / 3)) * price
}

function dutyFree(normPrice, discount, hol){
 return Math.floor(hol/(normPrice / 100 * discount))
}

function toTime(seconds) {
  let minutes = seconds/60
  let hours = minutes%60
   return `${Math.floor(minutes/60)} hour(s) and ${Math.floor(hours)} minute(s)`
}

//------------------------------------------------------------

// Конспект
// Метод Math.round(x) округляет число x до ближайшего целого.

// Есть разница в округлении положительных и отрицательных чисел с использованием данного метода:

// Если дробная часть положительного числа меньше, чем 0.5, округление будет произведено к ближайшему меньшему целому числу, а если больше или равна 0.5, то – к ближайшему большему целому.
Math.round(10.49); // 10
Math.round(10.5); // 11
Math.round(10.51); // 11
// Если дробная часть отрицательного числа меньше или равна 0.5, число будет округлено к ближайшему большему целому, а если больше 0.5, то – к ближайшему меньшему целому.
Math.round(-10.49); // -10
Math.round(-10.5); // -10
Math.round(-10.51); // -11
// Подробнее читайте здесь:

// (Но! В данном источнике ничего не сказано о работе Math.round() с отрицательными числами.)

//------------------------------------------------------------

// Конспект
// Метод Math.trunc(value) принимает в качестве аргумента значение, которое при необходимости будет преобразовано в число, и возвращает целую часть числа. Округление при этом не производится.

console.log(Math.trunc(7.999)); // 7
console.log(Math.trunc('15.2978')); // 15
console.log(Math.trunc('0.156')); // 0
console.log(Math.trunc('15.56$')); // NaN, если значение не может быть преобразовано в число
console.log(Math.trunc('5' / 2)); // 2
// Знак аргумента сохраняется:

console.log(Math.trunc('-7.999')); // -7

//------------------------------------------------------------------------------

// Конспект
// Общее понятие наследования в JavaScript
// JavaScript является языком прототипного наследования. Все объекты в нем имеют свойство [[Prototype]], которое либо равно null, либо ссылается на другой объект (прототип). Это означает, что каждый объект имеет свой объект-прототип (шаблон, образец) и наследует от него свойства и методы. У каждого объекта может быть только один [[Prototype]].

// Не сам объект, а его свойство prototype функции-конструктора содержит свойства и методы, которые могут быть унаследованы. Свойство [[Prototype]] скрыто от нас. И если необходимо получить/задать значение [[Prototype]], мы используем __proto__.

const animal = {
  eats: true
};
const cat = {
  jumps: true
};

cat.__proto__ = animal; // устанавливаем animal как прототип для cat

console.log(cat.jumps); // true
console.log(cat.eats); // true
// У нас есть два объекта animal и cat. Мы хотим, чтобы объект cat также имел свойство “eats”, и для того, чтобы не повторять свойство, мы “наследуем” его у другого объекта. Этим действием мы делаем animal прототипом для cat (или cat прототипно наследует от animal). Когда мы пытаемся прочитать свойство "cat.eats", а его нет в объекте cat, то JavaScript следует по ссылке [[Prototype]] и находит его в animal.

// Таким образом, JavaScript попытается найти свойство объекта или вызвать метод, которого не существует у конкретного объекта, в его прототипе.

// Встроенные прототипы
// Нам важно знать, что в JavaScript есть встроенные прототипы.

// Создадим пустой объект и выведем его значение в консоль.

const object = {};
console.log(object); // [object Object] { ... }
// Выводимое в консоль значение представлено в строковом виде. Но мы не использовали для преобразования никаких методов. Получается, что метод, на самом деле, есть, но скрыт от нас. Из пояснений к примеру "cat-animal", мы понимаем, что метод находится в прототипе объекта object и его значение мы можем получить через object.__proto__. Преобразование значения object в строковый вид было сделано методом toString(), который находится в прототипе. Для того, чтобы увидеть, что метод действительно есть в прототипе Object.prototype, найдите в браузере удобную для вас песочницу (например, JSBin), откройте консоль разработчика, введите код, указанный выше. В консоли разработчика в __proto__ вы увидите, какие свойства и методы содержит object (toString() в том числе).

// Осталось понять, откуда взялся __proto__ в новом объекте object.

// Запись object = {} – это краткая форма от object = new Object(), где Object – встроенная функция-конструктор для объектов. При выполнении new Object() для создаваемого объекта будет установлен __proto__ по prototype функции-конструктора, который в данном случае равен встроенному Object.prototype:

console.log(object.__proto__ === Object.prototype); // true
// В дальнейшем при обращении к object.toString() функция будет взята из Object.prototype:

console.log(object.__proto__.toString == Object.prototype.toString); // true
// Важно! По цепочке прототипов выше Object.prototype больше нет свойства [[Prototype]]. Объект Object.prototype находится над всеми другими встроенными прототипами, и он единственный, чье __proto__ равно null:

console.log(Object.prototype.__proto__); // null
// Поэтому можно сказать, что "все объекты наследуют от Object", а если точнее, то от Object.prototype.

// В JavaScript кроме Object есть другие встроенные объекты, такие как Array, Date, Function, Number, String и другие, которые также хранят свои методы в прототипах.

// Давайте разберем на примере Array ,как наследуют свойства от Object.prototype встроенные объекты.

const array = ['a', 'b', 'c'];
console.log(array.__proto__ === Array.prototype); // true, 
// array наследует методы массивов от Array.prototype
console.log(array.__proto__.__proto__ === Object.prototype); // true, 
// array наследует другие методы (не массивов) от Object.prototype
// При создании массива ['a', 'b', 'c'] внутренне используется конструктор массива Array (array = new Array()). Поэтому массивы имеют свой прототип Array.prototype и унаследуют от него только методы массивов. Если в Array.prototype и Object.prototype есть одинаковые методы (например, метод toString()), то для массивов будет использован тот, который по цепочке наследования ближе к array, т.е. от Array.prototype.

// Воспользуйтесь еще раз консолью разработчика в браузере и выведите в консоль значение array из кода выше и убедитесь в цепочке наследования прототипов (array -> Array.prototype -> Object.prototype) и в наличии у Array.prototype своего метода toString().

// Делаем выводы: сами объекты содержат только данные, а методы хранятся в их прототипах. Если есть методы с одинаковым названием, то будет унаследован тот, который ближе по цепочке наследования.

// Наследование для примитивных типов данных
// Выше описано, как происходит наследование у не примитивных типов данных. А как быть с примитивными типами данных, которые не являются объектами?

// undefined и null находятся в стороне от других объектов в JavaScript: они не имеют методов и, соответственно, прототипов.

// А вот number, boolean и string имеют временный объект-обертку, который проявляет себя в момент предоставления доступа к методам, а потом исчезает (встроенные конструкторы: Number, Boolean и String). Методы этих объектов находятся в прототипах Number.prototype, Boolean.prototype и String.prototype, соответственно (например, Number.prototype.toString(), String.prototype.split() и др.).

//-----------------------------------------------------------------------------------

function cookingTime(eggs) {
  return Math.ceil(eggs/8)*5
}

function howManyTimes(annualPrice, individualPrice) {
  return Math.ceil(annualPrice/individualPrice)
}

//-----------------------------------------------------------------------------------

Math.roundTo = function (number, precision) {
  return +number.toFixed(precision)
}

function danspower(num, power) {
 return Math.pow(num, power) % 2 === 0 ? Math.pow(num, power) : Math.round(Math.pow(num, power)/10)*10
}

//-----------------------------------------------------------------------------------

function race(v1, v2, g) {

  var willCatch = v2 - v1;
  var catchTime = g / willCatch;  

  var totalSeconds = catchTime * 60 * 60;  

  var seconds = totalSeconds % 60;
var totalMinutes = totalSeconds / 60;
var minutes = totalMinutes % 60;
var hours = totalMinutes / 60;

  if (v1 >= v2) { return null; }
  return     [Math.floor(hours),Math.floor(minutes),Math.floor(seconds)];
}

function coinCombo (cents) {
  let pennies = 0;
  let nickels = 0;
  let dimes = 0;
  let quarters = 0;
  if (cents /  25 >= 1) {quarters = Math.trunc(cents/25)
                        cents = cents - quarters * 25}
  if (cents /  10 >= 1) {dimes = Math.trunc(cents/10)
                        cents = cents - dimes * 10}
  if (cents /  5 >= 1) {nickels = Math.trunc(cents/5)
                       cents = cents - nickels * 5}
  if (cents /  1 >= 1) {pennies = Math.trunc(cents/1)
                       cents = cents - pennies * 1}
  return [pennies, nickels, dimes, quarters]
}

//--------------------------------------------------------------------

function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)]
}

function sumOfMinimums(arr) {

  const sumOfMinNumbers = [];
  
  arr.forEach((minNum) => sumOfMinNumbers.push(Math.min(...minNum)));
  return sumOfMinNumbers.reduce((x, y) => x + y);

}

function minimum(a, x) {
  console.log(a, x)
  if (a % x === 0) return 0
  for (let i = 1; i < a+x; i++){
    if ((a+i) % x === 0 || (a-i) % x === 0) {
      return i
    }
  }
}

//---------------------------------------------------------

function consecutive(arr) {
   return arr.length === 0 ? 0 : (Math.max(...arr) - Math.min(...arr) + 1 - arr.length)
}

function pipeFix(numbers){
let result = []
for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++) {
  result.push(i)
}
  return result
}

function betweenExtremes(numbers) {
    return Math.max(...numbers) - Math.min(...numbers)
}

function getMinMax(arr){
  return [Math.min(...arr), Math.max(...arr)]
};

function expressionMatter(a, b, c) {
  console.log(a, b, c)
  let v1 = a * (b + c)
  let v2 = a * b * c
  let v3 = a + b * c
  let v4 = (a + b) * c
  let v5 = a + b + c
  return Math.max(v1, v2 , v3, v4, v5)
}

//---------------------------------------------------------

function  yourFutureCareer(){
  var career = Math.random()
    if (career <= 0.32) {
      return "FrontEnd Developer"
    } else if (career <= 0.65) {
      return "BackEnd Developer"
    } else {
      return 'Full-Stack Developer'
    }
  }

//-------------------------------------------------------

function addBinary(a,b) {
 return (a+b).toString(2)
}

function evensAndOdds(num){
  return num % 2 === 0? num.toString(2) : num.toString(16)
}

function toBinary(n){
  return +n.toString(2);
}

//---------------------------------------------------------

function barTriang(p1, p2, p3){
  let x = (p1[0] + p2[0] + p3[0]) / 3
  let y = (p1[1] + p2[1] + p3[1]) / 3
  return [+((x).toFixed(4)), +((y).toFixed(4))]
}

function excludingVatPrice(price){
  console.log(price)
  if (price === 0) return 0 
  if (price < 1) return -1
  return +((price)-(price/115*15)).toFixed(2)
}

//------------------------------------------------------------

console.clear()

{
  let a = 5;
  let b = {
    area: function(){console.log("Площадь")}
  }
  console.log(a.toString())
  b.area()
  let c = {}
  console.log(c)
  console.log(b)
  let cc = []
  console.log(cc)
}

//----------------------------------------------------------

function getAge(inputString){
 return parseInt(inputString, 10)
}

function hexToDec(hexString){
  return parseInt(hexString, 16)
}

function binToDec(bin){
  return parseInt(bin, 2)
}

//------------------------------------------------------------

function parseF(s) {
  return isNaN(parseFloat(s)) ? null : parseFloat(s);
}

//----------------------------------------------------------

function sum (numbers) {
  let sumArr = 0;
  for(let i = 0; i < numbers.length; i++) {
    sumArr += numbers[i]
  }
  return sumArr
};

function monkeyCount(n) {
 let num = []
 for(let i = 1; i <= n; i++){
   num.push(i)
 }
  return num
}

const arr = N => {
let result = []
for(let i = 0; i <= N-1; i++){
  result.push(i)
}
  return result
}

function getLength(arr){
  return arr.length
}
function getFirst(arr){
  return arr[0]
}
function getLast(arr){
  return arr[arr.length-1]
}
function pushElement(arr){
  let el=1;
  arr.push(el)
  return arr
}
function popElement(arr){
  arr.pop()
  return arr
}

function generateIntegers(m, n) {
  let arr = []
  for(let i = m; i <= n; i++){
    arr.push(i)
  }
  return arr
}

//---------------------------------------------------

function type(value) {
 return ({}.toString.call(value)).split(' ')[1].toLowerCase().slice(0, -1)
}

const arrCheck = value => {
  for(let i = 0; i < value.length; i++){
   if (Array.isArray(value[i]) === false) return false
  }
  return true
}

//----------------------------------------------------

function countSheeps(arrayOfSheep) {
  let sum = 0;
  for(let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) sum++
  }
  return sum
}

function crap(x, bags, cap){
  let amount = bags * cap
  let arr = [];
  for(let i = 0; i < x.length; i++){
    arr = x[i]
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === 'D') return 'Dog!!'
      if(arr[i] === '@') amount--
    }
  }
  return amount < 0 ? 'Cr@p' : 'Clean'
}

function findDifference(a, b) {
  let a1 = 1;
  let b1 = 1;
  for(let i = 0; i < a.length; i++){
    a1 *= a[i]
    b1 *= b[i]
  }
  return Math.abs(a1 - b1)
}

function firstNonConsecutive (arr) {
  let result = arr[0]
  for(let i = 1; i < arr.length; i++){
     if (arr[i] - result !== 1) return arr[i]
    result = arr[i]
  }
  return null
}

function pairs(ar){
  let count = 0;
 for(let i = 1; i < ar.length; i++){
   if(i % 2 === 1){
     if((Math.abs(ar[i] - ar[i-1])) === 1) count++
   }
 }
  return count
};

function solve(a, b) {
  console.log(a,b)
 let a1 = 0
 let b1 = 0
 if(a[0] > b[0]) a1++
  else if(a[0] < b[0])b1++
   if(a[1] > b[1]) a1++
  else if(a[1] < b[1])b1++
   if(a[2] > b[2]) a1++
  else if(a[2] < b[2])b1++
  return a1 > b1 ? `${a1}, ${b1}: Alice made "Kurt" proud!` : a1 === b1 ? `${a1}, ${b1}: that looks like a "draw"! Rock on!` : `${a1}, ${b1}: Bob made "Jeff" proud!` 
}

function points(games) {
  let x = games[0];
  let result = 0;
  for(let i = 0; i < games.length; i++){
    x = games[i]
    if (x[0] > x[2]) result += 3
    if (x[0] === x[2]) result ++
  }
  return result
}

const catchSignChange = arr => {
  console.log(arr)
  let result = 0;
  for(let i = 0; i < arr.length; i++){
    if((arr[i] >= 0 && arr[i+1] < 0) || (arr[i] < 0 && arr[i+1] >= 0)) result++
  }
  return result
}

//-------------------------------------------------------------

function squareSum(numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i] ** 2
  }
  return sum
}

function betterThanAverage(classPoints, yourPoints) {
  let average = 0
  for(let i = 0; i < classPoints.length; i++){
    average += classPoints[i]
  }
  return (average / classPoints.length) < yourPoints ? true : false
}

var number = function(busStops){
  let still = 0;
  let stops = 0;
  for(let i = 0; i < busStops.length; i++){
    stops = busStops[i]
      still = still + (stops[0] - stops[1])
  }
  return still
}

function positiveSum(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0) sum += arr[i]
  }
  return sum
}

function countPositivesSumNegatives(input) {
  console.log(input)
  if (input === null  || input.length < 1) return []
    let sum = 0;
    let total = 0;
  for(let i = 0; i < input.length; i++){
    if(input[i] > 0) total++
    else sum += input[i]
  }
  return [total, sum]
}

function find_average(array) {
  console.log(array)
  if (array.length < 1) return 0
  let average = 0;
  for(let i = 0; i < array.length; i++){
    average += array[i]
  }
  return average / array.length
}

function divCon(x){
  console.log(x)
  let number = 0;
  let string = 0;
  for(let i = 0; i < x.length; i++){
    if(typeof(x[i]) === 'string') string += +(x[i])
    else number += x[i]
  }
  return number - string
}

function cubeOdd(arr) {
  console.log(arr)
  let total = 0;
  for(let i = 0; i < arr.length; i++){
    if(typeof(arr[i]) !== 'number') return undefined
    
    if(Math.abs(arr[i]) % 2 === 1) {
      arr[i] = Math.pow(arr[i], 3)
      total += arr[i]
    }
  }
  console.log(total)
  return total
}

function sumEvenNumbers(input) {
  let sum = 0;
  for(let i = 0; i < input.length; i++){
    if(input[i] % 2 === 0) sum += input[i]
  }
  return sum
}

function inviteMoreWomen(L) {
  let w = 0
  let m = 0
  for(let i = 0; i < L.length; i++){
    if(L[i] > 0) m++
    else w++
  }
  return m > w ? true : false
}

function oddOrEven(array) {
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i]
  }
  return sum % 2 === 0 ? 'even' : 'odd'
}

function rowWeights(array){
  let firstT = 0;
  let secondT = 0;
  for (let i = 0; i < array.length; i++){
    if(i % 2 === 0) firstT += array[i]
    else secondT += array[i]
  }
  return [firstT, secondT]
}

function getDay(day, isLeap){
  let arrD = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  let arrM = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  if(isLeap === true) arrD[1] = 29
  for(let i = 0; i < arrD.length; i++){
    if(day > arrD[i]) day -= arrD[i]
    else return `${arrM[i]}, ${day}`
  }
}

//-----------------------------------------------

function gimme (triplet) {
  for(let i = 0; i < 3; i++){
    if(triplet[i] !== Math.min(...triplet) && triplet[i] !== Math.max(...triplet)) return i
  }
} 

function sumArray(array) {
  let sum = 0;
  if(Array.isArray(array) === false || array.length < 3) return 0
  for(let i = 0; i < array.length; i++){
    sum += array[i]
  }
  return sum - Math.min(...array) - Math.max(...array)
}

var min = function(list){
    
    return Math.min(...list);
}

var max = function(list){
    
    return Math.max(...list);
}

function maxDiff(list) {
  console.log(list)
  if(list.length < 2) return 0
  return Math.abs(Math.min(...list)) + (Math.max(...list))
};

//----------------------------------------------------

websites.push('codewars')

items = []
items.push({a: "b", c: "d"})

function sumOfN(n) {
  let arr = [0]
  for(let i = 0; i <= Math.abs(n); i++){
    if(n < 0) arr.push(arr[i] - i)
     else arr.push(arr[i] + i)
  }
   arr.shift()
  return arr
};

function countBy(x, n) {
  let z = [];
  for(let i = x; i <= x*n; i += x){
    z.push(i)
  }
  return z;
}

function generateRange(min, max, step){
  let arr = []
  for(let i = min; i <= max; i += step){
    arr.push(i)
  }
  return arr
}

function preFizz(n) {
  let arr = []
  for(let i = 1; i <= n; i++){
    arr.push(i)
  }
  return arr
}

function powersOfTwo(n){
  let arr = []
  for(let i = 0; i <= n; i++){
    arr.push(2 ** i)
  }
  return arr
}

function multiples(s1,s2,s3){
  let arr = []
  for(let i = s1; i < s3; i += s1){
    if(i % s2 === 0) arr.push(i)
  }
  return arr
}

function generateIntegers(n) {
  let arr = []
  for(let i = 0; i <= n; i++){
    arr.push(i)
  }
  return arr
}

function findMultiples(integer, limit) {
  let arr = []
  for(let i = integer; i <= limit; i += integer){
    arr.push(i)
  }
  return arr
}

function range(startNum, endNum)   
{  
 let arr = []
  for(let i = startNum + 1; i < endNum; i++){
   arr.push(i) 
  }
  return arr
 }; 

 function solve(a,b){
  let arr = []
  for(let i = 0; i < b.length; i++){
    let amount = 0;
    for(let c = 0; c < a.length; c++){
      if(b[i] === a[c]) amount++
    }
    arr.push(amount)
  }
  return arr
}

//------------------------------------------

function cleanString(s) {
  let arr = []
  for(let i = 0; i < s.length; i++){
    if(s[i] !== '#') arr.push(s[i])
    else arr.pop()
  }
  return arr.join('')
}

//-------------------------------------------

reverse = function(array) {
  let arr = []
  for(let i = 0; i < array.length; i++){
    arr.unshift(array[i])
  }
  return arr
}

const reverseSeq = n => {
  let arr = []
  for(let i = n; i > 0; i--){
    arr.push(i)
  }
  return arr
};

//----------------------------------------

function include(arr, item){
  return arr.includes(item, 0)
}

function check(a,x){
  return a.includes(x)
};  

//----------------------------------------

function min(arr, toReturn) {
  if(toReturn === 'value') return Math.min(...arr)
  else return arr.indexOf(Math.min(...arr), 0)
}

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf('needle')}`
}

function find(a,b) {let i =a.indexOf(b)
  return i===-1?'Not found':i}

  function meeting(x){
 return x.indexOf('O') < 0 ? 'None available!' : x.indexOf('O')
}

function warnTheSheep(queue) {
 return queue.length - 1 - (queue.indexOf('wolf')) > 0 ? `Oi! Sheep number ${queue.length - 1 - (queue.indexOf('wolf'))}! You are about to be eaten by a wolf!` : "Pls go away and stop eating my sheep"
}

function consecutive(arr, a, b) {
  console.log(arr, a, b)
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === b && arr[i+1] === a) return true
    else if (arr[i] === a && arr[i+1] === b) return true
  }
  return false
}

//--------------------------------------------------------

function swapTwo(array, a, b) {
  console.log(array, a, b)
  let a1 = array.indexOf(a)
  let b1 = array.lastIndexOf(b)
  array[a1] = b
  array[b1] = a
  return [...array]
}

//----------------------------------------------------

function getEvenNumbers(numbersArray){
  const arr = numbersArray.filter(el => el % 2 === 0)
  return arr
}

function filter_list(l) {
  const arr = l.filter(el => typeof(el) === 'number')
  return arr
}

function one(arr, fun){
  return arr.filter(fun).length == 1;
}

function friend(friends){
  return friends.filter(el => el.length === 4)
}

function divisibleBy(numbers, divisor){
  return numbers.filter(el => el % divisor === 0)
}

function removeEveryOther(arr){
  return arr.filter((el, i) => i % 2 === 0)
}

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(el => !geese.includes(el))
};

function arrayDiff(a, b) {
  return a.filter(el => !b.includes(el))
}

var filterLucky=x=>{
  return x.filter(el=>el.toString().includes(7));
}

function mergeArrays(a, b) {
  const ab = []
  l = Math.min(a.length, b.length);
  for (let i = 0; i < l; i++) {
    ab.push(a[i], b[i]);
}
ab.push(...a.slice(l), ...b.slice(l));
  return ab
  
}

function filterEvenLengthWords(words) {
  return words.filter((el => el.length % 2 === 0))
}

//------------------------------------------------

function solve(arr) {
  for (var i = 0; i < arr.length; i++)
    if (!arr.includes(-1 * arr[i])) return arr[i]
}

//--------------------------------------------------

function findDup( arr ){

   const ar = arr.filter((el, i) => i !== arr.indexOf(el) && i === arr.lastIndexOf(el))
    return ar[0]
   }

const duplicates = arr => arr.filter((v, i) => arr.indexOf(v) !== i && arr.lastIndexOf(v) === i);

//-----------------------------------------------------

function uniqueNumbers(rra) {
  console.log(rra)
    return rra.filter((el, i) => (rra.indexOf(el) === rra.lastIndexOf(el) || i === rra.indexOf(el) && i !== rra.lastIndexOf(el)))
}

function completeSeries(arr) {
  let a = []
  for(let i = 0; i <= Math.max(...arr); i++){
    if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])) return [0]
    a.push(i)
  }
  return a
}

function unique(arr) {
  console.log(arr)
  return arr.filter((el, i) => arr.indexOf(el) === arr.lastIndexOf(el) || i === arr.indexOf(el) && i !== arr.lastIndexOf(el))
}

function noRepeat(str) {  
  console.log(str)
  const arr = str.split('').filter((el, i) => str.indexOf(el) === str.lastIndexOf(el))
  return arr[0]
}

//---------------------------------------

function digitize(n) {
  let str = n + ''
  str = str.split('')
  let result = str.map(el => +el)
  return result.reverse()
}

function fixTheMeerkat(arr) {
 return arr.reverse()
}

//------------------------------------------

function reverse(arr) {
 for (let i = 0; i < arr.length / 2; i++) {
  let temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
}
  return arr
}

//-------------------------------------------

function addExtra( listOfNumbers ){
  return listOfNumbers.concat('a')
}

//-------------------------------------------

function twoOldestAges(ages){
 ages = ages.sort((a, b) => b-a)
  return [ages[1], ages[0]]
}

function solution(nums){
  if(nums === [] || nums === null) return []
  return nums.sort((a, b) => a-b)
}

sortme = function( names ){
 return names.sort() 
}

function largestPairSum (numbers) {
  numbers = numbers.sort((a, b) => b-a)
  return (numbers[0] + numbers[1])
}

function sumTwoSmallestNumbers(numbers) {  
  numbers = numbers.sort((a, b) => a - b)
  return numbers[0]+numbers[1]
}

function longest(s1, s2) {
  console.log(s1, s2)
  let arr1 = s1.split('')
  let arr2 = s2.split('')
  let arr = arr1.concat(arr2)
  console.log
  return arr.filter((el, i) => i === arr.indexOf(el) && i !== arr.lastIndexOf(el) || arr.indexOf(el) === arr.lastIndexOf(el)).sort().join('')
}

function bigToSmall(arr){
  return [].concat(...arr).sort((a,b) => b-a).join('>')
}

function sortByLength (array) {
  return array.sort((a, b) => a.length-b.length)
};

function solve(arr){
  console.log(arr)
    arr.sort((a, b) => b-a)
    let array = []
    let b = arr.length-1
    let arleng = arr.length/2
    for(let i = 0; i < arleng; i++){
      array.push(arr[i])
      array.push(arr[b])
      b--
    }
     arr.length%2 === 1 ? array.pop() : array
  return array
};

function findChildren(santasList, children) {
  let ans = [];
  for (let i=0; i<santasList.length; ++i)
    for (let j=0; j<children.length; ++j)
      if (ans.indexOf(children[j])==-1 && santasList[i]==children[j])
        ans.push(children[j]);
  return ans.sort();
}

function minSum(arr) {
  arr.sort((a, b) => a-b)
  let sum = 0;
  let b = arr.length-1
  for(let i = 0; i < arr.length/2; i++){
    sum = sum + (arr[i] * arr[b])
    b--
  }
  return sum
}

function minimumSteps(numbers, value){
  console.log(numbers, value)
  numbers.sort((a, b) => a-b)
  let sum = 0;
  let num = 0
  for(let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i]
    num++
    if(sum >= value) return num -1
  }
  return num
}

function sumOfDifferences(arr) {
  arr.sort((a, b) => b-a)
  let sum = 0
  console.log(arr)
  for(let i = 0; i < arr.length-1; i++){
    sum = sum + (arr[i] - arr[i+1])
  }
  return sum
}

//---------------------------------------------

function smash (words) {
   return words.join(' ')
};

function buildString(...template){
  return `I like ${template.join(', ')}!`;
}

function arithmeticSequenceElements(a,r,n) {
  let arr = []
  for(let i = 0; i < n; i++){
    arr.push(a)
    a += r
  }
  return arr.join(', ')
}

function printArray(array){
  return array.join()
}

const binaryArrayToNumber = arr => {
  let str = arr.join('')
  console.log(str)
  return parseInt(str, 2)
};

function toCsvText(array) {
   return array.join('\n')
}

//-----------------------------------------------------

function all( arr, fun ){
  return arr.every(fun)
}

function validateWord(s){
  console.log(s)
  s = s.toLowerCase().split('')
  if(s.every((el, i) => s.indexOf(el) === s.lastIndexOf(el))) return true
  else if(s.every((el, i) => s.indexOf(el) !== s.lastIndexOf(el))) return true
  else return false
}

function inAscOrder(arr) {
for(var i = 0; i < arr.length-1; i++){
   if(arr[i] > arr[i+1]){
     return false;
   } 
  }
 return true;
}

function solve(arr){
  console.log(arr)
  const result = []
  let fls = 0;
  for(let i = 0; i < arr.length; i++){
    fls = 0
    for(let j = i; j < arr.length; j++){
      if(arr[i] <= arr[j+1]){
        fls = 0
        break
      }
      else fls++
    }
    if(fls > 0) result.push(arr[i])
  }
  return result
};

//-------------First-5-kyu-kata------------------------

function incrementString (strng) {
  strng = strng.split('')
  let prob = strng.filter(el => +el > -1).map(el => +el).join('')
  let arr = (+prob + 1) + ''
  let al = (+arr - 1 + '').length
  if(prob <= 0) al = 0
  if(prob.length > al) {
    if(arr.length > al) al += 1 
  }
  for(let b = 0; b < al; b++){
        strng.pop()
    }  
  for(let i = 0; i < arr.length; i++){    
      strng.push(arr[i])
    }
  return strng.join('')
}

//-------------------------------------------------------

function any(arr, fun){
  return arr.some(fun)
}

//-------------------------------------------------------

var findAverage = function (nums) {
  return nums.reduce((acc, curr) => acc + curr, 0)/nums.length
}

function avg(a){
  return a.reduce((acc, curr) => acc + curr, 0)/a.length
}

function mean(lst){
  let num = lst.filter(el => !isNaN(Number(el))).map(el => +el).reduce((acc, curr) => acc + curr, 0)/10
  console.log(num)
  let str = lst.filter(el => isNaN(Number(el))).reduce((acc, curr) => acc + curr)
  console.log(str)
  return [num, str]
}

function sumSquares(array) {
  return array.map(el => el ** 2).reduce((acc, curr) => acc + curr, 0)
}

function arrayMadness(a, b) {
  a = a.map(el => el ** 2).reduce((acc, curr) => acc + curr, 0)
  b = b.map(el => el ** 3).reduce((acc, curr) => acc + curr, 0)
  return b<a
}

function grow(x){
  return x.reduce((acc, curr) => acc * curr,1)
}

function multi(arr) {
  return arr.reduce((acc, curr) => acc * curr, 1)
}
function add(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0)
}
function reverse(str) {
  return str.split('').reverse('').join('')
}

function findDeletedNumber(arr, mixArr) {
  arr = arr.reduce((acc, curr) => acc + curr, 0)
  mixArr = mixArr.reduce((acc, curr) => acc + curr, 0)
  return arr - mixArr
}

function arrayPlusArray(arr1, arr2) {
  arr1 = arr1.reduce((acc, curr) => acc + curr, 0)
  arr2 = arr2.reduce((acc, curr) => acc + curr, 0)
  return arr1 + arr2
}

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  let arr = [age1,age2,age3,age4,age5,age6,age7,age8]
  arr = Math.sqrt(arr.map(el => el * el).reduce((acc, curr) => acc + curr, 0)) / 2
  return Math.floor(arr)
}

//---------------------------------------------------------------------

function toFreud(string) {
  if (string === '') return ''
return string.split(' ').map(el => 'sex').join(' ')
}

function toNumberArray(stringarray){
  return stringarray.map(el => +el)
}

function maps(x){
  return x.map(el => el * 2)
}

function skiponacci(n) {
  
  let x = 0;
  let y = 1;
  let z;
  let result = [1, ];
  
  for (let i = 1; i < n; i += 1) {
    z = x + y
    x = y;
    y = z;
    result.push(z);
  }
  
  return result.map((elm, idx, _) => idx % 2 !== 0 ? 'skip' : elm).join(' ');
}

//----------------------------------------------------

function take(arr, n) {
  return arr.splice(0, n)
}

//----------------------------------------------------

function head(a) {
  let head = a[0]
  return head
}
function tail(a) {
  let tail = a.slice(1)
  return tail
}
function init(a) {
  let init = a.slice(0, -1)
  return init
}
function last(a) {
  let last = a[a.length-1]
  return last
}

function array(arr){
  arr = arr.split(',')
  if(arr.length < 3) return null
  return arr.slice(1,-1).join(' ')
}

function cutIt(arr){
  let leng = arr[0].length
  for(let i = 0; i<arr.length; i++){
    if(arr[i].length < leng) leng = arr[i].length
  }
  let newArr = []
  for(let i = 0; i < arr.length; i++){
    newArr.push(arr[i].slice(0,leng))
  }
  return newArr
}

function withoutLast(arr) {
  let arr1 = arr.slice(0,-1)
  return arr1;
}

var arrayLeaders = numbers => {
  let answer = [];

  for (let i=0; i<numbers.length; i++){
    let sum = 0;
    for (let j=i+1; j<numbers.length; j++){ 
      sum += numbers[j];                      
    }
    
    if(numbers[i] > sum){
      answer.push(numbers[i]);
    }
  }
  return answer;
}

//-------------------------------------------------

function greet(name){
  if(name === "Johnny")
    return "Hello, my love!";
  else
    return "Hello, " + name + "!";
}

var TempleStrings = function(obj, feature) {
  return `${obj} are ${feature}`
}

function combineNames(names, second){
  return names + ' ' + second
}

var a = "dev"
var b = "Lab"

var name = a + b
console.log(name)

function sayHello(name) {
  return `Hello, ${name}`
}

var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  return d1+a2+d2;
}
function Bee(){
  return b1+e2+e2;
}
function banana(){
  return b2+a2+n2+a2+n2+a2;
}
function answer1(){
  return "no";
}
function answer2(){
  return "no";
}
function answer3(){
  return "yes";
}

function uefaEuro2016(teams, scores){
  return `At match ${teams[0]} - ${teams[1]}, ${scores[0] > scores[1] ? `${teams[0]} won!`: scores[0] < scores[1] ? `${teams[1]} won!` : 'teams played draw.'}`
}

function joinStrings(string1, string2){
   return `${string1} ${string2}`
}

function derive(coefficient,exponent) {
  return `${coefficient * exponent}x^${exponent - 1}`
}

var countSheep = function (num){
  let result = ''
  for(let i = 1; i <= num; i++){
    result = result + i + ' sheep...' 
  }
  return result
}

//-----------------------------------------------------------

function solution(a, b){
  let ab = ''
  let ba = ''
  if(a.length > b.length){
    ab = a
    ba = b
  } else {
    ab = b
    ba = a
  }
  return ba +ab + ba
}

function getChar(c){
  return String.fromCodePoint(c)
}

function correctTail(body, tail){
  let sub = body[body.length-1]
  if (sub === tail)
    return true
  else 
    return false
}  

function catMouse(x){
 return x.length > 5 ? 'Escaped!' : 'Caught!' 
}

function digits(n) {
  console.log(n)
  n = '' + n
  return n.length
}

function unusualFive() {
  let a = 'gfgfg'
  return a.length
}

//---------------------------------------------

var uniqueInOrder=function(iterable){
  let arr = []
  for(let i = 0; i < iterable.length; i++){
    if(iterable[i] === iterable[i+1]) continue
    else arr.push(iterable[i])
  }
  return arr
}

function countZeros(n) {
  let zero = 0
  let str = ''
  for(let i = 1; i <= n; i++){
    str = '' + i
    for(let b = 0; b <= str.length; b++){
      if(str[b] === '0') zero++
    }
  }
  return zero
}

function getSumOfDigits(integer) {
  let sum = 0;
  let digits =  String(Math.floor(integer));
  for(let i = 0; i < digits.length; i++) {
    sum += +digits[i]
  }
  console.log(integer, sum, digits)
  return sum;
}

function lowercaseCount(str){
  let result = 0;
  let arr = ['q','w',"e",'r','t','y',"u",'i','o','p','a','s','d','f','g','h','j',"k","l",'z','x','c','v','b',"n","m"]
  for(let i = 0; i < arr.length; i++){
    for(let b = 0; b < str.length; b++){
      if(arr[i] === str[b]) result++
    }
  }
  return result
}

function doubleChar(str) {
  let str2 = ''
  for(let i = 0; i < str.length; i++){
    str2 += str[i] + str[i]
  }
  return str2
}

function removeChar(str){
 return str.slice(1, -1) 
};

function tripleTrouble(one, two, three){
  let str = ''
  for(let i = 0; i < one.length; i++){
    str += one[i] + two[i] + three[i]
  }
  return str
 }

 function noSpace(x){
  let str = ''
  for(let i = 0; i < x.length; i++){
    if(x[i] !== ' ') str += x[i]
  }
  return str
}

function spacify(str) {
  let result = ''
  for(let i = 0; i < str.length; i++){
    result += str[i] + ' '
  }
  return result.slice(0, -1)
}

//----------------------------------------------------

function isPalindrome(x) {
 let palind = ''
 for(let i = x.length-1; i >= 0; i--){
   palind += x[i]
 }
  console.log(x)
  return palind.toLowerCase() === x.toLowerCase()
}

//------------------------------------------------------

function pattern(n){
 let output="1";
  for(let i = 2; i <= n; i++){
    output += '\n1'
    for(let b = 1; b < i; b++){
      output += '*'
    }
    output += i
  }
 return output;
}

//----------------------------------------------------

function XO(str) {
  str = str.toLowerCase()
  let x = 0;
  let o = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] === 'x') x++
    if(str[i] === 'o') o++
  }
  return x === o
}

function getDrinkByProfession(param) {
  param = param.toLowerCase();
  
  switch(param) {
    case "jabroni": return "Patron Tequila";
    case "school counselor": return "Anything with Alcohol";
    case "programmer": return "Hipster Craft Beer";
    case "bike gang member": return "Moonshine";
    case "politician": return "Your tax dollars";
    case "rapper": return "Cristal";
    default: return "Beer";
  }
}

function hello(name) {
  console.log(name)
  if(name === '' || name === undefined) return 'Hello, World!'
  name = name.toLowerCase()
  let firstSym = name[0].toUpperCase()
  let otherSym = name.slice(1)
  return `Hello, ${firstSym.concat(otherSym)}!`
}

function mouthSize(animal) {
  animal = animal.toLowerCase()
  return animal === 'alligator' ? 'small' : 'wide'
}

function solve(s){
  let up = 0
  let low = 0
  let sUp = s.toUpperCase()
  let sLow = s.toLowerCase()
  for(let i = 0; i < s.length; i++){
    if(sUp[i] === s[i]) up++
    if(sLow[i] === s[i]) low++
  }
  return up > low ? s.toUpperCase() : s.toLowerCase()
}

//-----------------------------------------------------

var capitals = function (word) {
  let arr = []
  for(let i = 0; i < word.length; i++){
    if(word[i].toUpperCase() === word[i]) arr.push(i)
  }
  return arr
};

function swap(str){
  let strRev = ''
  for(let i = 0; i < str.length; i++){
    if(str[i] === str[i].toUpperCase()) strRev += str[i].toLowerCase()
    else strRev += str[i].toUpperCase()
  }
  return strRev
}

function accum(s) {
  let str = ''
  for(let i = 0; i < s.length; i++){
    str += s[i].toUpperCase()
    for(let b = 0; b < i; b++){
      str += s[i].toLowerCase()
    }
    str += '-'
  }
  return str.slice(0, -1)
}

function makeUpperCase(str) {
  return str.toUpperCase()
}

function capitalizeWord(word) {
  let first = word[0].toUpperCase();
  return first + word.slice(1)
}

//------------------------------------------------------

function fiveLine(s){
  s = s.trim()
  let str = ''
  for(let i = 0; i < 4; i++){
    str += s + '\n'
    for(let b = 0; b <= i; b++){
      str += s
    }
  }
  console.log(s)
  return str+s
}

//----------------------------------------------------

function timeConvert(num) {
  if(num < 1) return '00:00'
  let minutes = num % 60
  let hours = 0
  if(num > 59) hours = Math.floor(num / 60)
  if(hours < 10) hours = '0'+ hours
  if(minutes < 10) minutes = '0'+ minutes
  return `${hours}:${minutes}`
}

function add(num1, num2) {
 num1 = ('' + num1).split('').reverse()
  num2 = ('' + num2).split('').reverse()
  let max = Math.max(num1.length, num2.length)
  let str = [];
  for(let i = 0; i < max; i++)
    str.push((parseInt(num1[i]) || 0) + (parseInt(num2[i]) || 0))
  num1 = str.reverse().join('');
  return parseInt(num1);
}

//------------------------------------------------

function spam(number){
  let hue = 'hue'
  return  hue.repeat(number)
}

var repeatIt = function(str, n) {
  console.log(str)
  if(typeof(str) !== 'string') return 'Not a string'
  return str.repeat(n)
}

function stringy(size) {
  return ''.padEnd(size, '10')
}

function sc(floor){
  let str = "Aa~ "
  if(floor < 2) return ''
  if(floor < 7){
    return str.repeat(floor - 1) + 'Pa! Aa!'
  } else {
      return str.repeat(floor-1, "Aa~ ") + 'Pa!'
    }
}

function billboard(name, price = 30){
  if(name === '') return 0
  let a = `+${price}`.repeat(name.length)
  a = eval(a)
  return a
} 

function repeatStr (n, s) {
  return s.repeat(n)
}

//---------------------------------------------------

function vowel2index(str) {
  let arr = ['a','e','i','o','u']
  let result = ''
  for(let i = 0; i < str.length; i++){
    for(let b = 0; b < arr.length; b++){
      if(str[i].toLowerCase() === arr[b]) result += i+1
    }
    if(result[result.length-1] === `${(i+1)%10}`) continue
    else result += str[i]
  }
  return result
}

function letterCheck(arr) {
  let result = 0
  let oneSt = arr[0].toLowerCase()
  let twoSt = arr[1].toLowerCase()
    for(let b = 0; b < twoSt.length; b++){
      if(oneSt.includes(twoSt[b])) result++
  }
  return result === twoSt.length ? true : false
}

function calculate(string) {
  let str = string.split(' ');
  let res = [];
  let operator = '';
  for(let i = 0; i < str.length; i++){
    if(isNaN(+(str[i])) == false){
      res.push(str[i]);
    } 
    if(str[i] == 'loses'){operator = '-'};
    if(str[i] == 'gains'){operator = '+'}
   
  }
  console.log(operator)
   return (operator == '-')? +res[0] - +res[1] : +res[0] + +res[1];
}

function sabb(s, val, happiness){
 let letters = 0
 let sab = 'sabticl'
 for(let i = 0; i < s.length; i++){
   for(let b = 0; b < sab.length; b++){
     if(s[i].includes(sab[b])){
      letters++
      break
     }
   }
 }
  return 22 < (letters + val + happiness) ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
}

function dontGiveMeFive(start, end){
  let arr = []
  for(let i = start; i <= end; i++){
    arr.push(i)
  }
  let result = 0;
  for(let b = 0; b < arr.length; b++){
    if(String(arr[b]).includes(5)) result++
  }
  console.log(start,end,arr,result)
  return arr.length - result
}

var mispelled = function(word1, word2){
  let result = 0;
  for(let i = 0; i < word1.length; i++){
    for(let b = 0; b < word2.length; b++){
      if((word1[i]).includes(word2[b])) {
        result++ 
        break
      }
    }
  }
  if(Math.abs(word1.length - word2.length) >= 2) return false
  return (word1.length === result || word1.length === result-1 || word1.length === result+1)&& word2.length <= result+1? true : false
}

function spEng(sentence){
  return sentence.toLowerCase().includes('english')
}

//------------------------------------------------------------

function tripleX(str){
  let firstX = str.indexOf('x') 
  console.log(str, firstX)
if(str.indexOf('x', firstX+1) === firstX + 1)  return true
  else return false
}

function abbrevName(name){
  return `${name[0].toUpperCase()}.${name[name.indexOf(' ')+1].toUpperCase()}`
}

function position(letter){
  let str = '0abcdefghijklmnopqrstuvwxyz'
  return`Position of alphabet: ${str.indexOf(letter)}`
}

function wordsToMarks(string){
  let sum = 0;
  for(let i = 0; i < string.length; i++){
    sum += string[i].charCodeAt() - 96
  }
  return sum
}

//--------------------------------------------------------

function firstToLast(str,c){
  console.log(str, c)
  if(str.lastIndexOf(c) === -1) return -1
  return (str.lastIndexOf(c) === str.indexOf(c)) ? 0 : str.lastIndexOf(c) - str.indexOf(c)
}

//----------------------------------------------------------

function validateCode (code) {
  code += ''
  return code.startsWith('1') || code.startsWith('2') || code.startsWith('3')
}

//-----------------------------------------------------------

function solution(str, ending){
  return str.endsWith(ending)
}

function searchNames( logins ){
  let log = 0;
  let index = 0;
  let result = []
 for(let i = 0; i < logins.length; i++){
  log = logins[i].filter(el => el.endsWith('_'))
   if(logins[i][0].endsWith('_')) result.push(logins[i]) 
 }
  return result
 console.log(log, index)
}

function automorphic(n){
  return String(Math.pow(n,2)).endsWith(String(n)) ? 'Automorphic' : 'Not!!'
}

//------------------------------------------------------------

function solution(digits){
  let result = digits.slice(0, 5)
  for(let i = 1; i < digits.length - 4; i++){
    if(result < digits.slice(i, i+5)) result = digits.slice(i, i+5)
  }
  return Number(result)
}

const createPhoneNumber = n => {
  n = n.join('')
  return `(${n.slice(0,3)}) ${n.slice(3,6)}-${n.slice(6)}`
}

const greet = function(name) {
return `Hello ${name[0].toUpperCase() + name.toLowerCase().slice(1)}!`
};

function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, '#')
}

function trim(str, size) {
  console.log(str,size)
  return size >= str.length ? str : size > str.length ? str : str.length < 4 ? str.slice(0, size) +  '...' : str.slice(0,size-3) + '...'
}

function shortenToDate(longDate) {
  return longDate.slice(0, longDate.indexOf(','))
}

function rotate(str){
  console.log(str)
  if(str === ' ') return [' ']
  let arr = [str]
  for(let i = 0; i < str.length; i++){
    arr.push(arr[i].slice(1)+arr[i][0])
  }
  arr.shift()
  return arr
}

function tailSwap(arr) {
  let one = arr[0].indexOf(':')
  let two = arr[1].indexOf(':')
  return [`${arr[0].slice(0,one)}${arr[1].slice(two)}`, `${arr[1].slice(0,two)}${arr[0].slice(one)}`]
}

function scrollingText(text){
  if(text === ' ') return [' ']
  let arr = [text]
  for(let i = 0; i < text.length; i++){
    arr.push(arr[i].slice(1)+arr[i][0])
  }
  arr.pop()
  return arr.map(el => el.toUpperCase())
}

function polydivisible(x) {
  return Math.floor(x / String(x).length) === (x / String(x).length) 
}

//------------------------------------------------

function shortcut (string) {
  return string.replace(/[aeiou]/g, '')
}

function DNAStrand(dna){
  function repl (s) {
    switch(s){
        case 'A': return 'T'
        case 'T': return 'A' 
        case 'C': return 'G'
        case 'G': return 'C'
    }
  }
  return dna.replace(/[ATCG]/g, repl)
}

function DNAtoRNA(dna){
  function repl (s) {
    switch(s){
        case 'T': return 'U'
        case 'U': return 'T' 
    }
  }
  return dna.replace(/[TU]/g, repl)
}

function removeRotten(bagOfFruits){
  if(!!bagOfFruits && bagOfFruits.length === 0 || !Array.isArray(bagOfFruits))return []
  return bagOfFruits.join(',').replace(/rotten/g, '').split(',').map(el => el.toLowerCase())
}

function correct(string){
  function symbol (k){
    switch(k){
        case '5': return 'S'
        case '0': return 'O'
        case '1': return 'I'
    }
  }
  console.log(string)
  return string.replace(/[501]/g, symbol)
}

function getNumberFromString(s) {
  return +s.replace(/[^+\d]/g, '')
}

function correctPolishLetters (string) {
  function symbol(s){
    switch(s){
    case 'ą' : return 'a'
    case 'ć' : return 'c'
    case 'ę' : return 'e'
    case 'ł' : return 'l'
    case 'ń' : return 'n'
    case 'ó' : return 'o'
    case 'ś' : return 's'
    case 'ź' : return 'z'
    case 'ż' : return 'z'
    }
  }
  return string.replace(/[ąćęłńóśźż]/g, symbol)
}

function fakeBin(x){
  x = x.replace(/[0-4]/g, '0')
  return x.replace(/[5-9]/g, '1')
}

function remove (string) {  
  string = string.split('')
  for(let i = 0; i < string.length; i++){
    if(string[string.length-1] === '!'){
      string.pop()
    }
  }
  console.log(string[string.legnth-1] === '!')
  return string.join('')
}

var removeVowels = function(str){
  return str.replace(/[aeioou]/g, '')
}

var replaceDots = function(str) {
  return str.replace(/[.]/g, '-');
}

function contamination(text, char){
  return text.replace(/./g, char)
}

//------------------------------------------------------

function reverseWords(str){
  let result = []
  str = str.split(' ')
  for(let i = str.length-1; i >= 0; i--){
    result.push(str[i])
  }
  return result.join(' ')
}

var isAnagram = function(test, orig) {
  var test = test.toLowerCase().split('').sort().join('');
  var orig = orig.toLowerCase().split('').sort().join('');

  return test == orig;
}

function descendingOrder(n){
  return +((n+'').split('').sort((a,b) => b-a).join(''))
}

function highAndLow(numbers){
  numbers = numbers.split(' ').map(el => +el)
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}

function nameShuffler(str){
  return str.split(' ').reverse().join(' ')
}

function addLength(str) {
  str = str.split(' ')
  for(let i = 0; i < str.length; i++){
     str[i] += ' ' + str[i].length
  }
  return str
}

function validatePIN (pin) {
  if(pin.length !== 4 && pin.length-2 !== 4) return false
  return pin = pin.split('').every(el => +el >= 0 && el !== '\n')
}

var palindromeChainLength = function(n) {
 let notIsPalindrome = true, index = 0, value=n;
 while(notIsPalindrome){
   let reversed = Number.parseInt(value.toString().split('').reverse().join(''));
   if(value == reversed){
     notIsPalindrome = false;
   }else{
     index++;
     value += reversed;
   }
 }
 return index;
}

function makeString(s){
  s = s.split(' ')
  let result = ''
  for(let i = 0; i < s.length; i++){
    result += s[i][0]
  }
  return result
}

function isMatching(string, str1, str2) {
  string = string.toLowerCase().replace(/\s+/g, '').split('').sort().join('')
  str2 = (str2+str1).toLowerCase().replace(/\s+/g, '').split('').sort().join('')
  return string == str2
}

function findLongest(str) {
  let spl = str.split(" ")
  let longest = 0
  for(let i = 0; i < spl.length; i++){
    if(spl[i].length > longest){
      longest = spl[i].length
    }
  }
    return longest
}

function initializeNames(name){
  name = name.split(' ')
  if(name.length < 3) return name.join(' ')
  let result = '' +  name[0] + ' '
  for(let i = 1; i < name.length-1; i++){
    result += name[i][0] + '. '
  }
  return result + name[name.length-1]
}

function reverse(string){
  return string.split(' ').reverse().join(' ')
}

function stringToArray(string){
  return string.split(' ')
}

function product (string) {
let exclam = 0
let quest = 0
for(let i = 0; i < string.length; i++){
  if(string[i] === '!') exclam++
  if(string[i] === '?') quest++
}
  return exclam * quest
}

function determineTime (durations) {
  console.log(durations)
  if(durations.length === 0) return true
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  for(let i = 0; i < durations.length; i++){
    hours += +(durations[i][0] + durations[i][1])
    minutes += +(durations[i][3] + durations[i][4])
    seconds += +(durations[i][6] + durations[i][7])
  }
  hours = hours + (seconds/60 + minutes)/60
  console.log(hours, minutes, seconds,)
  return hours <= 24 ? true : false
}

function interweave(s1, s2) {
  let s = '', l = Math.max(s1.length, s2.length);
  for(let i = 0; i < l; i++) {
    if(s1[i]) s += s1[i];
    if(s2[i]) s += s2[i];
  }
  return s.replace(/\d/g,'').trim();
}

function reverseBits (n) {
  n = n.toString(2).split('').reverse().join('')
  console.log(n)
  return parseInt(n, 2)
}

function totalBill(str) {
  let sum = 0
  for(let i = 0; i < str.length; i++){
    if(str[i] === 'r') sum++
  }
  sum -= Math.floor(sum / 5)
  return sum*2
}

function tidyNumber(n){
  n+=''
  console.log(n)
  for(let i = 0; i < n.length-1; i++){
    if(+(n[i]) <= +(n[i+1])) continue
    else return false
   }
  return true
}

function solve(eq){
  return eq.split(/([*\+\-\/])/).reverse().join('');
}

function hydrate(s) {
  let sum = 0
  for(let i = 0; i < s.length; i++){
    if(typeof(+s[i]) === 'number' && !isNaN(+s[i])) sum += +s[i]
  }
  return sum > 1 ? sum + ' glasses of water' : sum + ' glass of water'
}

const removeConsecutiveDuplicates = s => {
  let result = ''
  s = s.split(' ')
  for(let i = 0; i < s.length; i++){
      if(s[i] !== s[i+1]) result += s[i] + ' '
  }
  return result.slice(0,-1)
}

function digits(num){
  let result = []
  num = String(num).split('').map(el => +el)
  for(let i = 0; i < num.length; i++){
    for(let b = i+1; b < num.length; b++){
      result.push(num[i] + num[b])
    }
  }
  return result
}

function fix(paragraph){
  if(!paragraph) return ''
  paragraph = paragraph.split('. ')
  for(let i = 0; i < paragraph.length; i++){
    paragraph[i] = paragraph[i].slice(0,1).toUpperCase() + paragraph[i].slice(1)
  }
  return paragraph.join('. ')
}

function duplicateSandwich(a) {
  let start = 0;
  let end = 0;
  for(let i = 0; i < a.length; i++){
    if(a.indexOf(a[i]) !== a.lastIndexOf(a[i])){
      start = a.indexOf(a[i])
      end = a.lastIndexOf(a[i])
    }
  }
  let result = []
  for(let i = start+1; i < end; i++){
    result.push(a[i])
  }
  console.log(a,start,end,result)
  return typeof(a) === 'string' ? result.join('') : result
}

//---------------------------------------------------------

function wrap(value) {
  return { value: value }
}

var rooms = {
  first : {
    name : "firstRoom",
    description : "play",
    completed : true,
  },
  second : {
    name : "secondRoom",
    description : "sport",
    completed : true,
  },
  third : {
    name : "thirdRoom",
    description : "relax",
    completed : false,
  },
}

var rooms = {
  first: {
    description: 'This is the first room',
    items: {
      chair: 'The old chair looks comfortable',
      lamp: 'This lamp looks ancient',
    },
  },
  second: {
    description: 'This is the second room',
    items: {
      couch: 'This couch looks like it would hurt your back',
      table: 'On the table there is an unopened bottle of water',
    },
  }
}

function giveMeFive(obj){
  let arr = []
  for(let key in obj){
    if(key.length === 5) arr.push(key)
    if(obj[key].length === 5 ){
      arr.push(obj[key])
    }
  }
  return arr
}

function greet(language) {
  let languageList = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  }
  for(let key in languageList){
    if(key === language) return languageList[key]
  }
  return 'Welcome'
}

function iTri(s){
  let sum = 2.4+112+26.2
  let swim = 2.4, bike = 112, run = 26.2
  console.log(s, sum)
  if(s >= sum) return 'You\'re done! Stop running!'
  return s <= 0 ? 'Starting Line... Good Luck!' : s <= 2.4 ? {'Swim':`${(sum - s).toFixed(2)} to go!`} : s <= 112 ? {'Bike':`${(sum-s).toFixed(2)} to go!`} : (sum - s) < 10 ? { Run: 'Nearly there!' } : {'Run':`${(sum-s).toFixed(2)} to go!`}
}

function duckDuckGoose(players, goose) {
  let size = players.length ;
    while (goose > size) {
      goose = goose - size;
    } 
    return players[goose-1].name;
  }

function redarr(arr) {
  let resultArr = []
  let arr_1 = [...new Set(arr)].sort()
  for(let i = 0; i < arr_1.length; i++){
    resultArr.push(i+'')
    resultArr.push(arr_1[i])
  }
  return Object.assign({}, arr_1)
}

//-------------------------------------------------

function type(value) {
 return ({}.toString.call(value)).split(' ')[1].toLowerCase().slice(0, -1)
}

function countWins(winnerList, country) {
  return winnerList.filter(x => country === x['country']).length
}

//-----------------------------------------------------

function getMax1(){
  var max = {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2(){
  return { 
    name: 'Max Headroom'
  }
}

//---------------------------------------------------

var makeBackronym = function(string){
  string = string.toUpperCase()
  let result = ''
  for(let i = 0; i < string.length; i++){
    result += dict[string[i]] + ' '
  }
  return result.slice(0, -1)
}

function arithmetic(a, b, operator){
  const operat = {
    add : a+b,
    subtract: a-b,
    multiply: a*b,
    divide: a/b,
  }
  return operat[operator]
}

function sumPPG(playerOne, playerTwo){
  console.log(playerOne, playerTwo)
  let sum = playerOne.ppg + playerTwo.ppg
  return sum
}

function checkThreeAndTwo(array) {
  let same = {
    a : 0,
    b : 0,
    c : 0,
  }
  for(let i = 0; i < array.length; i++){
    same[array[i]]++
  }
  console.log(array, same)
  if(same.a === 3 || same.b === 3 || same.c === 3){
    if(same.a === 2 || same.b === 2 || same.c === 2){
      return true
    }
  }
  return false
}

//-------------------------------------------------------------

function createDict(keys, values){
  let obj = {}
  for(let i = 0; i < keys.length; i++){
    if(values.length < keys.length){
      values.push(null)
    }
    obj[keys[i]] = values[i]
  }
  return obj
}

function countDevelopers(list) {
  let result = 0;
  for(let i = 0; i < list.length; i++){
    if(list[i].continent === 'Europe' && list[i].language === 'JavaScript') result++
  }
  return result
}

function greetDevelopers(list) {
  for(let i = 0; i < list.length; i++){
    list[i].greeting = `Hi ${list[i].firstName}, what do you like the most about ${list[i].language}?`
  }
  return list
}

function testResult(array) {
  let result = []
  let average = 0
  let dict = {
    h : 0,
    a : 0,
    l : 0,
  }
  for(let i = 0; i < array.length; i++){
    average += array[i]
    if(array[i] < 7) dict.l++
    else if(array[i] < 9) dict.a++
    else dict.h++
  }
  average = (average/array.length).toFixed(3)
  result.push(+average, dict)
  if(dict.a === 0 && dict.l === 0) result.push('They did well')
  return result
}

function count(array){
let obj = {}
for(let i = 0; i < array.length; i++){
  if(obj[array[i]] !== undefined) obj[array[i]] += 1
  else obj[array[i]] = 1
}
console.log(array, obj)
  return obj
}

function numObj(s){
  let arr = []
  for(let i = 0; i < s.length; i++){
    let obj = {}
    obj[`${s[i]}`] = String.fromCharCode(s[i])
  arr.push(obj)
  }
  return arr
}

function countLanguages(list) {
  let obj = {}
  for(let i = 0; i < list.length; i++){
    if(obj[list[i].language] === undefined) obj[list[i].language] = 1
    else obj[list[i].language] += 1
  }
  return obj
}

//----------------------------------------------

function nameScore(name){
  console.log(name, alpha)
  let name2 = name.toUpperCase().replace(/\s/g, '')
  let sum = 0
  for(let i = 0; i < name2.length; i++){
    for(let key in alpha){
      if(key.includes(name2[i])) sum+= alpha[key] 
    }
  }
  let  obj = {}
  obj[name] = sum
  return obj
}

function outed(meet, boss){
  let sum = meet[boss]
  for(let key in meet){
    sum += meet[key]
  }
  sum = sum/11
  return sum <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}

function permuteAPalindrome (input) { 
  let obj = {}
  for (let el of input){
    if (obj[el] === undefined)
      obj[el] = 1;
    else
      obj[el]++;
  }
  
  let countOdd = 0;
  for (let key in obj){
    if (obj[key]%2 !== 0)
      countOdd++;
  }
  return (countOdd<=1);
}

function daysRepresented(trips){
  let days = [];
  for ( let i = 0; i < trips.length; i++){
    for (let k = trips[i][0]; k <= trips[i][1]; k++){
      if (!days.includes(k)){
        days.push(k);
        console.log(days)
      }
    }
  }
  return days.length;
}

function f(x, cc) { 
  const obj = {
    a : 'b',
    b : 'c',
    c : 'a',
  }
  let abc = 0
  console.log(x,cc)
  for(let key in cc){
    if(cc[key] === x) abc = obj[key] 
    console.log(abc)
  }
  for(let key in cc){
    if(abc == key) return cc[key]
  }
}

function solve(st) {
 let obj = {}
 for(let i = 0; i < st.length; i++){
   if(obj[st[i]] === undefined) obj[st[i]] = st.lastIndexOf(st[i]) - st.indexOf(st[i])
 }
let max = -1
let result = ''
  for(let key in obj){
    if(obj[key] > max){
      max = obj[key]
      result = key
    }
  }
  let arr = []
  for(let key in obj){
    if(obj[key] === max) arr.push(key)
  }
  arr = arr.sort()
  return arr[0]
}

//--------------------------------------------------

function boredom(staff){
  console.log(staff)  
  const obj = {
    accounts : 1,
    finance : 2,
    canteen : 10,
    regulation : 3,
    trading : 6,
    change : 6,
    IS : 8,
    retail : 5,
    cleaning : 4,
    'pissing about' : 25,
  }
  let sum = 0;
  for(let key in staff){
    for(let key2 in obj){
      if(staff[key] === key2) sum += obj[key2]
    }
  }
  return sum <= 80 ? 'kill me now' : sum < 100 ? 'i can handle this' : 'party time!!'
}

function numberOfPairs(gloves){
  let obj = {}
  let gloves2 = gloves.filter((el,i) => gloves.indexOf(el) === gloves.lastIndexOf(el))
  for(let i = 0; i < gloves.length; i++){
      if(obj[gloves[i]] === undefined) obj[gloves[i]] = 1
      else obj[gloves[i]]++
  }
  let count = 0
  for(let key in obj){
    count += Math.floor(obj[key] / 2) 
  }
  return count
}

function replaceCommon(string, letter) {
 let obj = {}
 let string1 = string.replace(/\s/g, '')
 for(let i = 0; i < string1.length; i++){
   if(obj[string1[i]] === undefined) obj[string1[i]] = 1
   else obj[string1[i]]++
 }
let max = -1
let result = ''
  for(let key in obj){
    if(obj[key] > max){
      max = obj[key]
      result = key
    }
  }
  let arr = []
  for(let key in obj){
    if(obj[key] === max) arr.push(key)
  }
  console.log(string, letter, obj, arr)
  string = string.split('')
  for(let i = 0; i < string.length; i++){
    if(string[i] === arr[0]) string[i] = letter
  }
  console.log(string)
  return string.join('')
}

function sentence(list) {
  let result = ''
  let obj = {}
  for(let i = 0; i < list.length; i++){
    obj = Object.assign(obj, list[i])
  }
  let arr = []
  for(let key in obj){
    if(key !== Math.abs(key)+'') arr.push(key) 
  }
  arr = arr.map(el => Math.abs(+el)).sort((a,b) => b-a).map(el => '-' + el)
  let arr2 = []
  for(let key in obj){
    if(key === Math.abs(key)+'') arr2.push(key) 
  }
  arr = arr.concat(arr2)
  for(let i = 0; i<arr.length; i++){
    result += obj[arr[i]] + ' '
  }
  return result.slice(0,-1)
}

function myLanguages(results) {
console.log(results)
  let result = []
  for(let key in results){
    if(results[key] >= 60) result.push(results[key])
  }
  let res = []
  result = result.sort((a,b) => b-a)
  for(let i = 0; i < result.length; i++){
    for(let key in results){
      if(results[key]===result[i]) res.push(key)
    }
  }
  return res
}

function getStrings(city){
   let obj = {}
   let string1 = city.replace(/\s/g, '').toLowerCase()
   for(let i = 0; i < string1.length; i++){
     if(obj[string1[i]] === undefined) obj[string1[i]] = '*'
     else obj[string1[i]] += '*'
   }
  let str = ''
  for(let key in obj){
    str += key+':'+obj[key]+','
  }
  return str.slice(0,-1)
}

//--------------------------------------------------

function Counter() {
  this.value = 0;
}
Counter.prototype.increase = function() {
  this.value++;
};
Counter.prototype.getValue = function() {
  return this.value;
};
Counter.prototype.reset = function() {
  this.value = 0;
};

String.prototype.toJadenCase = function () {
  return this.split(' ').map(el => el[0].toUpperCase()+el.slice(1)).join(' ')
};

Array.prototype.reverse = function() {
  let del = this.length
  for(let i = del-1; i > -1; i--){
    this.push(this[i])
  }
  for(let i = 0; i < del; i++){
    this.shift()
  }
  return this
};

let Ball = function(ballType) {
  return this.ballType = ballType ? ballType : 'regular'
};

//--------------------------------------------

function Vovan(name, age) {
  this.name = name
  this.age = age
  this.seyHi = function(){return 'Hello'}
}
  
let obj1 = new Vovan('vova', 20)
console.log(obj1)

let obj2 = new Vovan('vlad', 21)
console.log(obj2)

//--------------------------------------------

var Ghost = function() {
  let arr = ['white', "yellow", "purple", "red"]
  this.color = arr[Math.floor(Math.random() * 4)]
};

let obj1 = new Ghost()
let obj2 = new Ghost()
console.log(obj1)
console.log(obj2)

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
}

String.prototype.digit = function() {
  console.log(this)
  return this.length === 1 && '0' <= this && this <= '9';
};

String.prototype.isUpperCase = function() {
  console.log(this)
  return this.toUpperCase() == this 
}

String.prototype.toAlternatingCase = function () {
  return this.split('').map(el => el.toUpperCase() == el ? el.toLowerCase() : el.toUpperCase()).join('')
}

Array.prototype.only = function(keys){
  console.log(this,keys)
  keys.sort((a,b) => a-b)
  let arr = []
  for(let i = 0; i < keys.length; i++){
    arr.push(this[keys[i]])
  }
  return arr
}

String.prototype.camelCase=function(){
  console.log(this === undefined, this)
  if(!this || !this || 0 === this.length) return ''
  else if(this[0] === ' ') return this.slice(1).split(' ').map(el => el[0].toUpperCase()+el.slice(1)).join('')
  else if(this[this.length-1] === ' ') return this.slice(0,-1).split(' ').map(el => el[0].toUpperCase()+el.slice(1)).join('')
  else return this.split(' ').map(el => el[0].toUpperCase()+el.slice(1)).join('')
}

class Dinglemouse{
  constructor( firstName, lastName ){
    this.firstName = firstName.concat(" ");
    this.lastName = lastName;
  }  
  getFullName(){
    return this.firstName.concat(this.lastName).trim();
  }
}

//----------------------------------------------------

function sum(age, somethig, ...arg){
  console.log(age)
  console.log(somethig)
  console.log(arg)
}
sum(12, 'name', 'egg')

function numbers(...arg){
  console.log()
  if (arg.some(el => typeof el === 'string') || !arg[0]) return false
  else return arg
}

var Calculator = {
  average: function(...arg) {
    if(arg.length <= 0) return 0
    let sum = arg.reduce((acc, curr) => acc+curr, 0)
    return sum / arg.length
  }
}

function last(...list){
  console.log(list)
  if(typeof list[0] === 'object'  || typeof list[0] === 'string' && list.length === 1) return list[0][list[0].length-1]
  return list[list.length-1]
}

function add(...arg) {
  console.log(arg)
  arg = arg.map((el, i) => el*(i+1))
  return arg.reduce((acc, curr) => acc + curr, 0)
}

function isDivisible(first, ...arg){
  console.log(first,arg)
  for(let i = 0; i < arg.length; i++){
    if(first%arg[i] !== 0) return false
  }
  return true
}

function findSum(...arg){
  if(arg.some(el =>  el < 0)) return -1
  return arg.reduce((acc, curr) => acc + curr, 0)
}

function heron(a,b,c) {
  let s = (a+b+c) / 2
  return Math.sqrt(s*(s-a)*(s-b)*(s-c))
}

function calculate (firstN) {
  return function(secondN){
    console.log(firstN + secondN)
  }
}
console.log(calculate(1))

function calculate(...arg) {
  return function(...gra){
    return arg.reduce((acc, curr) => acc + curr, 0) + gra.reduce((acc, curr) => acc + curr, 0)
  }
}

function args_count(...arg){
  return arg.length
}

//-------------------------------------------------------

function objectType(...obj) {
  return Object.prototype.toString.call(...obj,null);
}

//-------------------------------------------------------

function spread(func, args) {
  return func.apply(spread, args) 
}

//-------------------------------------------------------

// Метод bind() создаёт новую функцию, при вызове которой в качестве контекста выполнения this будет установлено предоставленное значение.

// Синтаксис: funсtion.bind(context, [arg1], [arg2], ...),

// где context - это зафиксированное значение this, то есть 'this = context', arg1, arg2 - начальные аргументы функции.

// Используется метод bind() преимущественно для того, чтобы вызвать функцию с явным указанием значения this. То есть, bind() позволяет нам указать, ссылка на какой объект будет значением this, когда функция будет вызвана, и вызвать эту функцию.

// Это может показаться очень простой задачей, но иногда действительно необходимо явно указать значение this. Проблема может заключаться в том, что функция не всегда вызывается в контексте того объекта, в котором она описана, — соответственно, и значение this в функции может меняться.

// Метод bind() - это вызов функции с фиксированным this конкретного объекта.

// const user = {
//   name: 'Joe',
// };
// function sayHi(){
//   console.log('Hi! ' + this.name);
// }
// let funcUser = sayHi.bind(user); // привязка this к user
// funcUser(); // "Hi! Joe"
// В данном примере 'funcUser' передаёт вызов в 'sayHi', фиксируя 'this = user'. Здесь 'sayHi.bind(user)' – это «связанный вариант» 'sayHi' с фиксированным 'this = user'.

// Передаваемые в 'sayHi' аргументы будут неизменными:

// const user = {
//   name: 'Joe',
// };
// function sayHi(word){
//   console.log(word + ' Hi! ' + this.name);
// }
// let funcUser = sayHi.bind(user);
// funcUser('Nice!'); // "Nice! Hi! Joe"
// Попробуем использовать bind() для метода объекта:

// const user = {
//   name: 'Ivan',
//   say: function (){
//     console.log(this.name + ' Hello!');
//   },
// };

// let sayHi = user.say.bind(user); // привязываем user.say к user
// // теперь SayHi - это 'связанная функция' и может быть вызвана отдельно
// sayHi(); // "Ivan Hello!"
// В примере ниже мы видим, что bind исправляет только this, а аргументы передаются как есть:

// const user = {
//   name: 'Ivan',
//   say: function (text){
//     console.log(this.name + ' Hello!' + text);
//   },
// };
// let sayHi = user.say.bind(user); 
// sayHi('How are you?'); // "Ivan Hello!How are you?"
// Рассмотрим следующий пример:

// // создадим объект user
// const user = {
//   name: 'Ivan',
//   age: 30,
//   introduction: function (job){
//     console.log('Name is ' + this.name);
//     console.log('Age is ' + this.age);
//     console.log('Job is ' + job);
//   },
// };
// // привяжем user.introduction к user
// let say = user.introduction.bind(user); // обратите внимание, что bind только создает функцию, а вызываем ее отдельно
// // вызовем связанную функцию
// say('QA'); 

// // создадим другой объект без метода
// const person = {
//    name: 'Anna',
//    age: 25,
// };
// // применим метод объекта 'user' user.introduction для объекта 'person'
// // нам не нужно создавать такой же метод у объекта person
// user.introduction.bind(person, 'QA')(); // такой вариант синтаксиса тоже возможен
// Обратите внимание, что контекст this это объект, к которому мы применяли bind, а значение аргумента job осталось неизменным.

// С помощью bind можно привязать не только контекст this, но и аргументы (используется это довольно редко):

// const obj = {
//   num: 2,
//   mult: function(b, c){
//     return this.num * b * c;
//   },
// };
// let mult3 = obj.mult.bind(obj, 3); // всегда имеем 2 * 3
// console.log(mult3(5)); // 30, (2 * 3) * 5 
// console.log(mult3(10)); // 60, (2 * 3) * 10
// Разберем пример, указанный выше. У нас есть объект 'obj', который имеет метод, принимающий значение 'this' и два аргумента. Мы хотим создать новую функцию из данного метода, которая всегда будет умножать на 3 значение 'this'. То есть наша функция должна привязать не только контекст 'this', но и один аргумент: 'b' (его значение должно быть равно 3). Второй аргумент ('c') мы передаем в новую функцию 'mult3'.

// Также возможен вариант привязки аргументов без this. В таком случае вместо this в метод будет передано значение null:

// const obj = {
//   mult: function(b, c){
//     return b * c;
//   },
// };
// let mult3 = obj.mult.bind(null, 3); // всегда имеем 3 в качестве аргумента
// console.log(mult3(5)); // 15, 3 * 5 
// console.log(mult3(10)); // 30, 3 * 10

//---------------------------------------------------

// Ранее мы уже знакомились с понятием prototype и помним, что каждый объект в JavaScript имеет внутреннюю ссылку на другой объект (прототип). У объекта-прототипа есть свой собственный прототип и так далее. Цепочка наследования завершится объектом, у которого свойство prototype равно null. По определению, null не имеет прототипа, поэтому и является последним в цепочке прототипов. Также мы знаем, что существуют встроенные прототипы для объектов Function, Object, Date, Number, String и другие, которые хранят свои методы в прототипах. Но что если нам нужно расширить прототип, например, для объектов Number?

// Мы можем это сделать, но оговоримся сразу, что это считается плохой практикой, так как прототипы глобальны, и могут возникнуть конфликты. Если через разные библиотеки добавляется метод с одним названием, то одна библиотека перепишет метод другой. Более того, мы добавляем излишнюю нестандартную функциональность во встроенные методы.

// Единственный случай, где расширение встроенных прототипов исключительно хорошая идея - это создание полифилов. Полифил - это эмулятор новой функциональности (например, Array.forEach) для не поддерживающих её реализаций языка в старых веб-браузерах. Тогда мы можем реализовать его сами и добавить во встроенный прототип.

// Заметьте, что расширение встроенного объекта должно обычно приводить к коду, который легче читать и писать, функция расширения должна выполнять какую-то операцию, задействуя встроенный объект. Код должен быть быстрым и эффективным.

// Синтаксис для создания прототипа: встроенные объекты расширяются при помощи свойства prototype, с уникальным именем, которому присваивается анонимная функция.

// Рассмотрим на практических примерах как расширить встроенный прототип.

// Задание 1: Создать метод строк, который бы позволил одновременно убрать пробелы в начале и конце строки и перевести все символы в верхний регистр.

// String.prototype.trimAndUp = function(){
//   return this.trim().toUpperCase();
// }
// console.log(' c a t    '.trimAndUp()); // "C A T"
// console.log('   Dog'.trimAndUp()); // "DOG"
// Задание 2: Необходимо создать метод, позволяющий удалять все пробелы внутри строки.

// String.prototype.trimSpaces = function(){
//   return this.split(/\s/).join(''); // /\s/ - регулярное выражение, обозначающее символьный класс для пробелов
// };
// let str = 'a b      c d  e   ';
// let str2 = 'Hi! James Bond ! ';
// console.log(str.trimSpaces()); // "abcde"
// console.log(str2.trimSpaces()); // "Hi!JamesBond!"
// Задание 3: Создать методы для работы с любым числом, которые позволят заменить математические операции: сложение, умножение, деление, вычитание. Методы должны принимать один аргумент.

// Number.prototype.add = function(value){
//   return this + value;
// };
// Number.prototype.subtr = function(value){
//   return this - value;
// };
// Number.prototype.mult = function(value){
//   return this * value;
// };
// Number.prototype.div = function(value){
//   return this / value;
// };
// let num = 100;
// console.log(num.add(5)); // 105
// console.log(num.subtr(10)); // 90
// console.log(num.mult(5)); // 500
// console.log(num.div(20)); // 5
// console.log(num.add(50).div(50).mult(3).subtr(9)); // 0
// Задание 4: Создать метод, который позволит вернуть сумму всех аргументов, переданных в функцию, предварительно увеличив значение каждого аргумента на значение объекта Number, к которому метод будет применен.

// Number.prototype.addAdd = function(){
//   const args = Array.prototype.slice.call(arguments);
//   let res = args.map(el => el + this).reduce((acc, curr) => acc + curr, 0);
//   return res; 
// }
// let num2 = 5;
// console.log(num2.addAdd(1, 1, 2, 3)); // 27
// Задание 5: Вернуть число с n знаков после запятой, предварительно округлив его n-ный знак, используя метод Math.round().

// Number.prototype.truncate = function(n){
//   return Math.trunc(Math.round(this * Math.pow(10, n )))/ Math.pow(10, n);
// };
// let number = 12.1234567;
// console.log(number.truncate(5)); // 12.12346
// console.log(number.truncate(4)); // 12.1235
// Задание 6: Создать метод, позволяющий вернуть дробную часть числа, если число дробное, или только целочисленное значение, если число целое.

// Number.prototype.substrNum = function(){
//    let str = this.toString();
//    let ind = str.indexOf('.');
//    return ind == -1 ? +str : +str.substring(ind);
//  };
// let number = 125.123456789;
// let number2 = 5;
// console.log(number.substrNum());//0.123456789
// console.log(number2.substrNum()); // 5

//------------------------------------------------------------

// Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
// Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
// Array.prototype.average = function () { return this.sum() / this.length; }
// Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
// Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
// Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }

// function Sleigh() {}
// Sleigh.prototype.authenticate = function(name, password) {
//   return name === 'Santa Claus' && password === 'Ho Ho Ho!'
// };

// String.prototype.reverse = function(){
//     return this.split('').reverse().join('')
// }

// Array.prototype.even = function(){
//   return this.filter(el => el % 2 === 0 && Number.isInteger(el))
// }
// Array.prototype.odd = function(){
//   return this.filter(el => el % 2 !== 0 && Number.isInteger(el))
// }
// Array.prototype.under = function(x){
//   return this.filter(el => el < x && Number.isInteger(el))
// }
// Array.prototype.over = function(x){
//   return this.filter(el => el > x && Number.isInteger(el))
// }
// Array.prototype.inRange = function(min,max){
//     return this.filter(el => (el > min-1 && el < max+1) && Number.isInteger(el))
// }

// Boolean.prototype.toString = function() {
//   return this + ''
// }
// Number.prototype.toString = function() {
//   return this + ''
// }
// Array.prototype.toString = function() {
//   return '['+this.join(',')+']'
// }

// //--------------------------------------------------

// // Для преобразования строки к целому числу используется метод Number.parseInt(string) или функция parseInt(string).

// // Принципы их работы идентичны:

// // имеют два параметра: string и radix. Radix – основание системы счисления (число от 2 до 36), которое считается необязательным, но на практике лучше всегда его указывать;
// // пробелы в начале и конце строки не учитываются;
// // если значение, переданное в строку не является string, то неявно преобразовывается;
// // возвращаемое значение – целое число или NaN, если первый символ строки не удалось преобразовать в число.
// // console.log(parseInt('56.5ab', 10)); // 56
// // console.log(parseInt('     5abc   ', 16)); // 23228
// // console.log(parseInt(56.15, 10)); // 56
// // console.log(Number.parseInt('-56.15', 10)); // -56
// // console.log(Number.parseInt(100, 2)); // 4 
// // console.log(Number.parseInt('$56abc', 16)); // NaN
// // console.log(parseInt('abc5.6')); // NaN

// //--------------------------------------------------

// Объект - это некая сущность, которая имеет свои характеристики, а также может совершать действия. Характеристики объекта мы уже рассматривали ранее - это его свойства. А вот действия, которые может совершать объект - это методы (или свойства-функции) объекта, и в JavaScript они представлены функциями.

// // создадим объект order
// const order = {
//   orderDate: '10.01.2018',
//   deliveryDate: '15.01.2018',
// };

// // используем функциональное выражение, чтобы создать функцию и присваиваем ее свойству order.isDelivered
// order.isDelivered = function (){ 
//     console.log('Yes!')
//   };

// // вызываем функцию
// order.isDelivered(); // "Yes!"
// Существует разный синтаксис для создания и записи методов объекта:

// Функциональное выражение (как в примере выше). Сначала создаем объект, затем создаем функцию через функциональное выражение и присваиваем ее свойству объекта:
// // создаем объект
// const obj = {
//   name: 'Alice',
// };
// // присваиваем функцию в свойство объекта
// obj.sing = function() {
//   console.log('I can sing!')
// };
// // вызываем функцию
// obj.sing(); // "I can sing!"
// Объявление функции перед добавлением ее в свойство объекта. Сначала объявляем функцию, затем создаем объект (или наоборот, здесь порядок не важен), затем добавляем функцию в качестве метода:
// // создаем объект
// const obj = {
//   name: 'Alice',
// };
// // объявляем функцию sing
// function sing() {
//   console.log('I can sing!')
// };
// // присваиваем функцию в свойство объекта
// obj.sing = sing;
// // вызываем функцию
// obj.sing(); // "I can sing!"
// Создание объекта с методом:
// // создаем объект сразу с методом 
// const obj = {
//   name: 'Alice',
//   sing: function() {
//     console.log('I can sing!');
//   },
// };
// // вызываем функцию 
// obj.sing(); // "I can sing!"
// Создание объекта с методом (сокращенная запись без слова 'function'):
// // создаем объект сразу с методом 
// const obj = {
//   name: 'Alice',
//   sing() {
//     console.log('I can sing!');
//   },
// };
// // вызываем функцию 
// obj.sing(); // "I can sing!"
// Чаще всего метод не используется изолированно от других свойств объекта: ему нужен доступ к этим свойствам, чтобы выполнять какие-либо действия с ними.

// Для этого метод может использовать ключевое слово this.

// const obj = {
//   name: 'Alice',
//   sing() {
//     console.log(this.name + ' can sing!');
//   },
// };

// obj.sing(); // "Alice can sing!"
// Значение this - это объект, имя которого указано до точки, и именно он был использован для вызова метода.

// Конечно, мы могли бы и не использовать слово this в примере выше, а просто указать для вывода в консоль конкретное свойство объекта и получить абсолютно такой же результат:

// const obj = {
//   name: 'Alice',
//   sing() {
//     console.log(obj.name + ' can sing!');
//   },
// };

// obj.sing(); // "Alice can sing!"
// К сожалению, такой код ненадежен. В случае копирования ссылки на объект в другую переменную, и перезаписи первоначальной переменной другим значением, вызов метода от имени новой переменной вернет ошибку.

// let obj = {
//   name: 'Alice',
//   sing() {
//     console.log(obj.name + ' can sing!');
//   },
// };
// let obj2 = obj; // копируем ссылку в новую переменную
// obj = null; // "обнуляем" нашу переменную: теперь в ней нет ссылки на объект
// obj2.sing(); // "TypeError: Cannot read property 'name' of null"
// В случае использования this.name в примере выше, ошибка бы не возникла.

// Более наглядным примером, почему нужно использовать this, может быть использование одного метода для разных объектов:

// // создаем 2 объекта
// const cat = {
//   name: 'Tom',
// };
// const mouse = {
//   name: 'Jerry',
// };
// // объявляем функцию
// function action(){
//   console.log(this.name + ' runs!!!')
// }
// // добавляем функцию в свойства обоих методов
// cat.action = action;
// mouse.action = action;
// // вызываем метод на каждом объекте
// cat.action(); // "Tom runs!!!"
// mouse.action(); // "Jerry runs!!!"
// Обратите внимание, что this для каждого объекта разный - он является ссылкой на объект, который указан перед точкой.

// Важно! Синтаксис для вызова метода функции выглядит так: objectName.propertyName/['propertyName'](),

// где objectName - имя объекта, на котором вызывается метод, propertyName - имя свойства, записанное через скобочную или точечную запись.

// Если нам необходимо использование this в функции, то мы должны использовать обычную функцию, а не стрелочную, потому что последняя не имеет собственного this, а обращается за ним во внешнюю нормальную функцию (в примере ниже стрелочная функция обращается к this во внешний метод obj.sing ()):

// const obj = {
//   name: 'Alice',
//   sing() {
//     let moreActions = () => this.name + ' can sing and dance!';
//     console.log(moreActions());
//   },
// };
// obj.sing(); // "Alice can sing and dance!"

//----------------------------------------------------------

// Конспект урока
// Большинство функций работает так: принимает какие-то аргументы, рассчитывает что-то, используя эти аргументы, возвращает ответ.

// Пример 1. Функция вычисляет площадь прямоугольника со сторонами a и b.

// function areaOfRectangle(a, b) {
//   return a * b;
// }
// Вы передаете функции два числа и она возвращает ответ. Если ей дать эти же числа снова, вы получите тот же результат. На самом деле, сколько бы раз вы не повторяли её вызов со вводом одинаковых значений, результат будет идентичный.

// Детерминированная функция - это функция, которая всегда вращает один и тот же результат при одинаковых входных данных. Примером детерминированной функции является приведенная выше функция areaOfRectangle.

// Недетерминированная функция не всегда возвращает одинаковое значение при одинаковых входных данных. Недетерминированная функция непредсказуема, её результат зависит от внешних условий.

// Например, функция, которая принимает в качестве аргумента название города и возвращает количество жителей этого города. Эта функция может подключаться к серверу через интернет и, так как количество жителей города постоянно меняется, функция при каждом запросе (при передаче в качестве параметра одного и того же названия города) может выдавать разный результат.

// Ещё более простой пример недетерминированной функции — генератор случайных чисел. В JavaScript он такой:

// Math.random();      // 0.05262700002756571
// Math.random();      // 0.8690971893048665
// Каждый раз, когда вы вызываете его с одинаковыми аргументами (в данном случае — никаких аргументов вообще), результат всегда новый.

// Существует понятие — побочные эффекты — то, как функция изменяет внешний мир. Функция areaOfRectangle, рассмотренная раньше, не имеет никаких побочных эффектов. Она ничего не меняет за своими пределами. А вот часто всеми используемая функция console.log имеет побочный эффект: она выводит что-то на экран. Текст на экране — это что-то за рамками функции, это компьютер, мир в котором живёт функция.

// Пример 2. Рассмотрим пример детерминированной функции с побочным эффектом.

// let  a = 0;
// function f() {
//   a = a + 1;
//   return true;
// }
// console.log(f());  //true
// console.log(a);    //1 (функция изменила значение внешней переменной)
// Функция f является детерминированной, так как она всегда возвращает одно и то же значение true. Но функция f меняет значение глобальной переменной a. Эта переменная с точки зрения функции, находится во внешнем мире, а функция f меняет её. Поэтому у функции f есть побочный эффект.

// Пример 3. Функция console.log - пример детерминированной функции с побочным эффектом.

// let x = console.log('Hello'); // выводит в консоль "Hello!", но возвращает всегда undefined
// console.log(x);  //undefined 
// Хотя функция console.log имеет побочный эффект, она детерминированная, так как она всегда возвращает один и тот же результат: undefined.

// Пример 4. Рассмотрим пример недетерминированной функции с побочным эффектом.

// let  a = 0;
// function g() {
//   a = a + 1;
//   return a;
// }
// console.log(g()); //1 (изменила значение внешней переменной a на 1 и вернула это значение)
// console.log(g()); //2 (изменила значение внешней переменной a на 2 и вернула это значение)
// Функция g увеличивает значение внешней переменной a и возвращает его. Это пример недетерминированной функции с побочными эффектами (она будет возвращать разные значения при вызовах и изменяет значение внешней переменной).

// Чем меньше побочных эффектов имеет функция, тем лучше.

// "Чистая" функция - это детерминированная функция, которая не имеет побочных эффектов.

// В этом смысле чистые функции близки к математическим. x в квадрате с одним и тем же значением x, всегда будет давать одинаковый результат, а вычисление квадрата x не будет менять сам x.

// Приведенная выше функция areaOfRectangle - чистая функция (возвращает один и тот же результат при одинаковых входных данных) и не имеет побочных эффектов (ничего не меняет во внешнем мире).

// Функция Math.random() не имеет побочных эффектов, но она недетерминированная (возвращает разные значения при вызовах), значит, не является чистой.

// Функция console.log() детерминированная (возвращает один и тот же результат undefined), но имеет побочный эффект (выводит значения в консоль, т.е. влияет на внешний мир), поэтому она не является "чистой".

// Всё, что касается "чистых" функций кажется "проще": они просты для чтения, для отладки и поиска ошибок, для тестирования. "Чистые" функции в системе не зависят ни от чего по определению, поэтому порядок, в котором они вызываются, не имеет значения. Это значит, что их легко запустить, например, параллельно (одновременно) на разных процессорах или даже разных компьютерах.

// "Чистые" функции живут вне времени. Само понятие времени, действий, протекающих в какой-то последовательности, не касается чистых функций. Время их не беспокоит. Когда вы смотрите на "чистые" функции, читаете код, делаете отладку, тестируете или просто используете их — вам не нужно думать о времени, о том, что случилось до и случится после.

// Недетерминизм и побочные эффекты добавляют понятие времени. Если ваша функция зависит от чего-то что может случиться, а может не случиться, и изменит что-то за своими пределами, то она вдруг становится зависимой от времени. Тогда становится важным, в какой момент времени произошёл вызов функции. Становится тяжелее думать, тестировать и работать, потому что вам нужно принимать во внимание дополнительное измерение.

// Коротко о главном:
// Функция называется чистой, если она удовлетворяет двум условиям:

// Функция возвращает точно такой же результат каждый раз, когда она вызывается с тем же набором аргументов.
// Выполнение функции не изменяет какое-либо состояние за пределами её области видимости и не оказывает видимого воздействия на внешний мир, кроме возвращения значения (никаких побочных эффектов).

//----------------------------------------------

// Метод apply() вызывает функцию с указанным значением this и аргументами, предоставленными в виде массива (либо массивоподобного объекта).

// Работа данного метода абсолютно идентична методу call(), единственное отличие: call() ожидает список аргументов, в то время как apply() принимает массив (массивоподобный объект).

// Синтаксис: function.apply(context, args),

// где context - это контекст исполнения (this), args - массивоподобный объект или массив.

// В качестве args может быть:

// литерал массива: function.apply(this, ['a', 'b']),
// объект Array: function.apply(this, new Array('a', 'b')),
// объект arguments (вызываемый объект самостоятельно разберётся с обработкой аргументов): function.apply(this, arguments),
// любой массивоподобный объект, что означает, что данный объект должен иметь свойство 'length' и мы можем обращаться к его элементам по индексу.
// Рассмотрим работу метода apply() на примере вызова функции say в контексте двух объектов. say.apply(store) запускает say, передавая 'this = store', а следующая строка устанавливает 'this = customer':

// const store = {
//   name: 'Walmart',
// };
// const customer = {
//   name: 'Joe',
// };
// function say(){
//   console.log('Hi, ' + this.name); 
// }
// say.apply(store); // "Hi, Walmart"
// say.apply(customer); // "Hi, Joe"
// Мы также можем передавать не только заданный контекст, но и аргументы:

// const user = {
//   name: 'Coco',
// };
// const user2 = {
//   name: 'Jess',
// };
// function say(n1, n2){
//   console.log('Bye, ' + this.name + ' ' + (n1 * n2)); 
// }
// say.apply(user, [10, 2]); // "Bye, Coco 20"
// say.apply(user2, [-2, -5]); // "Bye, Jess 10"
// В следующем примере метод apply() позволяет нам выполнять функцию обратного вызова в контексте переданного объекта. callback ("обратный вызов") - это функция, которая должна быть выполнена после того, как другая функция завершит работу:

// const client = {
//     id: 111,
//     fullName: null,
//     setName: function(first, last){   
//         this.fullName = first + ' ' + last;
//     }
// }
// function getName([first, last], func, obj) {
//     func.apply(obj, [first, last]);
// }
// getName(['Anna', 'Ivanova'], client.setName, client);
// console.log(client.fullName); // "Anna Ivanova"
// Давайте рассмотрим еще один вариант применения метода apply(), но без контекста this:

// let guests = ['Ivan', 'Pete', 'Milly', 'Anna']; // 
// function welcome() {
//   const args = Array.prototype.slice.call(arguments), (1)
//   let lastElem = args.pop(); (2)
//   console.log('Welcome ' + args.join(', ') + ', and ' + lastElem + '.'); (3)
// }
// welcome.apply(null, guests); // "Welcome Ivan, Pete, Milly, and Anna." (4)
// (1) Мы не знаем сколько аргументов может быть передано в нашу функцию, поэтому используем arguments. С помощью метода call() заимствуем метод массивов slice() и превращаем наш список аргументов в массив.

// (2) Записываем значение последнего элемента массива в переменную lastElem.

// (3) Мы можем применить метод join() к нашему массиву 'args', т.к. это уже не объект arguments, и преобразовать элементы массива в строку.

// (4) вместо контекста исполнения this мы передаем null.

// Подведем итог: методы call(), apply() работают идентично, подменяя контекст this на текущий объект. У нас нет необходимости создавать одинаковый метод для каждого объекта - мы создаем один метод (функцию) и используем его для всех объектов с помощью данных методов. Разница между методами: call() принимает аргументы в виде списка, а apply() в виде массивоподобного объекта или массива.

// Метод apply() позволяет использовать встроенные функции. Возьмем в качестве примера Math.max() и Math.min().

// Задание: Дан массив чисел 'nums'. Верните разницу между максимальным и минимальным значениями массива. В решении не допускается использование оператора расширения.

// const nums = [-1, 3, 5, 12, 8];
// let max = Math.max.apply(null, nums); // это эквивалентно Math.max(-1, 3, 5...)
// let min = Math.min.apply(null, nums)
// let res = max - min;
// console.log(res); // 13

//----------------------------------------------------

// Конспект
// Метод reduce() применяет переданную в него функцию один раз для каждого элемента в порядке возрастания и возвращает одно результирующее значение.

// Синтаксис: array.reduce(func(accumulator, currentValue[, index[, array]])[, initialValue]),

// где func – функция (обязательный параметр), которая содержит следующие параметры:

// обязательные: accumulator – это результат предыдущего вызова функции func, currentValue – текущий элемент массива;
// необязательные: index – индекс текущего элемента, array – массив, по которому осуществляется проход,
// initialValue – значение, используемое в качестве первого аргумента при вызове функции func.

// Если параметр initialValue задан, то значение accumulator будет равно ему, а currentValue – равно значению первого элемента массива.

// Если параметр initialValue отсутствует, то accumulator равен значению первого элемента массива, а currentValue – значению второго элемента.

// Работу метода проще всего понять на примере.

// Задание 1. Дан массив чисел arr. Вернуть сумму всех элементов массива, увеличенную на 100.

// const arr = [5, 20, 30, 55];
// let result = arr.reduce((acc, curr) => acc + curr, 100); // acc, curr - это сокращения для accumulator и currentValue
// console.log(result); // 210
// В задании 1 значение initialValue задано и равно 100. Порядок вычислений здесь выглядит так:

// initialValue  acc cur result
// 100 100 5 105
// 105 20  125
// 125 30  155
// 155 55  210
// На первом вызове функции func acc равен initialValue (100), curr – значению первого элемента массива (5), result – их сумме (105).

// На втором вызове функции значение result из первой строки таблицы становится новым значением для acc (105), curr становится равным значению 2-ого элемента массива (20), result – их сумме (125).

// На третьем вызове функции значение result из второй строки таблицы становится новым значением для acc (125), curr становится равным значению 3-его элемента массива (30), result – их сумме (155).

// На четвертом вызове функции func значение result из третьей строки таблицы становится новым значением для acc (155), curr становится равным значению 4-ого элемента массива (55), result – их сумме (210).

// Возвращенное методом reduce() результирующее значение равно 210.

// Задание 2. Дан массив чисел arr. Вернуть сумму всех элементов массива.

// const arr = [1, 2, 5, 8];
// let result = arr.reduce((acc, curr) => acc + curr); 
// console.log(result); // 16
// В данном примере значение initialValue отсутствует, и порядок вычислений выглядит так:

// acc cur result
// 1 2 3
// 3 5 8
// 8 8 16
// На первом вызове функции func acc равен значению первого элемента (1), curr – второго (2), result – их сумме (3).

// На втором вызове функции значение result из первой строки таблицы становится новым значением для acc (3), curr – становится равным значению 3-его элемента массива (5) и т.д.

// Возвращенное методом reduce() результирующее значение равно 16.

// С помощью метода reduce() можно совершать любые действия со всеми элементами массива.

// Задание 3. Дан массив чисел arr. Верните произведение всех чисел массива.

// const arr = [2, 5, 5, 100];
// let result = arr.reduce((acc, curr) => acc * curr, 1); 
// console.log(result); // 5000
// Обратите внимание на значение initialValue в Задании 3. Оно равно 1. Если бы мы указали его значение равным 0, то произведение всех элементов массива оказалось бы равным также 0.

// Лучше всегда указывать значение initialValue. Если метод reduce() вызван на пустом массиве и значение initialValue не задано, в результате мы увидим ошибку TypeError.

// const arr = [];
// let result = arr.reduce((acc, curr) => acc * curr);
// console.log(result); // TypeError

//---------------------------------------

// Конспект
// Метод forEach() выполняет переданную в него функцию один раз для каждого элемента в массиве. Проще говоря, работает, как цикл.

// Возвращаемое значение – undefined.

// Синтаксис: array.forEach(func(element[, index[, array]])[, thisArg]).

// Метод имеет следующие параметры:

// обязательный – функция (func), которая, в свою очередь, содержит обязательный параметр – элемент (element), и необязательные: индекс элемента (index) и массив (array), по которому осуществляется проход;
// необязательный thisArg – значение, используемое в качестве this при вызове функции func.
// Задание 1. Дан массив строк arr. Вывести в консоль каждый элемент массива отдельно.

// const arr = ['One', 'Two', 'Three', '!'];
// arr.forEach(el => console.log(el)); // "One"
// // "Two"
// // "Three"
// // "!"
// Задание 2. Дан массив строк arr. Вернуть новый массив строк и их длину, причем длину указать в виде массива рядом со строкой, к которой он относится.

// const arr = ['One', 'Two', 'Three', '!'];
// const newArr = [];
// arr.forEach(function(el) {
//   newArr.push(el, [el.length]);
// });
// console.log(newArr); // ["One", [3], "Two", [3], "Three", [5], "!", [1]]
// Обратите внимание! Цикл forEach() нельзя прервать или остановить.

//---------------------------

// Конспект
// Общее понятие наследования в JavaScript
// JavaScript является языком прототипного наследования. Все объекты в нем имеют свойство [[Prototype]], которое либо равно null, либо ссылается на другой объект (прототип). Это означает, что каждый объект имеет свой объект-прототип (шаблон, образец) и наследует от него свойства и методы. У каждого объекта может быть только один [[Prototype]].

// Не сам объект, а его свойство prototype функции-конструктора содержит свойства и методы, которые могут быть унаследованы. Свойство [[Prototype]] скрыто от нас. И если необходимо получить/задать значение [[Prototype]], мы используем __proto__.

// const animal = {
//   eats: true
// };
// const cat = {
//   jumps: true
// };

// cat.__proto__ = animal; // устанавливаем animal как прототип для cat

// console.log(cat.jumps); // true
// console.log(cat.eats); // true
// У нас есть два объекта animal и cat. Мы хотим, чтобы объект cat также имел свойство “eats”, и для того, чтобы не повторять свойство, мы “наследуем” его у другого объекта. Этим действием мы делаем animal прототипом для cat (или cat прототипно наследует от animal). Когда мы пытаемся прочитать свойство "cat.eats", а его нет в объекте cat, то JavaScript следует по ссылке [[Prototype]] и находит его в animal.

// Таким образом, JavaScript попытается найти свойство объекта или вызвать метод, которого не существует у конкретного объекта, в его прототипе.

// Встроенные прототипы
// Нам важно знать, что в JavaScript есть встроенные прототипы.

// Создадим пустой объект и выведем его значение в консоль.

// const object = {};
// console.log(object); // [object Object] { ... }
// Выводимое в консоль значение представлено в строковом виде. Но мы не использовали для преобразования никаких методов. Получается, что метод, на самом деле, есть, но скрыт от нас. Из пояснений к примеру "cat-animal", мы понимаем, что метод находится в прототипе объекта object и его значение мы можем получить через object.__proto__. Преобразование значения object в строковый вид было сделано методом toString(), который находится в прототипе. Для того, чтобы увидеть, что метод действительно есть в прототипе Object.prototype, найдите в браузере удобную для вас песочницу (например, JSBin), откройте консоль разработчика, введите код, указанный выше. В консоли разработчика в __proto__ вы увидите, какие свойства и методы содержит object (toString() в том числе).

// Осталось понять, откуда взялся __proto__ в новом объекте object.

// Запись object = {} – это краткая форма от object = new Object(), где Object – встроенная функция-конструктор для объектов. При выполнении new Object() для создаваемого объекта будет установлен __proto__ по prototype функции-конструктора, который в данном случае равен встроенному Object.prototype:

// console.log(object.__proto__ === Object.prototype); // true
// В дальнейшем при обращении к object.toString() функция будет взята из Object.prototype:

// console.log(object.__proto__.toString == Object.prototype.toString); // true
// Важно! По цепочке прототипов выше Object.prototype больше нет свойства [[Prototype]]. Объект Object.prototype находится над всеми другими встроенными прототипами, и он единственный, чье __proto__ равно null:

// console.log(Object.prototype.__proto__); // null
// Поэтому можно сказать, что "все объекты наследуют от Object", а если точнее, то от Object.prototype.

// В JavaScript кроме Object есть другие встроенные объекты, такие как Array, Date, Function, Number, String и другие, которые также хранят свои методы в прототипах.

// Давайте разберем на примере Array ,как наследуют свойства от Object.prototype встроенные объекты.

// const array = ['a', 'b', 'c'];
// console.log(array.__proto__ === Array.prototype); // true, 
// // array наследует методы массивов от Array.prototype
// console.log(array.__proto__.__proto__ === Object.prototype); // true, 
// // array наследует другие методы (не массивов) от Object.prototype
// При создании массива ['a', 'b', 'c'] внутренне используется конструктор массива Array (array = new Array()). Поэтому массивы имеют свой прототип Array.prototype и унаследуют от него только методы массивов. Если в Array.prototype и Object.prototype есть одинаковые методы (например, метод toString()), то для массивов будет использован тот, который по цепочке наследования ближе к array, т.е. от Array.prototype.

// Воспользуйтесь еще раз консолью разработчика в браузере и выведите в консоль значение array из кода выше и убедитесь в цепочке наследования прототипов (array -> Array.prototype -> Object.prototype) и в наличии у Array.prototype своего метода toString().

// Делаем выводы: сами объекты содержат только данные, а методы хранятся в их прототипах. Если есть методы с одинаковым названием, то будет унаследован тот, который ближе по цепочке наследования.

// Наследование для примитивных типов данных
// Выше описано, как происходит наследование у не примитивных типов данных. А как быть с примитивными типами данных, которые не являются объектами?

// undefined и null находятся в стороне от других объектов в JavaScript: они не имеют методов и, соответственно, прототипов.

// А вот number, boolean и string имеют временный объект-обертку, который проявляет себя в момент предоставления доступа к методам, а потом исчезает (встроенные конструкторы: Number, Boolean и String). Методы этих объектов находятся в прототипах Number.prototype, Boolean.prototype и String.prototype, соответственно (например, Number.prototype.toString(), String.prototype.split() и др.).

// В следующих уроках нашего курса вы будете знакомиться с различными методами встроенных объектов JavaScript и, встречая в названии метода “prototype”, будете понимать, какой смысл спрятан за ним.

//-----------------------------------------

// Конспект
// Бывают ситуации, когда необходимо представить свойства объекта или их значение в виде массива.

// Для этого можно воспользоваться следующими методами: Object.keys(object), Object.values(object) и Object.entries(object),

// где object – это объект, к которому метод применяется.

// Object.keys() – возвращает массив свойств объекта в порядке, аналогичном циклу for ... in.

// Object.values() – возвращает массив значений свойств объекта в порядке, аналогичном циклу for ... in.

// Object.entries() – возвращает массив значений свойств объекта в виде [key, value] в порядке, аналогичном циклу for ... in.

// Рассмотрим на примере объекта object работу этих методов.

// const object = {
//   name: 'Alice',
//   age: 20,
//   id: 'KUI-567_UIO',
//   1: 'unique',
// };

// console.log(Object.keys(object)); // ["1", "name", "age", "id"]
// console.log(Object.values(object)); // ["unique", "Alice", 20, "KUI-567_UIO"]
// console.log(Object.entries(object)); // [["1", "unique"], ["name", "Alice"], ["age", 20], ["id", "KUI-567_UIO"]]
// Еще раз обратите внимание на порядок возвращаемых значений: он аналогичен циклу for ... in, независимо от того, как расположены свойства в объекте.

// Мы знаем, что у массива есть множество методов, которые позволяют делать преобразования над ним. У объектов таких методов нет.

// Но! Если нам необходимо преобразовать объект, то мы сначала воспользуемся методом Object.entries(), применим необходимый метод массивов, а затем метод Object.fromEntries(array), где array – массив, полученный в результате применения метода Object.entries(). В итоге получим измененный объект.

// Рассмотрим такое преобразование на следующем примере.

// Задание. Дан объект items, содержащий наименование товара и его цену. Изменить цену товара, увеличив ее на 10 процентов. Вернуть значение нового объекта.

// const items = {
//   milk: 3,
//   bread: 4.5,
//   tomatoes: 1.9,
// };

// let arr = Object.entries(items);
// console.log(arr); // [["milk", 3], ["bread", 4.5], ["tomatoes", 1.9]], получаем массив свойств и значений объекта

// let newArr = arr.map(([key, value]) => [key, (value * 1.1).toFixed(2)]); // применяем метод map, чтобы увеличить цену товара
// console.log(newArr); // [["milk", "3.30"], ["bread", "4.95"], ["tomatoes", "2.09"]]

// const itemsNew = Object.fromEntries(newArr); // преобразуем массив в новый объект
// console.log(itemsNew); 
// // [object Object] {
// //   bread: "4.95",
// //   milk: "3.30",
// //   tomatoes: "2.09"
// // }

//---------------------------

// Конспект
// Метод reduce() применяет переданную в него функцию один раз для каждого элемента в порядке возрастания и возвращает одно результирующее значение.

// Синтаксис: array.reduce(func(accumulator, currentValue[, index[, array]])[, initialValue]),

// где func – функция (обязательный параметр), которая содержит следующие параметры:

// обязательные: accumulator – это результат предыдущего вызова функции func, currentValue – текущий элемент массива;
// необязательные: index – индекс текущего элемента, array – массив, по которому осуществляется проход,
// initialValue – значение, используемое в качестве первого аргумента при вызове функции func.

// Если параметр initialValue задан, то значение accumulator будет равно ему, а currentValue – равно значению первого элемента массива.

// Если параметр initialValue отсутствует, то accumulator равен значению первого элемента массива, а currentValue – значению второго элемента.

// Работу метода проще всего понять на примере.

// Задание 1. Дан массив чисел arr. Вернуть сумму всех элементов массива, увеличенную на 100.

// const arr = [5, 20, 30, 55];
// let result = arr.reduce((acc, curr) => acc + curr, 100); // acc, curr - это сокращения для accumulator и currentValue
// console.log(result); // 210

//-------------------------------------------

// Конспект
// Из предыдущих уроков вы уже знаете, что объект состоит из пар: ключ: значение (имя свойства: значение свойства).

// Получение значения свойства объекта возможно двумя способами:

// Точечная запись
// Синтаксис: objectName.propertyName,

// где objectName – имя объекта, а propertyName – имя свойства, значение которого мы хотим получить.

// const person = {
//   name: 'Joey',
//   age: 30,
//   "likes cats": true,
// };
// console.log(person.name); // "Joey"
// console.log(person.age); // 30
// console.log(person.likes cats); // SyntaxError
// Значение последнего ключа в объекте получить через точечную запись не удалось – "выброшена" синтаксическая ошибка. Все потому, что точечная запись требует для имен свойств в объекте такие же правила, как и для переменных: не допускается пробел, начало имени с цифр, специальных символов (кроме $, _ ). Для таких случаев, необходимо использовать скобочную запись.

// Скобочная запись
// Синтаксис: objectName['propertyName'/variableName],

// где objectName – имя объекта, propertyName – имя свойства, значение которого мы хотим получить, взято в кавычки '' (кавычки могут быть любыми), variableName – имя переменной, в которой хранится имя свойства.

// const person = {
//   name: 'Joey',
//   age: 30,
//   "likes cats": true,
// };
// console.log(person['name']); // "Joey"
// console.log(person['age']); // 30
// console.log(person['likes cats']); // true, здесь мы не получили ошибку
// Имя свойства объекта может храниться в переменной:

// let secretCode = 'password'; // присваиваем имя свойства 'password' в переменную secretCode
// person[secretCode] = '123'; // задаем значение для свойства 'password'
// console.log(person[secretCode]); // "123", получаем значение свойства через имя переменной
// А если мы выведем в консоль весь объект, то увидим ключ с именем 'password' и значением '123':

// console.log(person); 
//   // [object Object] {
//   // age: 30,
//   // likes cats: true,
//   // name: "Joey",
//   // password: "123"
//   // }
// Вариант, когда мы присваиваем имя свойства в переменную, очень часто может быть использован во время выполнения кода, когда мы заранее не знаем, какое именно значение будет задано для имени свойства:

// const obj = {}; // создаем пустой объект
// for(let i = 0; i < 3; i++){
//   obj[i] = i + ' property'; // имя и значение свойства задаются на каждом круге цикла
// }
// console.log(obj); 
// // [object Object] {
// // 0: "0 property",
// // 1: "1 property",
// // 2: "2 property"
// //}
// Запись через точку используется, когда мы знаем имя свойства и оно простое, в других случаях необходимо использовать скобочную запись.

// Все, что мы рассмотрели выше подходит к свойствам с данными. Мы уже знаем, что у каждого объекта есть, например, скрытое свойство [[Prototype]], которое содержит прототип объекта. Такое свойство называется внутренним. Сюда же относится и свойство extensible. Оно определяет, разрешено ли добавлять свойства к данному объекту, и по умолчанию имеет значение true. Для получения таких свойств существуют специальные методы: Object.getPrototypeOf() и Object.isExtensible().

// const obj = {};
// const employee = Object.create(obj); // установлен `__proto__` по _prototype_ функции-конструктора obj, 
// // который в данном случае равен встроенному Object.prototype
// console.log(Object.getPrototypeOf(employee) === obj); // true, прототипом employee является obj
// console.log(Object.isExtensible(employee)); // true, объект employee расширяемый

//--------------------------------------

// Метод split() разбивает строку на массив подстрок путём разделения строки указанным разделителем.

// Синтаксис: string.split([separator[, limit]]),

// где separator – разделитель, который может быть строкой или регулярным выражением, limit – ограничение на количество возвращаемых подстрок (используется редко). Оба параметра не являются обязательными.

// Возвращаемое значение – массив подстрок. При этом исходная строка остается неизменной.

// Рассмотрим на примерах, как работает данный метод.

// let str = '1I do, 2you do, 3they do'; 
// console.log(str.split('do')); 
// // ["1I ", ", 2you ", ", 3they ", ""], сам разделитель не включается в массив
// console.log(str.split(' ')); 
// // ["1I", "do,", "2you", "do,", "3they", "do"], в качестве разделителя указана пустая строка 
// console.log(str.split('o', 2)); 
// // ["1I d", ", 2y"], есть лимит на количество выводимых подстрок
// console.log(str.split('1')); 
// // ["", "I do, 2you do, 3they do"]
// console.log(str.split());
// // ["1I do, 2you do, 3they do"], массив содержит 1 элемент со всей строкой 
// console.log(str.split(/\d/)); 
// // ["", "I do, ", "you do, ", "they do"], /\d/ – регулярное выражение, которое заменяет символы от 0 до 9 включительно
// str = '01 2  3    4'; 
// console.log(str.split(/\s*/)); // ["0", "1", "2", "3", "4"], /\s*/ – регулярное выражение, которое означает "ноль или более" (*) пробелов (\s)
// // 
// Если разделитель представлен пустой строкой (''), то будет возвращен массив символов строки.

// str = 'year';
// console.log(str.split('')); // ["y", "e", "a", "r"]