let arr = [1,3,2,10,6,4,7,9];

const arr2=arr.map(function(e){
    console.log(e);
    return e+2;
});
console.log(arr2.join("-"));
if(arr2.forEach == 2){
    console.log("d");
}

// let arr1=arr.sort();
// console.log(arr1);

arr.sort(function(a,b){
    return a-b;
})


console.log(arr);
arr.push(3);
let s=arr.filter(function(x){
    return x==3;
})
let fd= arr.find(function(x){
    return x==3;
})
console.log(s);
console.log(fd);