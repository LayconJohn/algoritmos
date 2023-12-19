Um jogador quer melhorar sua pontuação e subir para a primeira colocação de um jogo online, e ele pode acompanhar sua evolução pelo quadro de placares de líderes. O quadro de líder usa um sistema de ranqueamento denso, isto é:



Quanto maior o seu placar, maior é sua posição no ranking. O jogador com o maior placar é o primeiro na lista de líderes, e é ranqueado na posição 1.
Jogadores que têm o mesmo placar ocupam a mesma posição, e o(s) jogador(es) abaixo desses, que têm placar inferior recebem a próxima posição disposta pelo ranque.


Exemplo 1:



quadroPlacaresLideres = [100, 90, 90, 80]
placaresJogador = [70, 80, 105]


O ranqueamento do quadroPlacaresLideres é [1, 2, 2, 3], porque existem dois placares iguais de jogadores diferentes e por isso dois jogadores ocupam o segundo lugar. O ranqueamento relativo dos placaresJogador, ao quadroPlacaresLideres é [4, 3, 1]. Porque com seu primeiro placar ele ficaria na quarta posição, com seu segundo placar empatado com o terceiro do quadro de líderes, e com seu último placar, em primeiro do quadro de líderes.



Descrição da Função:



Complete a função subindoNoQuadroDeLideres, ela recebe os seguintes parâmetros:



placarLideres: Lista de inteiros contendo os placares do quadro de líderes. Tamanho [n].
placarJogador: Lista de inteiros contendo uma sequência de placares do jogador. Tamanho [m].


Retorno:



Ela deve retornar uma lista de inteiros, contendo as posições relativas de cada placar do jogador ao quadro de placares dos líderes. Essa lista deve ter tamanho [m].



Intervalos e Observações:



1 ≤ n ≤ 10^6
1 ≤ m ≤ 10^6
0 ≤ placarLideres[i] ≤ 200, com 0 ≤ i < n
0 ≤ placarJogador[j] ≤ 200, com 0 ≤ j < m
A lista placarLideres está em ordem decrescente.
A lista placarJogador está em ordem crescente.


Mais Exemplos:



placarLideres = [100, 90, 80, 80, 65, 55], placarJogador = [30, 50, 55, 55, 80, 98, 105] ⇒ Deve retornar [6, 6, 5, 5, 3, 2, 1]
placarLideres = [150, 120, 80, 60], placarJogador = [30, 70, 80, 100, 120, 130, 150, 160, 180] ⇒ Deve retornar [5, 4, 3, 3, 2, 2, 1, 1, 1]


Desafio:



A maioria dos testes desta questão usam valores pequenos de n e m (menos que 100). Mas existe um teste de desafio no qual n e m são da ordem de 50 mil. Nessa ordem de grandeza, dependendo da estratégia de implementação do algoritmo subindoNoQuadroDeLideres, ele pode ser muuuuuito lento e demorar mais de 2 segundos para terminar.



Mas existe pelo menos 1 maneira "esperta" de programar esse algoritmo que o torna muito rápido mesmo quando n e m são grandes. O desafio consiste em encontrar uma dessas maneiras espertas de programar o algoritmo. A função aceitoDesafio (veja o código inicial) decide se você quer aceitar esse desafio ou não (ele é opcional). Se você a fizer retornar true, então você está aceitando o desafio e 1 dos testes automatizados vai executar sua subindoNoQuadroDeLideres com valores grandes de n e m para testar se o algoritmo é rápido mesmo. Por outro lado, se a aceitoDesafio retornar false, então você não quer participar do desafio e esse caso de teste vai te deixar passar sem testar a rapidez do seu algoritmo. Nenhum outro caso de teste será influenciado pela aceitoDesafio.



Essa diferença gritante de velocidade será assunto mais detalhado do módulo seguinte, onde veremos a história completa.

===========================================================================
[Mesa de testes]:
[30, 50, 55, 55, 80, 98, 105] : [100, 90, 80, 80, 65, 55] -> [6, 6, 5, 5, 3, ]
receive: [ 6, 6, 5, 5, 3, 1 ]
expect: [ 6, 6, 5, 5, 3, 2, 1 ]

[
  { value: 100, position: 1 },
  { value: 90, position: 2 },
  { value: 80, position: 3 },
  { value: 80, position: 3 },
  { value: 65, position: 4 },
  { value: 55, position: 5 }
]