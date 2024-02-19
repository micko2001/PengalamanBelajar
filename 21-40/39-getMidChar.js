const midChar=(char)=>{

    return char.length%2==0?`${char[(char.length/2)-1]}${char[(char.length/2)]}`:`${char[((char.length+1)/2)-1]}`;
}

console.log(midChar('ABCD'));