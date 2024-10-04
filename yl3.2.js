const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Sisestage ringide arv: ', ring => {
    let summa = 0;

    for (let i = 1; i <= ring; i++) {
        if (i % 2 === 0) {
            summa += i;
        }
    }

    console.log(`Porgandite koguarv on: ${summa}`);
    rl.close();
})