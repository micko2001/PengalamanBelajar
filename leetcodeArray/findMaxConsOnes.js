var findMaxConsecutiveOnes = function(nums) {
    let arr=[0];
    let count =0;
    if(nums.length==1 && nums[0]==1)return 1;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1 ){
            ++count;
            console.log(count);
            arr.push(count);
        }else {
            count=0;
        }
    }
    count=arr[0];
    for(let i=0;i<arr.length;i++){
        count=count<arr[i]?arr[i]:count;

    }
  return count;  
};

console.log(findMaxConsecutiveOnes([1,1,1,1]));