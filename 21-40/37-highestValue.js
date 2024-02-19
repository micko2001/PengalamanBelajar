function descendingOrder(n){
    //...
    let arr=n.toString().split('').sort((a,b)=>b-a);
    console.log(arr)
    return parseInt(arr.map(Number).join(''));
  }

  console.log(descendingOrder(1532));