//there are 7 floors
//lift A at ground
//lift b at top floor

// let input = 6;

// if (input > 7 || input < 0) {
//   consol.log("Wrong Floor");
// } else if (input > 4) {
//   console.log("Lift B goes down");
// } else {
//   console.log("lift A Goes Up");
// }

// n is numbers
// x is changed by Kuy!

const funcKuy = (n, x) => {
  for (let i = 1; i < n + 1; i++) {
    if (i % x == 0) {
      console.log("Kuy! ");
    } else {
      console.log(i + " ");
    }
  }
};

funcKuy(10, 3);
