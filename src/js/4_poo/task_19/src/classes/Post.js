const Comment = require("./Comment.js");
const Author = require("./Author.js");

class Post {
    constructor(text, date, author) {
        this.text = text;
        this.date = date;
        this.author = author;
    };

    addComment(comment, fullname, email) {
        this.comment = new Comment(comment, new Author(fullname, email));
    };
};

module.exports = Post;
