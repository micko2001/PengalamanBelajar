class Ship{
    constructor(draft,crew){
        this.draft=draft;
        this.crew=crew;
    }

    isWorthIt(){
       return this.draft-(this.crew*1.5)>20 ? true:false;
    }

}

let kurcas = new Ship(40,3);
console.log(kurcas.isWorthIt());

let titanic = new Ship(15,10);
console.log(titanic.isWorthIt());