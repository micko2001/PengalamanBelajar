const digit = (num) =>{
    let arr= num.toString();
    let k=[];
    for(let i =0;i<arr.length;i++){
        k[i]=arr[i]*arr[i];
    }
    let j=parseInt(arr[arr.length-1]);
    return parseInt(k.join(''));
} 

console.log(digit(22));