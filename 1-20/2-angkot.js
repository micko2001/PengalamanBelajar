let count=0;
let numbers_Angkot=10;

while (count < numbers_Angkot)
{

    if(count<4|| count==5){
        console.log(`Angkot No. ${count+1} beroperasi dengan baik.`);
    }
    else if(count == 4|| count==7||count==9){
        console.log(`Angkot No. ${count+1} beroperasi lembur.`);
    }
    else{
        console.log(`Angkot No. ${count+1} tidak beroprasi.`);
    }
        
    count+=1;

}