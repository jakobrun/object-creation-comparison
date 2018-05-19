export interface ISuperheroOptions {
    readonly name: string
    readonly maxPower: number
    readonly health: number
    readonly agility: number
}
export interface ISuperhero extends ISuperheroOptions {
    takeAHit(power: number): ISuperhero
    hit(): number
    isAlive(): boolean
}
export const superhero = (options: ISuperheroOptions): ISuperhero => ({
    ...options,
    takeAHit: hitPower =>
        superhero({
            ...options,
            health: options.health - hitPower / options.agility,
        }),
    hit: () => Math.random() * options.maxPower,
    isAlive: () => options.health > 0,
})
