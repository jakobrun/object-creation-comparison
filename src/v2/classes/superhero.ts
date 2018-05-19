export class Superhero {
    readonly name: string
    readonly maxPower: number
    health: number
    readonly agility: number
    constructor(
        name: string,
        maxPower: number,
        health: number,
        agility: number
    ) {
        this.name = name
        this.maxPower = maxPower
        this.health = health
        this.agility = agility
    }

    takeAHit(power: number) {
        this.health = this.health - power / this.agility
    }
    hit() {
        return Math.random() * this.maxPower
    }
    isAlive() {
        return this.health > 0
    }
}
