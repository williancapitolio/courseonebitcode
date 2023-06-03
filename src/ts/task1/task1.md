# Exercício 1

### Declarando Tipos no TypeScript

Crie um arquivo TypeScript contendo as 4 funções descritas abaixo.

1. A primeira função deverá salvar um objeto Spaceship com, no mínimo, as seguintes propriedades:
- **name**, que deverá ser inserido pelo usuário;
- **pilot**, que deverá ser inserido pelo usuário;
- **crewLimit**, o tamanho máximo da tripulação que deverá ser inserido pelo usuário;
- **crew**, um array de strings inicialmente vazio;
- **inMission**, que inicialmente deve ser falso.

2. A segunda função deverá adicionar um membro à tripulação de uma determinada nave. No entanto o tamanho máximo de tripulantes não pode ser excedido.

3. A terceira função deverá enviar uma determinada nave em uma missão caso ela não esteja. Para isso é preciso que 1/3 da sua tripulação esteja preenchida, arredondando para baixo.

4. A quarta função deverá listar todas as naves registradas e suas respectivas informações.

**Dicas**

A ideia aqui é praticas TypeScript, portanto use a tipagem a seu favor.

Uma forma de testar as funções é chamando-as direto do console do navegador.

O exercício não especifíca algumas partes de propósito. Use a criatividade!

Para simplificar você pode criar um array no escopo global para ser utilizado pelas funções.

**Desafio:** tente utilizar a página HTML criada na aula prática e as funções de entrada / saída do navegador como `prompt`, `confirm` e `alert` para criar um menu interativo.