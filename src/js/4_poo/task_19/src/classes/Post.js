const Author = require("./Author.js");
const Comment = require("./Comment.js");

module.exports = class Post {
    constructor(text, date, fullname, email) {
        this.text = text;
        this.date = date;
        this.author = new Author(fullname, email);
        this.comments = [];
    };

    addComment(comment, author) {
        const commnetToAdd = new Comment(comment, author);
        this.comments.push(commnetToAdd);
    };
};
