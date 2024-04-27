// function solve([a, b]) {
//   console.log(a);
//   console.log(b);
// }

// solve([1, 2]);

// print square of stars

function solve([n]) {
  //print row
  for (let i = 0; i < n; i++) {
    //print column
    let star = "";
    for (let j = 0; j < n; j++) {
      //check row conditon
      if (i + 1 != n && i != 0) {
        //check column
        if (j + 1 != n && j != 0) {
          star += " ";
        } else {
          star += "*";
        }
      } else {
        star += "*";
      }
    }
    console.log(star);
  }
}

//solve([3]);
// solve([4]);
solve([5]);
