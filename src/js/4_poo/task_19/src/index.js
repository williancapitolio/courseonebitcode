const Post = require("./classes/Post.js");

const postOne = new Post("Texto post um", new Date());

console.log(postOne);

postOne.addComment("Comentário um", "John");
postOne.addComment("Comentário dois", "Will");

console.log(postOne);

/* const Author = require("./classes/Author.js");

const will = new Author("Willian Silva", "willian@email.com");

will.createPost("Post top", new Date());

console.log(will); */