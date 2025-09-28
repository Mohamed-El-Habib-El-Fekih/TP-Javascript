tache=JSON.parse(localStorage.getItem("tache")) || [];
afficher("");
function recup()
{
    let x=document.getElementById("input").value;
    if(x!="")
        ajouterTache(x);
}
document.getElementById("input").addEventListener("keydown",function(event){
    if(event.key=="Enter")
        recup();
});
function terminerTache(ind)
{
    if(!tache[ind].termine)
    {
        cpterm++;
        cptcour--;
    }
    tache[ind].termine=true;
    afficher("");
}
function afficher(x)
{
    cpterm=0;
    cptcour=0;
    document.getElementById("liste").innerHTML="";
    for(let i=0;i<tache.length;i++)
    {
        if((tache[i].texte).includes(x))
        {
            let z=document.createElement("li");
            z.style.width="500px";
            z.innerHTML="<h2>"+tache[i].texte+"</h2>"+"<button class="+"supp"+">supprimer</button><button class="+"term"+">terminer</button>";
            if(tache[i].termine)
            {
                z.style.textDecoration="line-through";
                cpterm++;
            }
            else
                cptcour++;    
            document.getElementById("liste").appendChild(z);
            z.querySelector(".term").addEventListener("click",function(){
                terminerTache(i);
            });
            z.querySelector(".supp").addEventListener("click",function(){
                supprimerTache(i);
            });
        }
    }
    document.getElementById("donecount").innerHTML=cpterm;
    document.getElementById("pendingcount").innerHTML=cptcour;
    localStorage.setItem("tache",JSON.stringify(tache));
}
function ajouterTache(x)
{
    document.getElementById("input").value="";
    tache.push({texte: x,termine:false});    
    cptcour++;
    afficher("");    
}
function supprimerTache(ind)
{
    if(tache[ind].termine)
        cpterm--;
    else
        cptcour--;
    tache.splice(ind,1);
    afficher("");
}

//etape7
function suppall(){
    cptcour=0;
    cpterm=0;
    tache=[];
    afficher("");
}
function affich2()
{
    let x=document.getElementById("input2").value;
    afficher(x);
}