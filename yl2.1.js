const readline = require('node:readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Sisesta õhutemperatuur: ', temp => {
    if (temp < 4.0) {
        let vastus = 'On jäätumise oht'
        console.log(vastus)
    } else {
        vastus = 'Ei ole jäätumise oht'
        console.log(vastus)
    }
    rl.close()
})
