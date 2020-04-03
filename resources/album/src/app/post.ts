export class Post {
    constructor(
        public name: string,
        public title: string,
        public subtitle: string,
        public email: string,
        public mensage: string,
        public file?: string,
        public id?: number,
        public likes?: number
    ) {}
}