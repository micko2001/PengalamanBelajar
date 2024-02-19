//function factory
function ucapkanSelamat(waktu) {
    return function (nama){
        console.log(`Selamat ${waktu} ${nama}, Semoga hari mu menyenangkan!!!`);
    }
}

let selamatPagi = ucapkanSelamat('Pagi');
let selamatMalam = ucapkanSelamat('Malam');
let selamatSiang = ucapkanSelamat('Siang');

console.log(selamatPagi('Micko'));

console.log(selamatSiang('Wijayanto'));

console.log('\n=========================\n')
//private function

function tambahAngka(){
    let start=0;
    return function (){
       return ++start;
    }
}
//sehingga apabila ada global declare start, maka tidak akan mempengaruhi function
let add = tambahAngka();
console.log(add());
console.log(add());
console.log(add());

//private function with immediately 
console.log('\n=========================\n')

const kurang =(function kurangAngka(){
    let end=10;
    return function (){
        return --end;
    }
})();

console.log(kurang());
console.log(kurang());
console.log(kurang());