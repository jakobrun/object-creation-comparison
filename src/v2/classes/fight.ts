import { Superhero } from './superhero'
export class Fight {
    readonly superheroes: Superhero[]
    constructor(superheroes: Superhero[]) {
        this.superheroes = superheroes
    }
    private round() {
        const heroesAlive = this.superheroes.filter(hero => hero.isAlive())
        this.superheroes.map(hero => {
            if (hero.isAlive()) {
                heroesAlive
                    .filter(hero2 => hero !== hero2)
                    .forEach(hero2 => hero.takeAHit(hero2.hit()))
            }
            return hero
        })
    }
    start() {
        while (this.superheroes.filter(hero => hero.isAlive()).length > 1) {
            this.round()
        }
    }
}
