


class Card{
    constructor(name, cost){
        this.name = name
        this.cost = cost
    }
}


class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost)
        this.power = power
        this.res = res
    }

    showOppStats(target){
        console.log(target.name)
        console.log(target.power )
        console.log(target.res)

    }
    attack(target){
        target.res -= this.power
        this.showOppStats(target)
    }

}


class Effect extends Card {
    constructor(name, cost, stat, magnitude){
        super(name,cost)
        this.magnitude = magnitude
        this.stats = stat
    }

    get isNegative() {
        return this.magnitude < 0 ? "Lower" : "Raise"
    }

    get stat(){
        
        return this.stats == "power"?  "power" : "res"
    }


    play(target) {
        if(target instanceof Unit ){
        console.log(`${this.isNegative} the ${target.name} ${this.stats} by ${this.magnitude} ` )
        return this.isNegative == "Lower" ?
        target.stat -= this.magnitude :
        target.stat += this.magnitude
        } else {
            throw new Error('Target must be a Unit!!') 
        } 
    }
}

const red_ninja = new Unit("Red Belt Ninja", 3, 3, 4)
const hard_algo = new Effect("Hard Algorithm", 2, "res", 3)
hard_algo.play(red_ninja)
const black_ninja = new Unit("Black Belt Ninja", 4, 5, 4)
const rejection = new Effect("Unhandled Promise Rejection", 1, "res", -2)
rejection.play(red_ninja)
const pair_programming = new Effect("Pair Programming", 3, "power", 2)
pair_programming.play(red_ninja)
red_ninja.attack(black_ninja)



