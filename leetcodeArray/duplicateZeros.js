var duplicateZeros = function(arr) {
    let arr1=[];
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==0){
            arr1[i+count]=arr[i];
            arr1[i+1+count]=arr[i];
            count++;
        }else if(count>0){
            arr1[i+count]=arr[i];
            arr1[i+count+1]=arr[i+1];
        }else{arr1[i]=arr[i];}
        
    }
    arr1.length=arr.length
    arr=arr1;
    return arr;
};

console.log(duplicateZeros([1,0,2,3,0,4,5,0]));
console.log([1,0,2,3,0,4,5,0]);