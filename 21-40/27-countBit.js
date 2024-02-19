const count = (num) =>{
    return num.toString(2).split('').map(x => x === '0' ? '' : x).join('').length;
}
console.log(count(8962459697));

arr='101010';
console.log(arr.split('').map(x => x === '0' ? '' : x).join(''));