function figurinhasFaltantes(n, lst) {
    const remaining = [];
    const hashtable = {}
    lst.map(item => {
        hashtable[item] = true;
    });

    for (let i = 1; i <= n; i++) {
        if (!hashtable[i]) {
            remaining.push(i);
        }
    }

    return remaining;
}

console.log(figurinhasFaltantes(5, [3, 3, 2, 3, 3, 3]));