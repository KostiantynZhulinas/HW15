function isPalindrome(number) {
    const reverseNumber = parseInt(number.toString().split('').reverse().join(''));
    return number === reverseNumber;
  }
  
  function findPalindrome(inputNumber) {
    let steps = 0;
    let currentNumber = inputNumber;
  
    while (steps < 1000) {
      steps++;
      const reverseNumber = parseInt(currentNumber.toString().split('').reverse().join(''));
      const sum = currentNumber + reverseNumber;
  
      if (isPalindrome(sum)) {
        return { result: sum, steps: steps };
      }
  
      currentNumber = sum;
    }
  
    return { result: null, steps: steps };
  }
  
  const inputNumber = 196;
  const result = findPalindrome(inputNumber);
  console.log(`Input Number: ${inputNumber}`);
  if (result.result) {
    console.log(`Palindrome Found: ${result.result}`);
    console.log(`Steps: ${result.steps}`);
  } else {
    console.log(`No Palindrome Found in 1000 steps.`);
  }
  