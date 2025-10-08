class Person{
    name: string;
    age: number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log("salem\n");
    }
}
class Student extends Person{
    school:string;
    constructor(school:string,age:number,name:string){
        super(name,age);
        this.school=school;
    }
}
abstract class Shape{
    abstract area():number;
}
class Circle extends Shape{
    rayon: number;
    constructor(rayon:number){
        super();
        this.rayon=rayon;
    }
    area():number{
        return this.rayon*this.rayon*Math.PI;
    }
}
class Rectangle extends Shape{
    longueur : number;
    largeur : number;
    constructor(longueur:number,largeur:number){
        super();
        this.longueur=longueur;
        this.largeur=largeur;
    }
    area():number{
        return this.longueur*this.largeur;
    }
}
interface Drivable{
    drive(distance: number): void;
}
class Car implements Drivable{
    make: string;
    model: string;
    constructor(make: string,model: string){
        this.make=make;
        this.model=model;
    }
    drive(distance: number): void{
    console.log(this.make+" "+this.model+" roule sur "+distance+" km");
    }
}