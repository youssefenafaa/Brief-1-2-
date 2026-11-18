import * as api from './api.js'
import * as ui from './ui.js'
import * as data from './data.js'


//affichage//

document.addEventListener("DOMContentLoaded",async()=>{
    try{
        const cards= await api.recup()
        ui.afficheData(cards)
        const butSupprimer=ui.getBoutonsSupprimer()
butSupprimer.forEach(but => {
    but.addEventListener("click",async(e)=>{
              const id=e.currentTarget.dataset.id
            //   console.log(id)
            try{
                await api.supprimerCarte(id)
                const cards=await api.recup()
                ui.afficheData(cards)
            }
            catch(error){
                   console.log(error)
            }
    })
});
        
    }
    catch (error){
        ui.handelErreur(api.recup)
    }
   
   
})






///ajouter //

// const sectionCards = document.querySelector(".cars-section")
// const sectionCree = document.querySelector(".Partier-Cree")
// const butCree = document.querySelector(".secBut")

// butCree.addEventListener("click", () => {
//     sectionCards.classList.add("hiden")
//     sectionCree.classList.remove("hiden")

// })



// const butAjouter = document.querySelector("#butAjo")
// const InputTitle = document.querySelector(".inputTitle")
// const InputDescription = document.querySelector(".inputDescription")
// const SelectStatus = document.querySelector("#select-status")
// const selectPriority = document.querySelector("#select-priority")
// const Inputassingne = document.querySelector("#input-assignne")
// const InputDate = document.querySelector("#Date")

// let CheksTitle = document.createElement('p')
// let TitleChamp = document.querySelector(".TitleChamp")
// let CheksAssignee = document.createElement('p')
// let assigneeChamp = document.querySelector(".assigneeChamp")
// let CheksDAte = document.createElement('p')
// let DateChamp = document.querySelector(".DateChamp")



// let cont = 0;
// butAjouter.addEventListener("click", (e) => {

//     e.preventDefault();
//     CheksTitle.textContent = ""
//     if (ui.ValideTitle(InputTitle.value) == false) {
//         CheksTitle.textContent = "champs Invalide"
//         CheksTitle.style.color = "red"
//         TitleChamp.appendChild(CheksTitle)

//     }
//     CheksAssignee.textContent = ""
//     if (ui.ValideTitle(Inputassingne.value) == false) {
//         CheksAssignee.textContent = "champs Invalide"
//         CheksAssignee.style.color = "red"
//         assigneeChamp.appendChild(CheksAssignee)

//     }
//     CheksDAte.textContent = ""
//     if (ui.ValideDateFin(InputDate.value) == false) {
//         CheksDAte.textContent = "champs Invalide"
//         CheksDAte.style.color = "red"
//         DateChamp.appendChild(CheksDAte)
//     }


//     let object = {
//         id: ++cont,
//         title: InputTitle.value,
//         description: InputDescription.value,
//         status: SelectStatus.value,
//         priority: selectPriority.value,
//         assignee: Inputassingne.value,
//         dueDate: InputDate.value
//     };


//    ui.ajouterCard(object);
//     if ((ui.ValideTitle(InputTitle.value) == true) && (ui.ValideTitle(Inputassingne.value) == true) && (ui.ValideDateFin(InputDate.value) == true)) {
//         sectionCree.classList.add("hiden");
//         sectionCards.classList.remove("hiden");
//     }



// });


// filtrage/


// const inputRecherche = document.querySelector(".recherche")
// const filterSlectPriority = document.querySelector("#selectPriority")
// const filterSelectMembers = document.querySelector("#select-membres")

 function appliqueFilter() {
    api.filterData(ui.inputRecherche.value, ui.filterSlectPriority.value, ui.filterSelectMembers.value, ui.afficheData, ui.handelErreur)

}





ui.inputRecherche.addEventListener("input", appliqueFilter)

ui.filterSlectPriority.addEventListener("change", appliqueFilter)

ui.filterSelectMembers.addEventListener("change", appliqueFilter)



//renislialiser
const butReaniliser = document.querySelector(".butReaniliser");
// console.log(butReaniliser)
butReaniliser.addEventListener("click", () => {
   ui.inputRecherche.value = ""
    ui.filterSlectPriority.value = ""
    ui.filterSelectMembers.value = ""
    ui.afficheData(cards);
//    api.recup()
// (ui.afficheData, ui.handelErreur)
})



///MOdifier La carte
const butModiferCarte=document.querySelector("#butModifer")
let formm=document.querySelector("#cardData");


formm.addEventListener("submit", async (e) => {
    e.preventDefault();

    let exDataForm = new FormData(e.currentTarget);
    let dataModifier = Object.fromEntries(exDataForm);

    let id = butModiferCarte.dataset.id;

    console.log("ID:", id);
    console.log("Data:", dataModifier);

    try {
        await api.MOdifierCarte(id, dataModifier);

        const cards = await api.recup();
        ui.afficheData(cards);

        

document.querySelector(".Partier-Cree").classList.add("hiden");
document.querySelector(".cars-section").classList.remove("hiden");

    } catch (error) {
        console.error("Erreur modification :", error);
    }
});


 

//but Supprimer///

const butSupprimer=ui.getBoutonsSupprimer()
butSupprimer.forEach(but => {
    but.addEventListener("click",async(e)=>{
              const id=e.currentTarget.dataset.id
            //   console.log(id)
            try{
                await api.supprimerCarte(id)
                const cards=await api.recup()
                ui.afficheData(cards)
            }
            catch(error){
                   console.log(error)
            }
    })
});