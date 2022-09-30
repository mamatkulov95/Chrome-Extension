let myLeads = [];
const inputBtn = document.querySelector(".input-btn")
const inputEl = document.querySelector(".input-el")
const ulEL = document.querySelector(".ul-el")



inputBtn.addEventListener('click', function click(){
    myLeads.push(inputEl.value);
    inputEl.value = ""
    renderLeads();
})


function renderLeads(){
    let listItems = ""
    for(let i = 0; i<myLeads.length; i++){
        // listItems += "<li> <a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i]  + "</a> </li>"
        listItems += `
        <li>
            <a target='_blank' href="${myLeads[i]}">
                ${myLeads[i]}
            </a>
        </li>`
    }
    ulEL.innerHTML = listItems
}
