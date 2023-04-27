const Post = require("./Post.js");

module.exports = class Author {
    constructor(fullname) {
        this.fullname = fullname;
        this.posts = [];
    };

    createPost(text, date) {
        const postToAdd = new Post(text, date, this);
        this.posts.push(postToAdd);
        return postToAdd;
    };
};
