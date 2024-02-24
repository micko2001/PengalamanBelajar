const prom = new Promise((resolve, reject)=>{
    const time= 5000;
    if(time<5000){
        setTimeout(()=>{
            resolve("selesai");
            
        },time);
    }else{
        reject('kelamaan');
    }
    
    
});

// prom.then(()=>console.log(prom))
//     .catch(()=>console.log(prom));

async function asinkron (){
    
    
    try{
        const coba = await prom;
        console.log(coba);
        
    }catch(err){
        console.log(err);

    }
}

asinkron();