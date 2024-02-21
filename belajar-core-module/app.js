const fs = require('fs');
const { parse } = require('path');
const { stdout } = require('process');



//fs.writeFileSync('./teks.txt',"halo gess");

// fs.writeFile('teks.txt',"Halo nama saya Micko",(e)=>{
//     if(e) throw e;
//     console.log('data bisa dikirim');
// });

// const data = fs.readFile('teks.txt','utf-8',(e,data)=>{
//     if(e)console.log(e);
//     console.log(data);

// });

const readline = require('readline');
const { json } = require('stream/consumers');


const rl = readline.createInterface({ 
    input:process.stdin,
    output:process.stdout
 });

rl.question(`Siapa nama anda?\n`, (nama) => {
    rl.question('Berapa umur anda?\n',(umur)=>{
        // TODO: Log the answer in a database
        const data={nama, umur};

        const readFile= fs.readFileSync('data.json','utf-8');
        const datas = JSON.parse(readFile);
        datas.push(data);
        const writeData= JSON.stringify(datas);

        console.log(JSON.stringify(datas));

        fs.writeFileSync('data.json', writeData);

        
        console.log(`\nNama anda ${nama}, anda berumur ${umur} tahun.\n========\nTerima kasih atas responnya :)`);


        rl.close();
    });

});