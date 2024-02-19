var validMountainArray = function(arr) {
    let peak =0;
    if(arr.length<3)return false;
    
     //cek decrecse true
     const decrease=(peak)=>{
        for(let i=arr.length-1;i>peak;i--){
            if(arr[i]>arr[i-1]&& i!=peak+1){
                return false;
            }else if(arr[i]==arr[i+1]){
                return false;
            }
              
        }console.log(arr);
        return true;
    }
    
    //cek increase true--> the peak is only 1 value
    const increase = ()=>{
        //tujuan mencari peak dan true
        for (let i=0;i<arr.length;i++){
            console.log(i);
            if(arr[i]<arr[i-1]){
                peak=i-1;
                if(peak==0)return false;
                console.log(peak);
                return decrease(peak);
            }else if(arr[i]==arr[i+1]){
                return false;
            }
            
        }return false;
        
    }
    
    return increase();
    
   
};

console.log(validMountainArray([8,7,6,5]));