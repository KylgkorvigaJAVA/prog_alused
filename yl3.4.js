const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Mitu pöialpoissi tahab õunu: ', input => {
    let apple = 14
    
    for(let i = 1; i <= input; i++) {
        let input = Math.ceil(Math.random()*2)
        console.log(input)
        apple = apple - input
    }
    console.log(`Lumivalgekesele jäi ${apple} õuna`)
    rl.close()
})