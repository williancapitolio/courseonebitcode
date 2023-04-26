const Post = require("./Post.js");

class Author {
    constructor(fullname, email) {
        this.fullname = fullname;
        this.email = email;
        this.posts = [];
    };

    createPost(text, date) {
        const postToAdd = new Post(text, date, this.fullname, this.email);
        this.posts.push(postToAdd);
        return console.log(postToAdd);
    };
};

module.exports = Author;
