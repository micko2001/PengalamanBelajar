let y=[0,1];

const recursion= function (x){
    
    if(x<=0)return y.join('_');
    console.log(x);
    let z= y[y.length-1]+y[y.length-2];
    y.push(z);
    console.log(y);
    return recursion(x-1);
}
console.log(recursion(8));