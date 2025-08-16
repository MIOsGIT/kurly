export class Payload {
    id: string;
    constructor(_id: string) {
        this.id = _id;
    }
    Plain(){
        return JSON.parse(JSON.stringify(this));
    }
}