const readline = require('node:readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Sisestage Leedu perenimi: ', nimi => {
    if (nimi.slice(-2)=="ne") {
        var vastus = 'Abielus'
    } else if (nimi.slice(-2)=="te") {
        vastus = 'Vallaline'
    } else if (nimi.slice(-1)=="e") {
        vastus = 'Määramata'    
    } else {
        vastus = 'Pole leedulanna perekonnanimi'
    }
    console.log(vastus)
    rl.close()
})