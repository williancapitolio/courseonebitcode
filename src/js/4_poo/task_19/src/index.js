const Post = require("./classes/Post.js");
const Author = require("./classes/Author.js");

const will = new Author("Willian Silva");

const postOne = new Post("Texto post um", new Date(), will);

console.log(postOne);

postOne.addComment("Comentário um", "John");
postOne.addComment("Comentário dois", "Will");
postOne.addComment("Comentário três", "Lary");

console.log(postOne); 

console.log(postOne.comments[0].readComment());

console.log(will);

will.createPost("Texto criado para o post", new Date());
will.createPost("Texto dois criado para o post", "25/04/2023");

console.log(will);

//

const john = new Author("John Doe");

const post = john.createPost("Post do John", "Data de criação do post");

post.addComment("Post top", "Usuário");
post.addComment("Post bom", "Fulano");

console.log(john);
console.log(post);