export class Superhero {
    name: string
    energy: number
    constructor(name: string, energy: number) {
        this.name = name
        this.energy = energy
    }
    useEnergy(usedEnergy: number) {
        this.energy = this.energy - usedEnergy
    }
}
