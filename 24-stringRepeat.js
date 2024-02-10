function repeatStr (n, s) {
    if(n>0)return s;
    return s+repeatStr(n-1,s);
  }

  console.log(repeatStr(5,"halo-"))