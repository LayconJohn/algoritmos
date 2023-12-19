function subindoNoQuadroDeLideres(placarLideres, placarJogador) {
    const ranking = []
    const rankingPlayer = []
    const hashtable = {}

    let position = 0;
    placarLideres.map((item, index) => { 
        if (index > 0 && item === placarLideres[index - 1]) {
            ranking.push({value: item, position})
        } else {
            position ++
            ranking.push({value: item, position}) 
        }
    }); 

    placarLideres.map((item, i) => {
        if (!hashtable[item]) {
            hashtable[item] = {value: item, position: ranking[i].position};
        }
    });

    placarJogador.map((item, i) => { 
        if (hashtable[item]) {
            rankingPlayer.push(hashtable[item].position)
        } else if (item > placarLideres[0]) {
            rankingPlayer.push(1);
        } else if (item < placarLideres[placarLideres.length - 1]) {
            rankingPlayer.push(ranking[ranking.length - 1].position + 1)
        } else {
            for (i in placarLideres) {
                const value = placarLideres[i]
                if (item > value) {
                    rankingPlayer.push(hashtable[value].position);
                    break;   
                }
            }
        }
    });

    return rankingPlayer;
}



console.log(subindoNoQuadroDeLideres([100, 90, 80, 80, 65, 55], [30, 50, 55, 55, 80, 98, 105]));

