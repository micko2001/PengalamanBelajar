//object literal

let mhs1={
    nama:"Micko",
    NIM:1234,
    Asal:'Kediri'
}

console.log(mhs1);


//object function declaration

const mahasiswa = (nama,NIM,Asal) =>{
    let mhs ={};
    mhs.nama = nama;
    mhs.NIM = NIM;
    mhs.Asal = Asal;
    return mhs;
}

console.log(mahasiswa('Wijayanto',3241,'Madiun'));

//object constructor
//penulisan function tidak bisa pakai model =>, harus seperti di bawah ini
function Mahasiswa (nama, NIM, Asal){
    this.nama=nama;
    this.NIM=NIM;
    this.Asal=Asal;

}



let mhs3=new Mahasiswa('Micko',123,'Kediri');
console.log(mhs3);


//latihan angkot

function Angkot (sopir, trayek,kas,penumpang){
    //properties
    this.sopir=sopir;
    this.trayek=trayek;
    this.kas=kas;
    this.penumpang=penumpang;
    //method
    this.penumpangNaik=function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }
    this.penumpangTurun=function(namaPenumpang){
        if(this.penumpang.length==0){
            return 'angkot masih kosong';
        }else if(this.penumpang.find(function(x){return x==namaPenumpang;})!=namaPenumpang) 
        {   
            return `nama ${namaPenumpang} tidak ada`;
        }else{
            this.penumpang = this.penumpang.filter(function(x){
            return x != namaPenumpang;
            });
            this.kas+=5000;
            return this.penumpang;
        }
        
    }
}
//declaration instance
let angkot1= new Angkot("Micko",['ladungsari','arjosari'],0,[]);
let angkot2 = new Angkot("Wijaya",['ladungsari','gadang'],0,[]);

console.log(angkot1);
console.log(angkot2);

angkot1.penumpangNaik('arjuna');
console.log(angkot1.penumpang);
angkot1.penumpangNaik('widi');
console.log(angkot1.penumpang);
angkot1.penumpangTurun('arjuna');
console.log(angkot1.penumpang);
console.log(angkot1.kas);

