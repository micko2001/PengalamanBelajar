const sumSingleNumbers = (arr) =>{
    let newArr=[];
    
    for(let i=0;i<arr.length;i++){
        let index=0;
        for(let j=0;j<arr.length;j++){
            if(arr[i]==arr[j]){
                index++;
            }
        }
        if(index==1){
            newArr.push(arr[i]);
        }
    }
    return newArr.reduce((a,b)=>{return a+b})
    
}


console.log(sumSingleNumbers([1,2,3,3,3,5,6,6]));