const daftarNama = ['Micko Wijayanto', 'Wijayanto Micko'];

console.log(daftarNama.map(nama=>({nama,char:nama.length})));


let arr=[1,2,3,-1,-3,6,7];

console.log(arr.reduce((a,b)=> a<b?a:b));

//arrow function tidak ada konsep this untuk oop namun ada beberapa proble yang memerlukan konsep arrow function

const Mahasiswa = function (){
    this.nama= 'Micko';
    this.umur = 23;
    this.sayHalo = function (){//pada function ini tidak bisa menggunakan arrow karena this akan tidak terbaca
        console.log(`Halo semua, saya ${this.nama}`);
    }
}
const micko = new Mahasiswa();
setInterval(function(){
    console.log(micko.umur);
},500);
