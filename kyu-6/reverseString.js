function reverse(strings){
    const arr= [...strings.split(' ')];
    for(const [i, m] of arr.entries()){
        if(m.length>4){
            arr[i]=m.split('').reduce((a,b)=>b+a);
        }
        
    }

    return arr.join(' ');
}

console.log(reverse("Just kidding there is still one more"));

//pemisah dan jadikan array
// menentukan kata yang lebih sama dengan 5
//
