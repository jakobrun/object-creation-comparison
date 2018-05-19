import { Suite } from 'benchmark'
import { createClasseFight } from './classes/ex1'
import { createCloseureFight } from './closures/ex1'
import { createFunctionalFight } from './functional/ex1'

const suite = new Suite()
suite
    .add('class', () => {
        createClasseFight().start()
    })
    .add('closure', () => {
        createCloseureFight().start()
    })
    .add('fp', () => {
        createFunctionalFight()
    })
    .on('cycle', function(event) {
        console.log(String(event.target))
    })
    .on('complete', function() {
        console.log('Fastest is ' + suite.filter('fastest').map('name'))
    })
    .run()
