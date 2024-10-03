const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Kas soovite istekohta valida ise("ise") või loosida("loos")?: ', istekoht => {
    rl.question('Kas soovite istuda akna ääres("aken") või mitte("muu")?: ', aken => {
        var message
        var istekoht        
        if ((istekoht = 'ise') && (aken = 'aken')) {
             istekoht = ' Aknakoht'
             message = 'Valisite ise.'
        }
        if ((istekoht = 'ise') && (aken = 'muu')) {
            istekoht = 'Vahekäigukoht'
            message = 'Valisite ise.'
        }
        console.log(message + istekoht)
        rl.close()
    })
})