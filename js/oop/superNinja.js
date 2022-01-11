class Ninja{
    constructor(name){
        this.name = name
        this.health = 100
        this.speed = 3
        this.strength = 3
    }

    sayName() {
        console.log(this.name)
        return this
    }

    showStats() {
        this.sayName()
        console.log(`health: ${this.health}`)
        console.log(`speed: ${this.speed}`)
        console.log(`strength: ${this.strength}`)
        return this
    }

    drinkShake(){
        console.log(`${this.name} drank shake!`)
        return this.health > 90 ?
            this.health = 100 : this.health += 10
        }
    
}


class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.health = 210
        this.speed = 10
        this.strength = 10
    }

    speakWisdom() {
        console.log(`${this.name} says "What one programmer can do in one month, two programmers can do in two months." `)
    }

    drinkShake(){
        console.log(`${this.name} drank shake!`)
        return this.health > 200 ?
            this.health = 210 : this.health += 10
        }
}



// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.drinkShake();
// ninja1.showStats();

const superSensei = new Sensei("Master Ninja")
superSensei.speakWisdom();
superSensei.drinkShake();
superSensei.sayName();
superSensei.showStats();
