import { Superhero } from './superhero'
import { Fight } from './fight'
export const createClasseFight = () => {
    return new Fight([
        new Superhero('Hulk', 300, 100, 10),
        new Superhero('Spiderman', 100, 100, 30),
        new Superhero('Ironman', 120, 100, 20),
    ])
}
