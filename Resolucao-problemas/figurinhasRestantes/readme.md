Em ano de Copa do Mundo, o álbum de figurinhas oficial é sempre um grande sucesso entre as crianças e adolescentes.

Para quem não conhece, o álbum contém espaços numerados de 1 a N para colar as figurinhas; cada figurinha, também numerada de 1 a N, é uma pequena foto de um jogador de uma das seleções que disputará a Copa do Mundo.

O objetivo é completar o álbum, de modo a colar todas as figurinhas nos seus respectivos espaços.



As figurinhas são vendidas em envelopes fechados, de forma que o comprador não sabe quais figurinhas está comprando, e pode ocorrer de ao abrir o pacote encontrar uma figurinha que ele já possui no álbum colecionando assim uma figurinha repetida.

Para ajudar os usuários, a empresa responsável pela venda do álbum quer criar um aplicativo que permita gerenciar facilmente as figurinhas que faltam para completar o álbum e está solicitando a sua ajuda.



Dados o número total n de espaços do álbum, e uma lista das figurinhas já compradas (que pode conter figurinhas repetidas), sua tarefa é determinar quais figurinhas faltam para completar o álbum e retornar uma lista com essas figurinhas em ordem crescente.



Complete a função figurinhasFaltantes ao lado, sabendo que os parâmetros representam respectivamente:

n: O número total de figurinhas que existem no álbum. n estará entre 1 e 50 mil
lst: A lista de figurinhas compradas (coladas no álbum e repetidas). O tamanho de lst estará entre 1 e 50 mil


Ex: figurinhasFaltantes(n, lst)

n = 10, lst = [5, 8, 3] => Deve retornar [1, 2, 4, 6, 7, 9, 10]
n = 5, lst = [3, 3, 2, 3, 3, 3] => Deve retornar [1, 4, 5]