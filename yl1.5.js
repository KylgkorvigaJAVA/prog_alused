const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Sisestage ainepunktide arv: ', punktideArv => {
    rl.question('Sisestage nädalate arv: ', nädalateArv => {
        let ajakulu = (punktideArv * 26)/nädalateArv;
        ajakulu = Math.round(ajakulu)
        console.log(ajakulu)
        rl.close()
    })
})