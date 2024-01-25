class Cat {
    constructor(name){
        this.name = name
       
    }
      
    
    AnimalDetCat(){
        console.log(`${this.name} is a cat`);
    }
    
}

class Tiger extends Cat{
    constructor(name,legs,type,sound){
        super(name)
        this.legs = legs
        this.type = type
        this.sound = sound
    }

    AnimalDetTig(){
        console.log(`${this.name} is a ${this.type} animal with ${this.legs} legs and ${this.sound}`);
    }
}

const worker = new Tiger("Leo","4","wild","growls")

worker.AnimalDetTig()  // Leo is a wild animal with 4 legs and growls 