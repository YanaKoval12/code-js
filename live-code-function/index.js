function getSenseOfLife(){
    return 42;
}
const res = getSenseOfLife();
console.log(res);

console.log(getSenseOfLife());
//.....
function getSquared(num){
    return num * num;
}
getSquared(10);

function getSum (numOne, numTwo){
    return numOne + numTwo;
}

console.log(getSum(2, 8));
//.......

function printMassege(numAge){
    return `I am ${numAge} years old`;
}
console.log(printMassege(17));

//.....
function getSum (from, to){
    let result = 0;

    for(let index = to; index < from; index++){
        result += index;
    }
    return result;
}
console.log(getSum(5, 7));
console.log(getSum(-5, 5));

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
    return(getSum (firstFrom, firstTo) > getSum(secondFrom, secondTo));
  }
  //....
  function mult(firstNum, secondNum ){
      firstNum * secondNum;
  }

  console.log(mult(8, 5));
  console.log(mult(8, -6));
  console.log(mult(-2, 5));
  console.log(mult(8, '3'));

//....

const getSquaredArrow = (num) => num * num;

//...
const getMagicNumber = () => 17;

console.log(getMagicNumber(7));
console.log(getMagicNumber());
