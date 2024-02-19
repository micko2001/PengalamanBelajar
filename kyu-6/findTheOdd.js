function findOdd(A) {
    //happy coding!
    const arr = [...A].sort((a,b)=>a-b);
    console.log(arr);
    //function for counting every number


    function count(arr){
        let count=1;
        for(let i=0; i<arr.length;i++){
            if(arr[i]!=arr[i+1]){
                if(count%2==1){
                    console.log(count)
                    return arr[i];
                }
                count=0;
            }
            count++;
        }
    }

    return count(arr);
  }

  console.log(findOdd([1,2,3,4,5,1,2,1,1]));