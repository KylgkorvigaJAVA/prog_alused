const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Sisestage kirja suurus: ', size => {
    rl.question('Sisestage kirja teema pealkiri: ', title => {
        rl.question('Kas kirjaga on kaasas fail?: ', file => {
            let sizeMB = parseFloat(size);
            
            if (!title || file === 'jah' || sizeMB > 1) { 
                console.log('Kiri on spämm');;
            } else {
                console.log('Kiri ei ole spämm');
            }
            rl.close();
        }) 
    })
})