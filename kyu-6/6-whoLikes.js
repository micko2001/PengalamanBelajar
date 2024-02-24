function wordLikes(names){
    const likeThis = 'like this';
    const likesThis= 'likes this';
    if(names.length==0){
        return `no one ${likesThis}`;
    }else if(names.length==1){
        return `${names[0]} ${likesThis}`;
    }else if(names.length==2){
        return `${names[0]} and ${names[1]} ${likeThis}`;
    }else if(names.length==3){
        return `${names[0]}, ${names[1]} and ${names[2]} ${likeThis}`;
    }else{
        return `${names[0]}, ${names[1]} and ${names.length-2} others ${likeThis}`;
    }
}

console.log(wordLikes(['micko','jaya']));
console.log(wordLikes(['micko']));
console.log(wordLikes([]));
console.log(wordLikes(['micko','jaya', 'jonan', 'aja','g','h']))