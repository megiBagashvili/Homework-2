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

function removeDuplicates(word) {
  let spellCheck = [];
  for (let i = 0; i < word.length; i++) {
    if (!spellCheck.includes(word[i])) {
      spellCheck.push(word[i]);
    }
  }
  return spellCheck.join('');
}
console.log(removeDuplicates('balloon'));
console.log(removeDuplicates('abudelauristbebi'));

//Task 4
function removeEmptySpaces(phrase){
  let result = '';
  for(let i = 0; i < phrase.length; i++){
    if(phrase[i] !== ' '){
      result += phrase[i];
    }
  }
  return result;
}

console.log(removeEmptySpaces('lorem ipsum ... oh I thought it worked here :('));

//Task 5
function reverseEachWord(sentence) {
  let wordsArr = sentence.split(' ');
  let reversedWordsArr = [];
  for (let i = 0; i < wordsArr.length; i++) {
    reversedWordsArr.push(wordsArr[i].split('').reverse().join(''));
  }
  return reversedWordsArr.join(' ');
}
console.log(reverseEachWord('olleH divaD'));


//Homework completed


//Lecture tasks below

//lecture exercise 1
function countOccurance(sentence, letter){
    let count = 0;
    for(let i=0; i < sentence.length; i++){
        if(sentence[i] === letter){
            count++;
        }
    
    }
    return count;
}
console.log(countOccurance('ajapsandali', 'a'));
console.log(countOccurance('dubidubidu', 'u'));


//lecture exercise 2
function checkPalindrome(word){
return word === word.split('').reverse().join('');
}
console.log(checkPalindrome('asdfdsa'));


//lecture exercise 3
function longestWord(sentence) {
    let wordsArr = sentence.split(' ');
    let longestWord = wordsArr[0];
    for (let i = 1; i < wordsArr.length; i++) {
        if (wordsArr[i].length > longestWord.length) {
            longestWord = wordsArr[i];
        }
    }

    return longestWord;
}
console.log(longestWord('Tetri tritina tetr trtvilze trtoda'));


//lecture exercise 4
function findSmallest(numArray){
    let smallestNum = numArray[0];
    for(let i=1; i < numArray.length; i++){
        if(numArray[i] < smallestNum){
            smallestNum = numArray[i];
        }
    }
    return smallestNum;
}
console.log(findSmallest([3859, 245, 9, 3333333]));

//lecture exercixe 5
function toOppositeCase(word){
    let complementedWord = '';
    for(let i = 0; i < word.length; i++){
        let char = word[i];
        if(char === char.toUpperCase()){complementedWord += char.toLowerCase();}
        else{complementedWord += char.toUpperCase();}
    }
    return complementedWord;
}
console.log(toOppositeCase('JaPaSanDaLi'));

//lecture exercise 6
function abbreviateName(name){
    let nameSliced = name.split(' ');
    let initials = [];
    for (let i = 0; i < nameSliced.length; i++){
        initials.push(nameSliced[i][0]);        
    }
    return initials.join('.');
}

console.log(abbreviateName('Albus Percival Wulfric Brian Dumbledore'));