const squareNSum = (arr)=>{
    if(arr.length==0)return 0;
    return arr.map(num=>num*num).reduce((a,b)=>a+b);
}

console.log(squareNSum([]));