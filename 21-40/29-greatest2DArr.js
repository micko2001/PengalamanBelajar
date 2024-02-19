

var maximumWealth = function(accounts) {
    let arr=[];

    for (let i=0;i<accounts.length;i++){
       arr[i]= accounts[i].reduce((a,b)=>a+b);
        console.log(arr[i]);
    }
    console.log(arr.reduce((a,b)=>b>a?b:a));
    
    return arr.reduce((a,b)=>b>a?b:a);
};

console.log(maximumWealth([[2,8,7],[7,1,3],[1,9,5]]));