// function grow(x){
//     let result=1;
//     for(i=0;i<x.length;i++)
//     {
//         result*=x[i];
//     }
//     return result;
// }

function grow(x)
{
    const result = x.reduce((acc,curr)=>acc*curr);

    return result;
}
console.log(grow([2,3,4]));