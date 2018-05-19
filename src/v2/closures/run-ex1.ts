import { createCloseureFight } from './ex1'
const fight = createCloseureFight()
fight.start()
console.log('*** Results ***')
fight.superheroes.forEach(hero => {
    console.log(`${hero.name} health: ${hero.health}`)
})
