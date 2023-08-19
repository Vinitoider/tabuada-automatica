function tabuada() {
    let fnum = document.getElementById('fnum')
    let ftab = document.getElementById('ftab')
    let tab10 = document.getElementById('tab10')

    if (tab10.checked) {
        let tabuada = document.getElementById('tabuada')
        let num = Number(fnum.value)
        tabuada.innerHTML = ''
        for (c = 1; c <= 10; c++) {
        tabuada.innerHTML += `${num} x ${c} = ${c*num} <br>`
        }
    } else {
        if (fnum.value.length == 0 || ftab.value.length == 0) {
            window.alert('[ERRO] Verifique os dados e tente novamente')
        } else {
            let tabuada = document.getElementById('tabuada')
            let num = Number(fnum.value)
            let ntab = Number(ftab.value)
            tabuada.innerHTML = ''
            for (c = 1; c <= ntab; c++) {                    
                tabuada.innerHTML += `${num} x ${c} = ${c*num} <br>`
            }
        }
    }
}