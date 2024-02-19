var runningSum = function(nums) {
  return  nums.map((num,idx,arr)=>{
        for (let i=0;i<idx;i++){
            num=num+arr[i];
        }
        return num;
    })

}
console.log(runningSum([1,2,3,4]));
//output : [1,3,6,10]