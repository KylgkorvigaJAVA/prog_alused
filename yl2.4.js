const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function loos() {
    return Math.random() < 1/3 ? "Aknakoht" : "Vahekäigukoht";
}

rl.question('Kas soovite istekohta valida ise("ise") või loosida("loos")?: ', istekoht => {
    if (istekoht === 'loos') {
        console.log('Istekoht loositi. ' + loos());
        rl.close();
    } else {
        rl.question('Kas soovite istuda akna ääres("aken") või mitte("muu")?: ', aken => {
            if (istekoht === 'ise' && aken === 'aken') {
                console.log('Valisite ise. Aknakoht');
            } else if (istekoht === 'ise' && aken === 'muu') {
                console.log('Valisite ise. Vahekäigukoht');
            }
            rl.close();
        })
    }
})