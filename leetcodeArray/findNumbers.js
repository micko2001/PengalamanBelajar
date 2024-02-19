var findNumbers = function(nums) {
    let arr=[];
   
    console.log(nums)
    let count=0;
    for(let i=0;i<nums.length;i++){
      count=nums[i].toString().length%2==0?count+1:count;
    }
    return count;
};

console.log(findNumbers([11,12,444]));