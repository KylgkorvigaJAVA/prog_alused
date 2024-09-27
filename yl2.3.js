const readline = require('node:readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Sisestage enda vanus: ', vanus => {
    rl.question('Sisestage enda sugu(M, m või N, n): ', sugu => {        
        rl.question('Sisestage treeningu tüüp(1, 2 või 3): ', tyyp => {
            let pulss
            
            if (sugu == 'M' || sugu == 'm') {
                pulss = 220 - vanus    
            } else if (sugu == 'N' || sugu == 'n') {
                pulss = 206 - vanus * 0.88    
            }

            
            if (tyyp == 1) {
                minPulss = pulss * 0.5
                maxPulss = pulss * 0.7
            } else if (tyyp == 2) {
                minPulss = pulss * 0.7
                maxPulss = pulss * 0.8
            } else if (tyyp == 3) {
                minPulss = pulss * 0.8
                maxPulss = pulss * 0.87
            }
            console.log(`Pulsisagedus peaks olema vahemikus ${Math.ceil(minPulss)} kuni ${mMath.ceil(maxPulss)}`)
            rl.close()
        })    
    })
})
