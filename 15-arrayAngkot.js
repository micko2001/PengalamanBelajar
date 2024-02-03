let angkot=[];

const delPassangers=function (penumpang){
    for(let i=0; i<angkot.length;i++){
        if(penumpang==angkot[i]){
            angkot[i]=undefined;
            return angkot;
        }
    }
    return `tidak ada nama ${penumpang}`;
}

//menambah saat ada isi
const addPassangers = function(penumpang){

    if(angkot.length===0){
        angkot.push(penumpang);
        console.log(angkot);
        return angkot;  
    }
    for(let i=0; i<angkot.length;i++){
        if(angkot[i]==undefined){
            angkot[i]= penumpang;
            return angkot;
        }else if(angkot[i]==penumpang){
            return `nama ${penumpang} sudah ada di posisi - ${[i+1]}`
        }
        }
        angkot.push(penumpang);
        return angkot;
}


console.log(addPassangers('adi'));
console.log(delPassangers('adi'));
console.log(addPassangers('doni'));
addPassangers('Joni');
addPassangers('Ijat');
delPassangers('Joni');
addPassangers('roni');
console.log(delPassangers('fitri'));
console.log(angkot);
