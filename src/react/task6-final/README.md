# Exercício 6 - Final - Gestor de Estoque

Crie uma aplicação SPA de gestão de estoque com React, React Router e Vite. A aplicação deverá atender aos seguintes requisitos:

- Deve possuir uma página inicial de dashboard que mostra:
    - A quantidade total de itens diferentes (ex.: 1 mesa e 3 cadeiras devem resultar em 2 itens ao todo).
    - A quantidade total de itens (ex.: 1 mesa e 3 cadeiras devem resultar em 4 itens ao todo).
    - A quantidade de itens adicionados nos últimos 10 dias.
    - Uma lista dos itens adicionados nos últimos 10 dias.
    - A quantidade de itens com menos de 10 em estoque.
    - Uma lista dos itens com menos de 10 em estoque.
- Deve possuir uma página que lista todos os itens em estoque em uma tabela. Essa tabela deve mostrar informações resumidas do item e 3 botões: ver mais detalhes do item, atualizar e excluir.
- Deve possuir uma página que exibe informações detalhadas de um item, exibindo todas as suas propriedades, bem como botões para atualizar e excluir o item.
- Deve possuir uma tela de criar novos itens. Ela deve ter pelo menos os campos nome, quantidade, preço, categoria e descrição.
- Também deve possuir uma tela de atualizar os dados de um item. Ela pode ter o mesmo formato da tela de criação de novos itens.
- Toda a navegação na aplicação deve ser feita sem atualizar a página, utilizando **********************client-side navigation**********************.
- Todos os dados devem ser persistidos no armazenamento local (localStorage) do navegador para serem preservados após atualizar a página ou fechar a janela do app.
- Estilização e outras bibliotecas ficam por sua conta, use o que achar necessário. As únicas coisas obrigatórias são o uso do React e do React Router, e o uso correto de seus hooks e outros recursos.

**Imagens de referência:**

Página inicial
![App Screenshot](https://onebitcode.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9034b04b-59a1-4e79-ba47-81cb5a0584b4%2FUntitled.png?table=block&id=edd84dff-a5be-4841-9c60-2e042a88d394&spaceId=6e5271d8-2f68-42f5-aa75-5978bbff47fa&width=2000&userId=&cache=v2)

Página de itens em estoque
![App Screenshot](https://onebitcode.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3c4feba2-c72d-4270-854e-47358d4f537b%2FUntitled.png?table=block&id=77fbbb27-9144-48d9-8fde-fe15a7c60a48&spaceId=6e5271d8-2f68-42f5-aa75-5978bbff47fa&width=2000&userId=&cache=v2)

Página de item individual
![App Screenshot](https://onebitcode.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8da59eac-5cce-4e41-8d19-f03c05120ad2%2FUntitled.png?table=block&id=d39bfa1a-4ac1-48ef-b231-d9e6fb53a816&spaceId=6e5271d8-2f68-42f5-aa75-5978bbff47fa&width=2000&userId=&cache=v2)

Página de criação de novo item
![App Screenshot](https://onebitcode.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb112e274-6db4-4d4f-b5cd-e4fbb2553e39%2FUntitled.png?table=block&id=eaf157d8-d406-41f1-8dbc-d98ba115c952&spaceId=6e5271d8-2f68-42f5-aa75-5978bbff47fa&width=2000&userId=&cache=v2)

Página de edição de item
![App Screenshot](https://onebitcode.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F154c7ad4-1313-47b4-abc1-5afa8f1d54be%2FUntitled.png?table=block&id=0280e8a0-93b4-4e7e-9fe8-aabbb00f5c27&spaceId=6e5271d8-2f68-42f5-aa75-5978bbff47fa&width=2000&userId=&cache=v2)