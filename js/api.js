
 
export function loadData(resolved,rejected){

 fetch('https://flowboard-api-virid.vercel.app/cards', {
     
})
.then((res) =>{
   if (!res.ok) {
        throw new Error("Erreur HTTP : " + response.status);}
       
 return res.json()})

.then(data =>{
    
    resolved(data)
     
    // console.log(product)
    // affiche(product)
}) 
.catch ( e =>{
    rejected()
  })
}
// loadData()


export function filterDataServer(title,priority,resolved,rejected){
  const trget="/cards"
  const path="https://flowboard-api-virid.vercel.app"
const Url=new URL(trget,path)

if(title){
Url.searchParams.set("title_like",title)
}
if(priority){
Url.searchParams.set("priority",priority)
}
  fetch(Url.toString())
.then((res) =>{
   if (!res.ok) {
        throw new Error("Erreur HTTP : " + response.status);}
       
 return res.json()})
 .then(data =>{
    
    resolved(data)
     
}) 
.catch ( e =>{
    rejected()
  })
}




