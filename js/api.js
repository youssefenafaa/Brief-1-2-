

// export function loadData(resolved,rejected){

//  fetch('https://flowboard-api-virid.vercel.app/cards', {

// })
// .then((res) =>{
//    if (!res.ok) {
//         throw new Error("Erreur HTTP : " + res.status);}

//  return res.json()})

// .then(data =>{

//     resolved(data)

//     // console.log(product)
//     // affiche(product)
// }) 
// .catch ( e =>{
//     rejected()
//   })
// }
// // loadData()


// export function filterDataServer(title,priority,membres,resolved,rejected){
//   const trget="/cards"
//   const path="https://flowboard-api-virid.vercel.app"
// const Url=new URL(trget,path)

// if(title){
// Url.searchParams.set("title_like",title)
// }
// if(priority){
// Url.searchParams.set("priority",priority)
// }
// if(membres){
//   Url.searchParams.set("assignee",membres)
// }
//   fetch(Url.toString())
// .then((res) =>{
//    if (!res.ok) {
//         throw new Error("Erreur HTTP : " + response.status);}

//  return res.json()})
//  .then(data =>{

//     resolved(data)

// }) 
// .catch ( e =>{
//     rejected()
//   })
// }





export async function recup(resolved,rejected) {

  try {

    let response = await axios.get('https://flowboard-api-virid.vercel.app/cards?')


    resolved(response.data)
  }

  catch (error) {
    rejected(error)
  }
}



export async function filterData(title,priority,membres,resolved,rejected){
    const objet = {}
  if (title) {
    objet.title_like= title
  }
  if (priority) {
    objet.priority = priority

  }
  if (membres) {
    objet.assignee = membres
  }

  try{
       let response = await axios.get('https://flowboard-api-virid.vercel.app/cards?', {
      params: objet,
    })
    resolved(response.data)
  }
catch (error){
 rejected(error)
}
}

