const Post = require("./Post.js");

module.exports = class Author {
    constructor(fullname, email) {
        this.fullname = fullname;
        this.email = email;
        this.posts = [];
    };

    createPost(text, date) {
        const postToAdd = new Post(text, date, this.fullname, this.email);
        this.posts.push(postToAdd);
        return postToAdd;
    };
};
