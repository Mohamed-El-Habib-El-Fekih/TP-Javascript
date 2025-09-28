const apiUrl = "https://jsonplaceholder.typicode.com/posts";
fetch(apiUrl)
  .then(response=>response.json())
  .then(posts => {
    let s="";
    for (let i=0;i<5;i++){
      let z=document.createElement("p");
      z.textContent=posts[i].title;
      document.querySelector("body").appendChild(z);
    }
    
  })
  .catch(error => console.error("Erreur :", error));
