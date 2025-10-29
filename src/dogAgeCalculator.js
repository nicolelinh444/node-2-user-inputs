// declared variables for dog name and age
let dogName = process.argv[2];
let dogAge = Number(process.argv[3]);

// used if else statement 
// if dog is one years old
if (dogAge === 1) {
    console.log(`Your dog, ${dogName}, is ${dogAge} years old, but that's 15 years old in dog years!`);
    // if dog is 2 years old
  } else if (dogAge === 2) {
    console.log(`Your dog ${dogName}, is ${dogAge} years old, but that's 24 years old in dog years!`);
    // if dog is more than 2 years old
  } else if (dogAge > 2) {
    console.log(`Your dog ${dogName}, is ${dogAge} years old, but that's ${(dogAge - 2) * 5 + 24} years old in dog years!`);
    // if else, error message
  } else {
    console.log("Please enter a number for the dog's age.");
  }

  // I think it's best to leave the decimals as is rather than round up or down. If the user submitted their dog's age as 7.5 years old, the half year is likely important to them and I don't think they would want the answer to be rounded up or down.