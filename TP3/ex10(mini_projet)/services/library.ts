import { Livre } from '../models/book.ts';
export class Library{
    tab:Livre[];
    constructor()
    {
        this.tab=[];
    }
    ajouter(x:Livre):void {
        this.tab.push({...x});
    }
    rechercher(id:number):number{
        for(let i:number=0;i<this.tab.length;i++)
                if(this.tab[i].id==id)
                    return i;
        return -1;
    }
    retirer(id:number):void{
        if(this.rechercher(id)!=-1)
            this.tab.splice(this.rechercher(id),1);    
    }
    emprunter(id:number):void{
        if(this.rechercher(id)!=-1)
        {
            this.tab[this.rechercher(id)].available=false;
            console.log("emprunt avec succes\n");
        }
        else
            console.log("emprunt echoue : livre "+id+" n'est pas disponible\n");
    }
    rendre(id:number):void{
        this.tab[this.rechercher(id)].available=true;
        for(let i:number=0;i<this.tab.length;i++)
        {
            if(this.tab[i].id==id)
                    
        }
    }
}