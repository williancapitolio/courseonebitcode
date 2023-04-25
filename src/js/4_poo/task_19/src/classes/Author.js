const Post = require("./Post.js");

class Author {
    constructor(fullname, email) {
        this.fullname = fullname;
        this.email = email;
    };

    createPost(text, date, fullname, email) {
        return console.log(new Post(text, date, fullname = this.fullname, email = this.email));
    };
};

module.exports = Author;
