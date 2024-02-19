
function bouncingBall(h,  bounce,  window) {
    // your code here
    if(h<0||bounce<0||bounce>=1||window>h){
        return -1;
    }
   
    let seeBall =1;
    h=(h*bounce);
    while(h>window){
        h=(h*bounce);
        seeBall+=2;
        
    }
    
    return seeBall;
  }

  
  console.log(bouncingBall(30, 0.6666, 1.5));
