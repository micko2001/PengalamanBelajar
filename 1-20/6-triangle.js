let row = 4;
let data= row+(row-1);//pasti ganjil
let s='';
let mid=(data+1)/2;

for (let i=0;i<row;i++)
{
    for(let j=0 ; j<data+1;j++){
        if(mid-i<=j &&j<=mid+i ){
            s+="*";
        }else{
            s+=" "; 
        }
    }
    s+="\n"; 
}
console.log(s);