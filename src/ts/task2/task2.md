# Exercício 2

### Criando Novos Tipos

Crie um arquivo TypeScript contendo as 5 funções descritas abaixo.

1. A primeira função deverá salvar um objeto Planet com as seguintes propriedades:
- **name**, que deverá ser inserido pelo usuário;
- **coordenadas**, que deverá ser inserido pelo usuário, salvo como uma tupla de quatro elementos numéricos;
- **situação**, inserido pelo usuário, salvo como uma string que pode ser "habitado", "habitável", "inabitável" e "inexplorado";
- **satélites**, uma lista com os seus nomes;

2. Uma função que atualiza a situação de um determinado planeta.

3. Uma função que adiciona um satélite a um determinado planeta.

4. Uma função que remove um satélite de um determinado planeta.

5. Uma função que lista todos os planetas salvos e todas as suas informações.

**Dicas**

A ideia aqui é praticar TypeScript, portanto use a tipagem a seu favor.

Uma forma de testar as funções é chamando-as direto do console do navegador.

O exercício não especifíca algumas partes de propósito. Use a criatividade!

Para simplificar você pode criar um array no escopo global para ser utilizado pelas funções.

**Desafio:** tente utilizar a página HTML criada na aula prática e as funções de entrada / saída do navegador como `prompt`, `confirm` e `alert` para criar um menu interativo.