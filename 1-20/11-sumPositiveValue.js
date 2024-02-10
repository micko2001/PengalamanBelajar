var positiveSum = function (arr){
    if(arr.length==0) return 0;
    if(arr[0] < 0){
        return positiveSum(arr.slice(1));
    }
    return arr[0]+ positiveSum(arr.slice(1));
}

console.log(positiveSum([0,6,0]));