import { ISuperhero } from './superhero'
export interface IFight {
    superheroes: ISuperhero[]
    start: () => void
}
export const fight = (superheroes: ISuperhero[]): IFight => {
    const round = () => {
        const heroesAlive = instance.superheroes.filter(hero => hero.isAlive())
        instance.superheroes = instance.superheroes.map(hero => {
            if (hero.isAlive()) {
                return heroesAlive
                    .filter(hero2 => hero !== hero2)
                    .reduce((hero1, hero2) => hero1.takeAHit(hero2.hit()), hero)
            }
            return hero
        })
    }
    const instance = {
        superheroes,
        start: () => {
            while (
                instance.superheroes.filter(hero => hero.isAlive()).length > 1
            ) {
                round()
            }
        },
    }
    return instance
}
