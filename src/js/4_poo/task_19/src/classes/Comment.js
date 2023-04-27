module.exports = class Comment {
    constructor(comment, author) {
        this.comment = comment;
        this.author = author;
    };

    readComment() {
        return `O comentário foi "${this.comment}" criado por ${this.author}.`;
    };
};
