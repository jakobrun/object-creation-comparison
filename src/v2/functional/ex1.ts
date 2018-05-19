import { fight } from './fight'
export const createFunctionalFight = () =>
    fight([
        { name: 'Hulk', maxPower: 300, health: 100, agility: 10 },
        { name: 'Spiderman', maxPower: 100, health: 100, agility: 30 },
        { name: 'Ironman', maxPower: 120, health: 100, agility: 20 },
    ])
