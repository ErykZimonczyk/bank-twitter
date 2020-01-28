export class User {
    constructor(private name, private imageUrl?, private id?) {
        // empty
    }

    /**
     * getName
     */
    public getName() {
        return this.name;
    }

    /**
     * getImageUrl
     */
    public getImageUrl() {
        return this.imageUrl;
    }

    /**
     * getId
     */
    public getId() {
        return this.id;
    }
}
