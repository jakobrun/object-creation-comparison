export interface ISuperhero {
    readonly name: string
    readonly maxPower: number
    health: number
    readonly agility: number
}

export const Superhero = {
    takeAHit: (hitPower: number, hero: ISuperhero): ISuperhero => {
        hero.health = hero.health - hitPower / hero.agility
        return hero
    },
    hit: (maxPower: number): number => Math.random() * maxPower,
    isAlive: (hero: ISuperhero): boolean => hero.health > 0,
}
