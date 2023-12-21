function descriptografar (inicio, arr) {
  //TO-DO
  const phrase = [];
  let firstWord = arr[inicio];
  const indexFirstword = arr.indexOf(firstWord);
  let lastName = null;
  phrase.push(firstWord);
  const word = phrase.push(arr[indexFirstword]);
  let index = arr.indexOf(word);
  while(lastName === null) {
    if (arr[index].slice(-1) === "-1") {
      lastName = arr[index]
      break
    }

    
  }

  phrase.push(lastName)

  return phrase.join(' ')
}
const lista = [1, 2]
console.log(lista[3])