let start=true;
while(start){
    let p = prompt("Kita akan bermain tebak angka dengan komputer\nSilakan pilih angka dari 1-10\nAnda memiliki 4 kesempatan untuk menjawab");
    let comp = parseInt(1+(Math.random()*10));

    let result='';
    let i=0;
    while(i<4){
        if(p<1 || p > 10){
            result="Angka yang dimasukkan tidak masuk jangkauan\nAnda masih memiliki"+(3-i)+"kesempatan lagi";
            p=prompt(result);
        }else if(p==comp){
            result='Tebakan BENAR!!!';
            alert(result);
            i=4;
        }else{
            result = (p>comp)?"Angka terlalu TINGGI\nAnda masih memiliki"+(3-i)+"kesempatan lagi":"Angka terlalu RENDAH\nAnda masih memiliki"+(3-i)+"kesempatan lagi";
            p=prompt(result);
        }
    i++;       
    }
    start=confirm("Apakah mau main lagi?");
}



