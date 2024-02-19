const animals =['Rabbit', 'Cow','Cat', 'Dog'];

for(let i=0;i<animals.length;i++){
    console.log(animals[i]);
}

console.log('\n====================\n');

animals.forEach(e=>console.log(e));

console.log('\n====================\n');

for(const m of animals){
    console.log(m);
}

console.log('\n====================\n');

for(const m of animals[0]){
    console.log(m);
}

console.log('\n====================\n');

for (const [i, m] of animals.entries()){
    console.log(`${m} adalah hewan ke ${i+1}`);
}

console.log('\n====================\n');

function sumNumbers(){
    let jumlah =0;
    for(a of arguments){
        jumlah +=a;
    }
    return jumlah;
}

console.log(sumNumbers(1,2,3,4,5,6));

//khusus objek looping harus pakai for in

const siswa ={
    nama:'nurul',
    umur:13,
    NISN:123455555
}

for(n in siswa){
    console.log(siswa[n]);
    console.log(n);
}