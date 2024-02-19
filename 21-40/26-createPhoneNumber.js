function createPhoneNumber(numbers){
    let frnt=[];
    let mid =[];
    let bck=[];
    for(let i=0; i<numbers.length;i++){
        if(i<3){
            frnt[i]= numbers[i];
        }else if(i<7){
            mid.push(numbers[i]);
        }else {
            bck.push(numbers[i]);
        }
    }
  return `(${frnt.join('')}) ${mid.join("")}-${bck.join('')}`
}

console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));