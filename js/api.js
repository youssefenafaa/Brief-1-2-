
 
export function loadData(resolved,rejected){

 fetch('https://flowboard-api-virid.vercel.app/cards', {
     
})
.then((res) =>{
   if (!res.ok) {
        throw new Error("Erreur HTTP : " + res.status);}
       
 return res.json()})

.then(data =>{
    product=data
    resolved(product)
     
    // console.log(product)
    // affiche(product)
}) 
.catch ( e =>{
    rejected()
  })
}
// loadData()
