
import {product , loadData} from './api.js'
// console.log(loadData)

// let x=[]

document.addEventListener("DOMContentLoaded",()=>{
    loadData(afficheData,handelErreur)
})


function afficheData(cards){
    // console.log(cards)

 cards.forEach(element => {
    if(element.status=="todo"){
        // console.log(element)
      
    let cards1=document.querySelector(".secCards1")
    cards1.innerHTML +=
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
        let cards2=document.querySelector(".secCards2")
        cards2.innerHTML +=  
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
            <p class="createdAt">createdAt:${element.createdAt} </p>
            <p class="UpdatedAt">updatedAt:${element.updatedAt}</p>
     </div>

    </div>`
    }

    if(element.status=="done"){
        let cards3=document.querySelector(".seccards3")
        cards3.innerHTML+=
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


const sectionErreur=document.querySelector(".sectionErreur")
const buterreur=document.querySelector(".buterreur")
function handelErreur(){
    // console.log("errur")
    sectionErreur.classList.remove("hiden")
   buterreur.addEventListener("click",()=>{
    sectionErreur.classList.add("hiden")
      loadData(afficheData,handelErreur)

   })

}





            
const sectionCards=document.querySelector(".cars-section") 
const sectionCree=document.querySelector(".Partier-Cree")
const butCree=document.querySelector(".secBut")

butCree.addEventListener("click",()=>{
     sectionCards.classList.add("hiden")
     sectionCree.classList.remove("hiden")

})

const butAjouter=document.querySelector("#butAjo")
const InputTitle=document.querySelector(".inputTitle")
const InputDescription=document.querySelector(".inputDescription")
const SelectStatus=document.querySelector("#select-status")
const selectPriority=document.querySelector("#select-priority")
const Inputassingne=document.querySelector("#input-assignne")
const InputDate=document.querySelector("#Date")










function ajouterCard(element) {
// console.log(element)
    let card = `
        <div class="cards1">
            <p>id : ${element.id}</p>
            <p>title : ${element.title}</p>
            <p>description : ${element.description}</p>
            <p>status : ${element.status}</p>
            <p>priority : ${element.priority}</p>
            <p>assignee : ${element.assignee}</p>
            <p>dueDate : ${element.dueDate}</p>
        </div>
    `;

    let section = null;
  
    if (element.status === "todo") {
        section = document.querySelector(".secCards1");
       
    }
    else if (element.status === "in-Progress") {
        section = document.querySelector(".secCards2");
        // console.log("section")
    }
    else if (element.status === "done") {
        section = document.querySelector(".seccards3");
        
    }
    // console.log(card)

    section.innerHTML += card;

}








let CheksTitle=document.createElement('p')
let TitleChamp=document.querySelector(".TitleChamp")
let CheksAssignee=document.createElement('p')
let assigneeChamp=document.querySelector(".assigneeChamp")
let CheksDAte=document.createElement('p')
let DateChamp=document.querySelector(".DateChamp")



let cont = 0;
butAjouter.addEventListener("click", (e) => {

    e.preventDefault();
    CheksTitle.textContent=""
if(ValideTitle(InputTitle.value)==false){
CheksTitle.textContent="champs Invalide"
CheksTitle.style.color = "red"
 TitleChamp.appendChild(CheksTitle)

}
CheksAssignee.textContent=""
if(ValideTitle(Inputassingne.value)==false){
CheksAssignee.textContent="champs Invalide"
CheksAssignee.style.color = "red"
 assigneeChamp.appendChild(CheksAssignee)

}
CheksDAte.textContent=""
if(ValideDateFin(InputDate.value)==false){
    CheksDAte.textContent="champs Invalide"
CheksDAte.style.color = "red"
 DateChamp.appendChild(CheksDAte)
}


    let object = {
        id: ++cont,
        title: InputTitle.value,
        description: InputDescription.value,
        status: SelectStatus.value,
        priority: selectPriority.value,
        assignee: Inputassingne.value,
        dueDate: InputDate.value
    };

    ajouterCard(object);
if((ValideTitle(InputTitle.value)==true) && (ValideTitle(Inputassingne.value)==true)&&(ValideDateFin(InputDate.value)==true))
    {
sectionCree.classList.add("hiden");
    sectionCards.classList.remove("hiden");
}
    
    

});


   ///Valid Regex//////
function ValideTitle(Title){
     const regex = /^[A-Za-z]+$/;
     return regex.test(Title)
}

function ValideDateFin(date){
    if(date==""){
        return false}
        
    const dateNew= new Date();
    const dateFin=new Date(date);
    return !(dateFin<dateNew)
   

}