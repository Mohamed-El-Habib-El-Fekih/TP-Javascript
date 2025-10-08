interface User{
    id:number,
    nom:string,
    email?:string,
    readonly isAdmin:boolean,
}
let user1: User={id:5,nom:"habib",email:"habib.elfekih2004@gmail.com",isAdmin: true};
interface Admin extends User{
    permissions: string[];
}