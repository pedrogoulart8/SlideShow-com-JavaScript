# SlideShow

![Slide](https://user-images.githubusercontent.com/116767490/213792587-7f587f54-8e83-42ee-a32c-72d9df73f1ba.png)


## Passo a passo:

1 - 
Primeiro criei um array com nome de 'images' para guardar todas as imagens usadas no projeto.


2-
Depois criei uma variavel para englobar a div de id #container-items, chamada de 'containerItems'


3-
Proximo passo era carregar as imagens dentro do container.

Criamos uma arrow function com os seguintes parametros (a, b)


No 'a' será chamado um forEach.
Este forEach terá um parametro de nome 'cadaImagem', e o mesmo terá a função de executar a seguinte função:

'b' receberá uma div de class 'item', que receberá uma imagem com o caminho 'cadaImagem.url'


Resumindo:
Quando chamarmos loadImages (images, containerItems), iremos fazer rodar as seguintes ações:

O array 'images' receberá um forEach para que seja rodada uma ação para cada um dos seus elementos.
Cada um dos seus elementos será representado pelo parametro 'cadaImagem'
Ao mesmo tempo será inserido uma nova div dentro de 'containerItems'. Esta div contará com uma das imagens do array 'images'




4 - 

Criado uma variavel para as divs de "next" e "previous"
Inseri um evento de click nas mesmas.

Chamei uma arrow function para cada uma delas.

Dentro da função de 'previous' foi inserido um comando para que, toda vez que clicado, o primeiro item do array seja enviado para o ultimo lugar da fila.

Dentro da função de 'next' foi inserido um comando para que, toda vez que clicado, o ultimo item do array fique antes do primeiro item da fila.
