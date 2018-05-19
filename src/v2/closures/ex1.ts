import { superhero } from './superhero'
import { fight } from './fight'
export const createCloseureFight = () => {
    return fight([
        superhero({
            name: 'Hulk',
            maxPower: 300,
            health: 100,
            agility: 10,
        }),
        superhero({
            name: 'Spiderman',
            maxPower: 100,
            health: 100,
            agility: 30,
        }),
        superhero({
            name: 'Ironman',
            maxPower: 120,
            health: 100,
            agility: 20,
        }),
    ])
}
