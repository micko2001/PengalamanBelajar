// function solution(number){
//     let arr=0;
//     for(let i=0;i<10;i++){

//         if(i%3===0||i%5===0){
//             arr+=i;
//             console.log(i)
//         }
//     }
//     return arr;
// }

function solution(number){
    if(number==0) return number;
    console.log(number);
    return (number%3===0||number%5===0)? number+solution(number-1):solution(number-1);
}


console.log(solution(10));