//Task 1 (also a lecture exercise)
function abbreviateName(name){
    let nameSliced = name.split(' ');
    let initials = [];
    for (let i = 0; i < nameSliced.length; i++){
        initials.push(nameSliced[i][0]);        
    }
    return initials.join('.');
}

console.log(abbreviateName('Albus Percival Wulfric Brian Dumbledore'));

//Task 2

function calculateDigitSum(number) {
  let numbersArr = [];
  let numString = number.toString();
  let finalResult = 0;

  for (let i = 0; i < numString.length; i++) {
    numbersArr.push(Number(numString[i]));
  }
  for (let i = 0; i < numbersArr.length; i++) {
    finalResult += numbersArr[i];
  }

  return finalResult;
}

console.log(calculateDigitSum(15243));

//Task 3
//Task 4
//Task 5
//Task 6    
//Task 7
//Task 8
//Task 9