function generatePascalTriangle(row) {
    let pascalTriangle = [];
    let s='';
    for (let i = 0; i < row; i++) {
        pascalTriangle [i]= []
        for (let k=0; k < row-i;k++){
            s+=' ';
        }
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                pascalTriangle[i][j] = 1;
                s+='1 ';
            } else {
                pascalTriangle[i][j] = pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
                s+=pascalTriangle[i][j]+' ';
            }
        }
        s+='\n';
    }
    console.log(s);
    return pascalTriangle;
}


let row = 5;
let pascalTriangle = generatePascalTriangle(row);
