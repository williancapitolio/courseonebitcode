type itemsType = {
  id: number;
  name: string;
  qtde: number;
  price: number;
  cat: string;
  desc: string;
};

export const items: itemsType[] = [
  {
    id: 1,
    name: "O Senhor dos Anéis",
    qtde: 2,
    price: 100,
    cat: "Livros",
    desc: "Livro de O Senhor dos Anéis",
  },
  {
    id: 2,
    name: "Guerra dos Tronos",
    qtde: 5,
    price: 170,
    cat: "Livros",
    desc: "Livro de Guerra dos Tronos",
  },
  {
    id: 3,
    name: "Resident Evil 4",
    qtde: 1,
    price: 50,
    cat: "Jogos",
    desc: "Jogo Resident Evil 4, melhor jogo de ps2",
  },
  {
    id: 4,
    name: "Stardew Valley",
    qtde: 3,
    price: 10,
    cat: "Jogos",
    desc: "Stardew Valley, um jogo de simulador de fazenda",
  },
  {
    id: 5,
    name: "Baki",
    qtde: 6,
    price: 25,
    cat: "Animes",
    desc: "Anime do Baki o Lutador",
  },
];
