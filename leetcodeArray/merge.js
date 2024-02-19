var merge = function(nums1, m, nums2, n) {
    let count=0;
    for(let i=0;i<m+n;i++){
        if(m==0){
            nums1[i]=nums2[i];
        }else if(nums1[i]==0 && i>=m ){
            nums1[i]=nums2[count];
            count ++;
        }
        
    }

    nums1=nums1.sort((a,b)=>a-b);

    
   
   
    
    
    

    //
    return nums1;
};

console.log(merge([1,2,3,4,5,0],5,[3],1));

//chaat gpt solution

// function merge(nums1, m, nums2, n) {
//     let i = m - 1; // Pointer for nums1
//     let j = n - 1; // Pointer for nums2
//     let k = m + n - 1; // Index for the merged array

//     // Merge arrays from the end
//     while (i >= 0 && j >= 0) {
//         if (nums1[i] > nums2[j]) {
//             nums1[k] = nums1[i];
//             i--;
//         } else {
//             nums1[k] = nums2[j];
//             j--;
//         }
//         k--;
//     }

//     // If there are remaining elements in nums2, copy them to nums1
//     while (j >= 0) {
//         nums1[k] = nums2[j];
//         j--;
//         k--;
//     }
// }

// // Example usage:
// const nums1_1 = [1, 2, 3, 0, 0, 0];
// const m1 = 3;
// const nums2_1 = [2, 5, 6];
// const n1 = 3;

// merge(nums1_1, m1, nums2_1, n1);
// console.log("Merged array:", nums1_1);

// const nums1_2 = [0];
// const m2 = 0;
// const nums2_2 = [1];
// const n2 = 1;

// merge(nums1_2, m2, nums2_2, n2);
// console.log("Merged array:", nums1_2);
