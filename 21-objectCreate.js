//function declaration

const makan = {
    nasi:function(){
        console.log('kenyang!!!');
    },
    daging:function(){
        console.log("Protein!!!");
    }

}

function Mahasiswa(nama,umur) {
    let Mahasiswa=Object.create(makan);
    Mahasiswa.nama=nama;
    Mahasiswa.umur=umur;
    return Mahasiswa;
}

let mhs1=new Mahasiswa("Micko",20);
console.log(mhs1.nasi());