let product =[]
 
export function loadData(affiche){

 fetch('https://flowboard-api-virid.vercel.app/cards', {
      headers: {
    'X-Workspace': 'public'
  }
})
.then((res) => res.json())
.then(data =>{
    product=data
    // console.log(product)
    affiche(product)
} )
}
// loadData()
