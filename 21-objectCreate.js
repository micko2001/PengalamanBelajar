//function declaration
//(-)harus mengelola 2 object, sehingga apabila ada revisi di salah satu object, object lain harus direvisi
// const makan = {
//     nasi:function(){
//         console.log('kenyang!!!');
//     },
//     daging:function(){
//         console.log("Protein!!!");
//     }

// }

// function Mahasiswa(nama,umur) {
//     let Mahasiswa=Object.create(makan);
//     Mahasiswa.nama=nama;
//     Mahasiswa.umur=umur;
//     return Mahasiswa;
// }

// let mhs1=new Mahasiswa("Micko",20);
// console.log(mhs1.nasi());


// Menggunakan prototyping constructor
function kelinci (warna,energi) {
    this.warna = warna;
    this.energi=energi;
}

kelinci.prototype.lari = function(){
    this.energi+=10;
    console.log(`Kelinci warna ${this.warna} lari`);
}

let kiko = new kelinci('Hitam',20);

console.log(kiko.lari());
console.log(kiko.energi);

//menggunakan class version

class Kucing{
    constructor(warna,energi){
        this.warna=warna;
        this.energi=energi;
    }
    main(jam){
        this.energi-=jam;
        console.log(`Kucing warna ${this.warna} sedang bermain!!!`);
    }
}

let koko = new Kucing('Orange',20);

console.log(koko.main(1));
console.log(koko.energi);