function getCount(str) {
  let vw = str.toLowerCase();
  console.log(vw);
  let count=0;
  for(let i=0;i<vw.length;i++){
    if(vw.at(i)==="a"||vw.at(i)==="e"||vw.at(i)==='i'||vw.at(i)==='u'||vw.at(i)==='o'){
        count+=1;
    }
  }
  return count;
}
console.log(getCount("jklaaaa"));