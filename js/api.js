


export async function recup() {

  
   const response= await axios.get('https://flowboard-api-virid.vercel.app/cards?')

  return response.data
    
  
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



export async function GetCatds(id) {

  
   return await axios.get('https://flowboard-api-virid.vercel.app/cards/'+id)

  
}




//PUT Modifier La carte

export async function  MOdifierCarte(id,cards){
  
const options = {
  method: 'PUT',
  url: 'https://flowboard-api-virid.vercel.app/cards/'+id+'?password=1234',
  headers: {
    'X-Workspace': 'public',
    'Content-Type': 'application/json'
  },
  data: cards
}

try {
  const { data } = await axios.request(options)
  return data
  // console.log("ahhhhhh",data)
} catch (error) {
  console.error(error)
  throw error

}
 
 
  
} 
//DELETE////
export async function supprimerCarte(id) {
    return await axios.delete(
        'https://flowboard-api-virid.vercel.app/cards/' + id + '?password=1234',
        
    );
}




///chengment Status//
export async function changementStatus(id,statusValue) {
  const options = {
  method: 'PATCH',
   url: 'https://flowboard-api-virid.vercel.app/cards/'+id+'?password=1234',
  headers: {
    'X-Workspace': 'public',
    'Content-Type': 'application/json'
  },
  data: {
    status: statusValue
  }
}

try {
  const { data } = await axios.request(options)
  // console.log(data)
} catch (error) {
  console.error(error)
}
  
}


