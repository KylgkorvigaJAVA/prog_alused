const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Täringute arv: ', dice => {
    for (i = 1; i <= dice; i++) {
        answer = Math.ceil(Math.random(i)*6)
        console.log(answer)
        rl.close()
    }
})