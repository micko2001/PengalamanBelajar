const fs = require('fs');
const readline =require('readline');
const {stdin : input, stdout:output}= require ('process');

const rl = readline.createInterface({input, output});

if(!fs.existsSync('./data')){
    fs.mkdirSync('data');  
}

if(!fs.existsSync('./data/contacs.json')){
    fs.writeFileSync('./data/contacs.json',"[]");
}

const pertanyaan=(tanya)=>{
    return new Promise ((resolve,rejects)=>{
        rl.question(tanya, (data)=>{
            resolve(data);
        });
    });
}

const writeContac=(nama,noHp,email)=>{
    const cntcData ={nama,noHp,email};
    const readData = fs.readFileSync('./data/contacs.json','utf8');
    const dataJson= JSON.parse(readData);
    dataJson.push(cntcData);
    const dataStr=JSON.stringify(dataJson);

    fs.writeFileSync('./data/contacs.json',dataStr);
    rl.close();
    console.log(dataStr)
}

module.exports={pertanyaan, writeContac};


// rl.question('Nama anda : ',(nama)=>{
//     rl.question('Nomor Handphone anda : ',(noHp)=>{

//         const cntcData ={nama,noHp};
//         const readData = fs.readFileSync('./data/contacs.json','utf8');
//         const dataJson= JSON.parse(readData);
//         dataJson.push(cntcData);
//         const dataStr=JSON.stringify(dataJson);

//         fs.writeFileSync('./data/contacs.json',dataStr);
//         console.log(dataStr);
        
    
//         rl.close();
//     });
// });