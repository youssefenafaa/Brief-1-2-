
 
export function loadData(resolved,rejected){

 fetch('https://flowboard-api-virid.vercel.app/cards', {
     
})
.then((res) =>{
   if (!res.ok) {
        throw new Error("Erreur HTTP : " + res.status);}
       
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


export function filterData(resolved,rejected,priority){
  fetch("https://flowboard-api-virid.vercel.app/cards")
.then(res=>{
  if(!res.ok) throw new Error("Erreur HTTP : " + res.status)
    return res.json();

  })
  .then(data=>{
    let result=[]
    if(priority===""){
      result=data
    }
    else{
      result=data.filter(card=>{
        return card.priority===priority
      })
    }
    resolved(result)
  })
  .catch(e=>{
     rejected()
  })
}

