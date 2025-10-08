let id: string | number;
type A={nom: string , prenom: string};
type B={age: number};
type C= A&B;
type Status= "pending" | "done" | "cancelled";
let v:unknown;
v="habib";
if(typeof v =="string")
    console.log((v as string).length);