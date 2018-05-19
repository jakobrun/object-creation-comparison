import { ISuperhero, Superhero } from './superhero'
const round = (superheroes: ISuperhero[]) => {
    const heroesAlive = superheroes.filter(Superhero.isAlive)
    return superheroes.map(hero => {
        if (Superhero.isAlive(hero)) {
            return heroesAlive
                .filter(hero2 => hero2 !== hero)
                .reduce(
                    (hero1, hero2) =>
                        Superhero.takeAHit(
                            Superhero.hit(hero2.maxPower),
                            hero1
                        ),
                    hero
                )
        }
        return hero
    })
}
export const fight = (superheroes: ISuperhero[]) => {
    let state = superheroes
    while (state.filter(Superhero.isAlive).length > 1) {
        state = round(state)
    }
    return state
}
