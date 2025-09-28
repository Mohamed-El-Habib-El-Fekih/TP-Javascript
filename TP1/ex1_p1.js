//EX1

/*var x=-1;
do{ 
    let test=-1;    
    x++;
}while(x<0);
prompt(test);*/

/*var x=-1;
let test=-1;
do{ 
    x++;
}while(x<0);
prompt(test);*/
/*const surf=1;
surf=50;
prompt(surf);*/


//une variable var définie à l’intérieur d’un bloc {} remonte au niveau .
//let et const existent uniquement à l’intérieur du bloc {} où elles ont été déclarées. En dehors du bloc, accès provoque une ReferenceError.


//EX2
function somme1(a,b){ // fonction normale
  return a+b;
} 
let somme2=(a,b)=>{ return a+b; };//fonction fleche , pas de return implicite
let somme3=(a,b)=>a+b; // fonction fleche avec return implicite

//EX3
const user={name: "Noor", age: 10, city: "Tunis" };
const nme=user.name;
const age=user.age;
console.log(nme);
console.log(age);

//EX4
let a = [1, 2, 3];
let b = [4, 5, 6];
let fusion = [...a, ...b];
console.log(fusion);