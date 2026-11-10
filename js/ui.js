
import {loadData} from './api.js'
// console.log(loadData)



document.addEventListener("DOMContentLoaded",()=>{
    loadData(afficheData)
})
function afficheData(cards){
    console.log(cards)
 cards.forEach(element => {
    if(element.status=="todo"){
        console.log(element)
      
    let box1=document.querySelector(".secCards1")
    box1.innerHTML +=
      `<div class="cards1">  
      
            <div>
            <p class="id"><strong> id : </strong> ${element.id}</p>
            <p class="title">
                    <strong>title :  </strong> ${element.title}</p>
            <p class="description">description : ${element.description}</p>
            <p class="status">status : ${element.status}</p>
            <p class="priority">priority : ${element.priority}</p>
            <p class="assignee">assignee : ${element.assignee}</p>
            <p class="dueDate">dueDate : ${element.dueDate}</p>
            <p class="tags">tags : ${element.tags}</p>
            <p class="createdAt">createdAt : ${element.createdAt}</p>
            <p class="UpdatedAt">updatedAt : ${element.updatedAt}</p>
            </div>
            </div>`
            

      
    }

    if(element.status=="in-progress"){
        let box2=document.querySelector(".secCards2")
        box2.innerHTML +=  
        `  <div class="cards2">
 
     <div>
            <p class="id">id : ${element.id}</p>
            <p class="title">title : ${element.title}</p>
            <p class="description">description : ${element.description} </p>
            <p class="status"> status : ${element.status}</p>
            <p class="priority">priority : ${element.priority}</p>
            <p class="assignee">assignee : ${element.assignee} </p>
            <p class="dueDate"> dueDate : ${element.dueDate} </p>
            <p class="tags">tags : ${element.tags}</p>
            <p class="createdAt">createdAt : ${element.createdAt} </p>
            <p class="UpdatedAt">updatedAt : ${element.updatedAt}</p>
     </div>

    </div>`
    }

    if(element.status=="done"){
        let box3=document.querySelector(".seccards3")
        box3.innerHTML+=
        `<div class="cards3">

           <div>
            <p class="id">id : ${element.id}</p>
            <p class="title">Title : ${element.title}</p>
            <p class="description">description : ${element.description} </p>
            <p class="status">status: ${element.status}</p>
            <p class="priority">priority : ${element.priority}</p>
            <p class="assignee">assignee :${element.assignee}</p>
            <p class="dueDate">dueDate : ${element.dueDate}</p>
            <p class="tags">tags : ${element.tags}</p>
            <p class="createdAt">createdAt : ${element.createdAt} </p>
            <p class="UpdatedAt">updatedAt : ${element.updatedAt}</p>
      </div>
      </div>`
    }
 });    
}

            
            


