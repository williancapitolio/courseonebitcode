type itemsType = {
  id: number;
  name: string;
  qtde: number;
  price: number;
  cat: string;
  desc: string;
  createdAt: string;
  updatedAt: string;
};

export const items: itemsType[] = [
  {
    id: 1,
    name: "O Senhor dos Anéis",
    qtde: 10,
    price: 100,
    cat: "Livros",
    desc: "Livro de O Senhor dos Anéis",
    createdAt: "04/10/2023",
    updatedAt: "",
  },
  {
    id: 2,
    name: "Guerra dos Tronos",
    qtde: 5,
    price: 170,
    cat: "Livros",
    desc: "Livro de Guerra dos Tronos",
    createdAt: "05/10/2023",
    updatedAt: "",
  },
  {
    id: 3,
    name: "Resident Evil 4",
    qtde: 1,
    price: 50,
    cat: "Jogos",
    desc: "Jogo Resident Evil 4, melhor jogo de ps2",
    createdAt: "05/10/2023",
    updatedAt: "",
  },
  {
    id: 4,
    name: "Stardew Valley",
    qtde: 3,
    price: 10,
    cat: "Jogos",
    desc: "Stardew Valley, um jogo de simulador de fazenda",
    createdAt: "08/10/2023",
    updatedAt: "",
  },
  {
    id: 5,
    name: "Baki",
    qtde: 7,
    price: 25,
    cat: "Animes",
    desc: "Anime do Baki o Lutador",
    createdAt: "08/10/2023",
    updatedAt: "",
  },
];
