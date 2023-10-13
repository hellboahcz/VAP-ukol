function prevodZDec(cislo,soustava){
    let vysledek = "";
    let soustavy = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    while (cislo!=0) {
        vysledek= soustavy[cislo%soustava] + vysledek;
        cislo /= soustava;
        cislo = Math.floor(cislo);
    }
    return vysledek;
}

function prevodDoDec(cislo,soustava) {
    let nasobitel = 1
    let vysledek = 0;
    let soustavy = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
    for (let i = cislo.length; i < soustavy.length; i++) {
        vysledek += Number(cislo[i])*nasobitel;
        n *= soustava;
    }return vysledek;
}