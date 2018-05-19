import { Superhero } from './superhero'
import { createClasseFight } from './ex1'
const classesFight = createClasseFight()
classesFight.start()
console.log('*** Results ***')
classesFight.superheroes.forEach(hero => {
    console.log(`${hero.name} health: ${hero.health}`)
})
