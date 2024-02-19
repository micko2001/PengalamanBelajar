const highAndLow = (str) =>{
    let arr= str.split(' ')
        .map(e=>parseInt(e));

    const highest=arr.reduce((a,b)=>a<b?b:a) ;
    const lowest=arr.reduce((a,b)=>a>b?b:a) ;;

    return `${highest} ${lowest}`;
}

console.log(highAndLow("1 9 3 4 -5"));