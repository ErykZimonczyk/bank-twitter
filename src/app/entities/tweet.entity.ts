import { User } from './user.entity';

export class Tweet {
    constructor(
        private id: number,
        private author: User,
        private title: string,
        private body: string
    ) {
        // empty
    }

    /**
     * getId
     */
    public getId() {
        return this.id;
    }

    /**
     * getAuthorId
     */
    public getAuthor() {
        return this.author;
    }

    /**
     * getTitle
     */
    public getTitle() {
        return this.title;
    }

    /**
     * getBody
     */
    public getBody() {
        return this.body;
    }
}
