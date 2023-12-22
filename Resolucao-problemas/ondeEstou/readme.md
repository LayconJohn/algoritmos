Ao longo da estrada existem N fazendas (1 ≤ N ≤ 100) em fila. As fazendas infelizmente não têm o número da casa, tornando difícil para o fazendeiro John descobrir sua localização ao longo da estrada.

No entanto, cada fazenda tem uma caixa de correio colorida na frente, então o fazendeiro John espera que, se ele olhar para as cores das caixas de correio mais próximas a ele, ele possa determinar onde está.

A cor de cada caixa de correio é especificada por uma letra no intervalo A...Z, de modo que a sequência de N caixas de correio no caminho pode ser representada por uma sequência de comprimento N contendo letras no intervalo A...Z. Pode haver várias caixas de correio com a mesma cor. O fazendeiro John quer saber qual é o menor valor de K de modo que, se ele olhar para qualquer sequência de K caixas de correio consecutivas, ele possa determinar de maneira única a localização dessa sequência ao longo da estrada.

Exemplos:

Suponha que a sequência de caixas de correio ao longo da estrada seja 'ABCDABC'. O fazendeiro John não pode definir K=3, pois as sequências de tamanho 3 são (da esquerda para a direita): ABC, BCD, CDA, DAB, ABC. Então, se o fazendeiro estiver com sorte e vir 'BCD', isso determina de maneira única onde ele está na estrada. Mas, se o fazendeiro vir 'ABC', existem dois locais possíveis ao longo da estrada onde esse conjunto consecutivo de cores pode estar. O menor valor de K que funciona é K=4, pois se o fazendeiro olhar para qualquer conjunto consecutivo de 4 caixas de correio, essa sequência de cores determina de maneira única sua posição ao longo da estrada (ou seja, não se repete).
Suponha que a sequência de caixas de correio ao longo da estrada seja 'ABHAB'. K=2 não funciona, porque existe uma sequência de 2 letras que se repete (AB). Mas K=3 funciona, porque não há sequências repetidas com 3 letras (elas são ABH, BHA, HAB)

Escreva uma função ondeEstou(caixas) que recebe uma string descrevendo a sequência de caixas e retorne o menor valor possível de K.

