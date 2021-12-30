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






const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkShake();
ninja1.showStats();
