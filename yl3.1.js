const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Sisestage mitu korda äratada: ', x => {
    let i = 1
    while (i <= x) {
        console.log('ALARM!!!!!')
        i++
        rl.close()
    }
})

/* rl.question('Sisestage mitu korda äratada: ', x => {
    for (i = 0; i < x; i++) {
        console.log('ALARM!!!!!')
        rl.close()
    }
}) */