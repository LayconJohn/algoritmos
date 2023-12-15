function maisFrequente(lst){
  const hashtable = {};
  lst.map(item => {
    if(!hashtable[item]) {
      hashtable[item] = {
        count: 1,
        value: item
      };
    } else {
      hashtable[item] = {
        ...hashtable[item],
        count: hashtable[item].count + 1
      };
    }
  });

  const array = Object.keys(hashtable).map(key => hashtable[key]);
  console.log(array);

  const sorted = array.sort((a, b) => {
    return a.count - b.count
  })

  console.log(sorted[sorted.length - 1].value);
}

maisFrequente([0, 0, 0, 0, 60, 30, 70]);