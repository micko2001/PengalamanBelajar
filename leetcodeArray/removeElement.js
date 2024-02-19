// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).


// var removeElement = function(nums, val) {
//     let k=[];
//     let attach=0;
//     for (let i =0;i<nums.length-1;i++){
//        for(let j=0 ; j<nums.length-i-1;j++){
//         if(nums[j]==val){
//             k[j]=nums[j+1];
//         }else{
//             k[j]=nums[j];
//         }
//        }  
//     }



//     return k;
// };

// console.log(removeElement([0,1,2,2,3,2,0,4,2],2));

function removeElement(nums, val) {
    let k = 0; // Counter for the new length

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // If the current element is not equal to the specified value
        if (nums[i] !== val) {
            // Move the non-matching element to the k-th position
            nums[k] = nums[i];
            k++; // Increment the counter
        }
    }

    return k; // The new length of the modified array
}

// Example usage:
const nums = [3, 2, 2, 3];
const val = 3;

const newLength = removeElement(nums, val);

console.log("New length:", newLength);
console.log("Modified array:", nums.slice(0, newLength));