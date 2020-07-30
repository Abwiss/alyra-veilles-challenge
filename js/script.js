"use strict"

const dateNow = moment();
dateNow.locale("fr");
const h1 = document.getElementById("h1")
console.log(h1)
let introP = `<p class="bg-primary text-center text-light py-3">Bonjour nous sommes le ${dateNow.format("dddd D MMMM YYYY")}</p>`
h1.insertAdjacentHTML("afterend", introP)

function insertVeilles() {
    const listeVeilles = document.getElementById('liste-veilles')
    const ulEl = document.createElement('ul')
    ulEl.classList.add('row', 'list-unstyled')
    console.log(ulEl)
    for (let el of entries) {
        console.log(el)
        const li = document.createElement('li')
     //   li.classList.add()
     li.innerHTML = `<div>
     <h2 class="card">${el.subject}</h2>
     <p>${el.category}</p>
     <p>${el.date}</p>
    
     </div>`
     ulEl.append(li)
    }
   listeVeilles.prepend(ulEl)
}

insertVeilles()

