let myLeads = [];
let oldLeads = [];
const inputBtn = document.querySelector(".input-btn")
const inputEl = document.querySelector(".input-el")
const ulEL = document.querySelector(".ul-el")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const deleteBtn = document.querySelector(".delete-btn")
const tabBtn = document.querySelector(".tab-btn")


tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
   
    });



deleteBtn.addEventListener("dblclick", function() {
    console.log("double clicked!")
    localStorage.clear()
    myLeads = []
    render(myLeads)
})



if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads){
    let listItems = ""
    for(let i = 0; i<leads.length; i++){
        // listItems += "<li> <a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i]  + "</a> </li>"
        listItems += `
        <li>
            <a target='_blank' href="${leads[i]}">
                ${leads[i]}
            </a>
        </li>`
    }
    ulEL.innerHTML = listItems
}

inputBtn.addEventListener('click', function click(){
    myLeads.push(inputEl.value);
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads);
})







// localStorage.setItem("myLeads","www.abdulloh.com")
// console.log(localStorage.getItem("myLeads"));

// localStorage.setItem("myLeads", "www.oqayiq.uz");
// console.log(localStorage.getItem("myLeads"))
// localStorage.clear();

// ["lead1", "lead2"] or null

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()