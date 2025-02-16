// ? what does the function below return?
// Undefined because there's no explicit return statement
// eslint-disable-next-line no-unused-vars
function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
  console.log(num);
  return num;
}

// change the function above to return a value

// Early Return Pattern
// ! the console.log will not print
// eslint-disable-next-line no-unused-vars
function exampleEarlyReturnFunction() {
  // Check for a condition to be met and stop the execution of the function
  //   This condition is normally checking for invalid data or an error condition
  // eslint-disable-next-line no-constant-condition
  if (true) {
    // By checking for true this condition is always met
    return "Zap! - Early Return!";
  }
  console.log(
    "This will never print because it is after the early return statement."
  );
  return "We made it to the end!";
}

// ? will the following function early return?
let height = 50;
// eslint-disable-next-line no-unused-vars
function checkCircusRides() {
  if (height < 48) {
    return "Take a ride on the carousel!";
  }
  if (height < 60) {
    return "Try the bumper cars!";
  }
  return "Enjoy the roller coaster!";
}

// change the function above to exit as early as possible
