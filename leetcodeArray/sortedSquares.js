var sortedSquares = function(nums) {
    nums=nums.map(n=>n*n);
    nums=nums.sort((a,b)=>a-b);
    return nums;
};

console.log(sortedSquares([-7,-3,2,3,11]));