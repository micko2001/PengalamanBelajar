const reverseString = function (tx) {
   if(0==tx.length)return [].join('');
   let y= tx[tx.length-1];
   console.log(y);
   return [y].concat(reverseString(tx.slice(0, -1))).join('');
};

console.log(reverseString('dsb'));