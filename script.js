const inputBtn = document.querySelector(".input-btn")
const inputEl = document.querySelector(".input-el")
const ulEL = document.querySelector(".ul-el")
let myLeads = ["Abdulloh", "Sanjoar", "Rano"];


inputBtn.addEventListener('click', function click(){
    myLeads.push(inputBtn.value);
    console.log(myLeads)
})

for(let i = 0; i<myLeads.length; i++){

    ulEL.textContent += myLeads[i]

}

