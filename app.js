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