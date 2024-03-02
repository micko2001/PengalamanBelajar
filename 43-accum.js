function accum (s){
    return s.split('')
    .map((a,i)=>{
        let arr=[]
       for(let j=0;j<i;j++){
        arr.push(a.toLowerCase());
       }
        
        return a.toUpperCase()+arr.join('');
    }).join('-');
}

console.log(accum('aRqaEzty'));