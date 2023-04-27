const Post = require("./classes/Post.js");
const Author = require("./classes/Author.js");

const postOne = new Post("Texto post um", new Date(), "Willian Silva", "willian@email.com");

console.log(postOne);

postOne.addComment("Comentário um", "John");
postOne.addComment("Comentário dois", "Will");
postOne.addComment("Comentário três", "Lary");

console.log(postOne); 

console.log(postOne.comments[0].readComment());

/* const will = new Author("Willian Silva", "willian@email.com");

console.log(will);

will.createPost("Texto criado para o post", new Date());
will.createPost("Texto dois criado para o post", "25/04/2023");

console.log(will); */