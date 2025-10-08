export class Livre {
    id:number;
    title:string;
    author:string;
    year:number;
    available:boolean;
    constructor(id:number,title:string,author:string,year:number,available:boolean)
    {
        this.author=author;
        this.id=id;
        this.title=title;
        this.year=year;
        this.available=available;
    }
}