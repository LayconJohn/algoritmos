function formarPar (arr) {
    const result = [];
    const pairs = [];
    arr.map(batch => {
        const hashtable = {}
        batch.map(shoe => {
            if(!hashtable[shoe]) hashtable[shoe] = {number: shoe.slice(0, 2), side: shoe.slice(-1), count: 0}
        })
        result.push(hashtable)
    });

    arr.map((batch, i) => {
        let count = 0;
        batch.map((shoe, index) => {
            const side = shoe.slice(-1) === "D" ? "E" : "D"
            if (result[i][`${shoe.slice(0, 2)} ${side}`] && result[i][`${shoe.slice(0, 2)} ${side}`].count === 0) {
                count ++
                result[i][`${shoe.slice(0, 2)} ${side}`].count++
            }
        })
        pairs.push(count/2);
    });

    return pairs;
}
const lst =  [['40 D', '41 E', '41 D', '40 E'], ['38 E', '38 E', '40 D', '38 D', '40 D', '37 E']]
console.log(formarPar(lst))
