let arr = [1,3,2,10,6,4,7,9];

const arr2=arr.map(function(e){
    console.log(e);
    return e+2;
});
let numbers = [1, 2, 3, 4, 5];

let sum = 0;

numbers.forEach(function(number) {
  sum += number;
});

console.log("Sum of numbers:", sum);
// Output: Sum of numbers: 15

console.log(arr2.join("-"));


// let arr1=arr.sort();
// console.log(arr1);

arr.sort(function(a,b){
    return a-b;
})


console.log(arr);
arr.push(3);
let s=arr.filter(function(x){return x!=3;})
console.log(s);
console.log(arr);
let fd= arr.find(function(x){
    return x==3;
})
console.log(fd);

const newArr =[-9,2,4,1,5,6,-4,-7,3];

console.log(newArr.filter(e=>e>0));//output [ 2, 4, 1, 5, 6, 3 ]
let isi=0;
console.log([1,1,2].sort((a,b)=>a-b).filter((a,b,c)=>a!=c[b+1]));

const arr3=[1,3];
console.log(arr3.reduce(e=>e%2==0?true:false));