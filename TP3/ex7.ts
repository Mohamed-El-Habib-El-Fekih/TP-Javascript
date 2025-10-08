function identity<T>(value :T):T{
    return value;
}
function getFirst<T>(arr: T[]):T{
    if(arr.length>=1)
        return arr[0];
    throw Error("tableau est vide");
}
class Repository<T>{
    arr: T[];
    constructor(arr:T[]){
        this.arr=[...arr];
    }
    add(elem : T){
        this.arr.push(elem);
    }
    remove(ind : number){
        if(ind<this.arr.length && ind>=0)
            this.arr.splice(ind,1);
        else
            throw Error("suppression impossible");
    }
    getAll(){
        return this.arr;
    }
}
interface ApiResponse<T>{
    data:T;
    error?:string;
}