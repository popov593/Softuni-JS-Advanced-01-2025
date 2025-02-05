function solution() {

    class Post {

        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {

        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let output = super.toString() + `\nRating: ${this.likes - this.dislikes}`;

            if (this.comments.length > 0) {
                output += `\nComments:`; 
                this.comments.forEach(comment => output += `\n * ${comment}`);
            }

            return output;

        }

    }

    class BlogPost extends Post {

        constructor(title, content, views) {
            super(title, content);
            this._views = Number(views);
        }

        get view() {
            return this._views;
        }

        view() {
            this._views++;
            return this;
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`;
        }
         
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }

}





const classes = solution();

let post = new classes.Post("Post", "Content");


console.log(post.toString());


// Post: Post

// Content: Content


let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);


scm.addComment("Good post");

scm.addComment("Very good post");

scm.addComment("Wow!");


console.log(scm.toString());