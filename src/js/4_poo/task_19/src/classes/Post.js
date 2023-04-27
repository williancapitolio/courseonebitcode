const Comment = require("./Comment.js");

module.exports = class Post {
    constructor(text, date, author) {
        this.text = text;
        this.date = date;
        this.author = author;
        this.comments = [];
        this.createdAt = new Date();
    };

    addComment(comment, author) {
        this.comments.push(new Comment(comment, author));
    };
};
