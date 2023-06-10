# Exercício 3

### Criando Interfaces

Crie um arquivo TypeScript com as funções listadas abaixo. Utilize interfaces para tipar as respostas das requisições.

1. Uma função que recebe um nome de um usuário do GitHub e realiza uma requisição GET para obter os dados dele através da API pública do GitHub.

2. Uma função que mostra as informações salvas de um determinado usuário e alguns de seus repositórios públicos.
- A requisição deverá ser feita através da URL salva na propriedade **repos_url**;
- O retorno da API será um **array** de repositórios;
- De todos os dados dos repositórios retornados nós exibiremos apenas os seguintes: `name: string`, `description: string`, `fork: boolean`, `stargazers_count: number`.

3. Uma função que mostra todos os usuários salvos.

4. Uma função que calcula a soma de repositórios dos usuários salvos na lista e mostre o resultado.

5. Uma função que mostre o top cinco de usuários com maior número de repositórios públicos (nome e quantidade).

**Dicas**

A requisição deve ser feita através da seguinte URL: https://api.github.com/users/<nome_do_usuario>

Utilize a própria API `fetch` do JavaScript.

Ao usar o `fetch` o retorno será uma Response (pode ser percebido com a ajuda do TypeScript) que ainda precisa ser convertida para json. Isso pode ser obtido com a ajuda do método `.json()`, que retorna uma Promise.

De todos os dados retornados nós utilizaremos apenas os seguintes: `id: number`, `login: string`, `name: string`, `bio: string`, `public_repos: number`, `repos_url: string`.

Para validação, caso o usuário não seja encontrado no GitHub o retorno da api será um objeto `{ message: "Not Found" }`

O usuário retornado deverá ser salvo em uma lista que conterá todos os usuários.