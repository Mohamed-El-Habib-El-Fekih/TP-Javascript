export type Role="User"|"Admin";
export abstract class Person{
    id:number; 
    name:string;
    constructor(id:number,name:string)
    {
        this.id=id;
        this.name=name;
    }    
}
export class Utilisateurs extends Person{ 
    role:Role;
    constructor(id:number,name:string,role: "User"| "Admin")
    {
        super(id,name);
        this.role="User";
    }
}
export class Admin extends Person{
    role:Role;
    constructor(id:number,name:string,role: "User"| "Admin")
    {
        super(id,name);
        this.role="Admin";
    }
}