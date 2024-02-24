function countSheeps(sheep) {
    // TODO
    return sheep.filter(e=>e==true).length;
  }

  console.log(countSheeps([true,
    true,true,false,true,true,true,true,true,false,true,false,
    true,false,false,true,true,true,true,true,false,false,true,true]));

    console.log(countSheeps([undefined,null,false,true]));