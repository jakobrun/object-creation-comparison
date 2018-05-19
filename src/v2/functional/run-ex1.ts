import { createFunctionalFight } from './ex1'

console.log('*** Results ***')
createFunctionalFight().forEach(hero => {
    console.log(`${hero.name} health: ${hero.health}`)
})
