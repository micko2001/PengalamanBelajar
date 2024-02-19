// function dataType (type,...values){
//     return values.filter(x=>typeof(x)===type);
// }

// console.log(dataType('boolean',1,2,3,true, 'micko','halo', true, false));

const arr =[1,2,3,4,5,6];

const arr1=arr;
//arr1.push(12);

// console.log(arr);[1, 2, 3, 4, 5, 6, 12]

const arr2=[...arr]
arr2.push(12);

// console.log(arr);[1, 2, 3, 4, 5, 6]


