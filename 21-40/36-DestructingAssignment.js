const arr = ['lima','empat'];

const [a,b] =arr;

console.log(a);
console.log(b);

//swap item

let c=3;
let d=90;

[d,c]=[c,d];

console.log(d);


//return value pada function

const [f,...e]=[1,2,3,4,5,6];

console.log(f);

//destructing object 

// const mhs={
//     nama: 'Micko Wijayanto',
//     umur : 23
// }

// const {nama,umur}=mhs;
// console.log(nama);

// ({nama, umur}={
//     nama: 'Micko Wijayanto',
//     umur : 23
// });

// console.log(nama+" "+umur+" tahun");

//assign ke variable baru

// const mhs={
//     nama: 'Micko Wijayanto',
//     umur : 23
// }

// const {nama:jeneng,umur:umor}=mhs;
// console.log(jeneng);

//memberi default value

// const mhs={
//     nama: 'Micko Wijayanto',
//     umur : 23,
//     email:'Micko@ubac.id'
// }

// const {nama:jeneng,umur:umor,email='Micko@gmail.com'}=mhs;
// console.log(email);

//mengambil field pada object

const mhs={
    nama: 'Micko Wijayanto',
    umur : 23,
    email:'Micko@ubac.id',
    nilai:{
        UAS:90,
        UTS: 80,
        Tugas:85
    }
}

function getEmailMhs ({email}){
    return email;
}

console.log(getEmailMhs(mhs));

const annmntMhs =({nama,umur,email,nilai:{UAS,UTS,Tugas}})=>{
       return ` Halo ${nama} yang berusia ${umur} tahun,
                dengan email ${email}
                nilai rata-rata anda adalah ${(UAS+UTS+Tugas)/3}`;
}

console.log(annmntMhs(mhs));