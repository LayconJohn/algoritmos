function ondeEstou(caixas) {
    for (let k = 0; k < caixas.length; k++) {
        const box = [];
        caixas.split("").map((_, i) => {
            if (caixas.length - i >= k) box.push(caixas.slice(i, k + i)); //0 - 3
        });
    
        const hashtable = {}
        box.map(item =>  {
            if (!hashtable[item]) {
                hashtable[item] = 1;
            } else {
                hashtable[item] ++
            }
        });
    
        const resultHashtable = Object.entries(hashtable).map(list => {
            return list[1];
        })
        //console.log({ resultHashtable, box, k })
        if (resultHashtable.every(v => v === 1)) {
            return k;
        } 
    }
    return caixas.length;
}

console.log(ondeEstou("AAAA"))