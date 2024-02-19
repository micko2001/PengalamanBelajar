// //synchronous callback
// function tampilNama(callback){
//     const nama ="Micko Wijayanto";


//     return callback(nama);
// }

// const halo= (nama) =>{
//     console.log(`Halo ${nama} !!!`);
// }

// tampilNama(nama=> console.log(`halo ${nama}`));
// //halo Micko Wijayanto

// tampilNama(halo);

//Asynchronous callback

// function getDataMhs (url, succes, error){
//     let chr= new XMLHttpRequest();

//     chr.onreadystatechange = function(){
//         if (chr.readyState===4){
//             if(chr.status===200){
//                 succes(chr.response);
//             }else if(chr.status===404){
//                 error();
//             }
//         }
//     }
//     chr.open ('get',url);
//     chr.send();
// }

// function succes (result){
//   //  console.log(JSON.parse(result));//json parse agar menjadi objek yang sesuai 
//   const mhs = JSON.parse(result);
//     //console.log(mhs.mahasiswa[0].nama);
//     mhs.mahasiswa.forEach(e=>console.log(e.nama));
// }

// function error (){

// }

// console.log('MULAI');

// getDataMhs('data/mahasiswa.json', succes ,error);

// console.log('Selesai');
console.log('MULAI');
$.ajax ({
    url:'data/mahasiswa.json',
    success:(mhs)=>{
        mhs.mahasiswa.forEach(e=>
            console.log(e.nama))
    },
    error:(e)=>{
        console.log(e.responseText);
    }
});
console.log('Selesai');