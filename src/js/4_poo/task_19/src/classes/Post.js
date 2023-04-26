const Comment = require("./Comment.js");

class Post {
    constructor(text, date) {
        this.text = text;
        this.date = date;
        this.comment = [];
    };

    addComment(comment, author) {
        const commnetToAdd = new Comment(comment, author);
        this.comment.push(commnetToAdd);
    };
};

module.exports = Post;
