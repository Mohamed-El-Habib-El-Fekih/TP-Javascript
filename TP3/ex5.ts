function add(a: number,b: number): number{
    return a+b;
}
function greet(name: string, age?: number){
    if(age===undefined)
        console.log("name : "+name+" Age : Age n'est pas fournis");
    else
        console.log("name : "+name+" Age : "+age);
}
function power(base: number, exp: number = 2):number{
    let cpt: number=1;
    for(let i:number=0;i<exp;i++)
        cpt*=base;
    return cpt;
}
function combine(a:number|string,b:number|string): number|string {
    if(typeof a==="string" && typeof b==="string")
            return (a as string)+(b as string);
    if(typeof a==="number" && typeof b==="number")
        return (a as number)+(b as number);
    throw new Error("impossible");
}