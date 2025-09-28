//EX5
const livre={
  titre: "Le Petit Prince",
  auteur: "Antoine de Saint-Exupéry",
  annee: 1943,
  getInfo() {
    return this.titre+" "+this.auteur+" "+this.annee;
  }
};
console.log(livre.getInfo());
//EX6
class Etudiant {
    nom="";
    note=0;
    getMention() {
        var n = this.note;
        if(n>=16)
            return "Très bien";
        if(n>=14) 
            return "Bien";
        if(n>=10) 
            return "Passable";
        return "Échec";
    }
    }
var a=new Etudiant();
a.nom="alice";
a.note=17.5;
var b=new Etudiant();
b.nom="Brahim";
b.note=14;
var c=new Etudiant();
c.nom="Céline";
c.note=9.5;
console.log(a.nom+" "+a.note+"\n");
console.log(b.nom+" "+b.note+"\n");
console.log(c.nom+" "+c.note+"\n");
//EX7
const notes = [12, 5, 17, 9, 20];
var somme=notes.reduce((acc, val) => acc+val,0);
var moyenne=somme/notes.length;
console.log("Moyenne =", moyenne); // -> 12.6
notes.sort((a,b) => b-a);
console.log("Tri décroissant =", notes); 
const notesAdmissibles=notes.filter(n => n>=10);
console.log("Notes ≥ 10 =",notesAdmissibles); 
