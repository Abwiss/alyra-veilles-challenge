"use strict"

const dateNow = moment();
// on met la langue en français
dateNow.locale("fr");

/*
// on affiche la date d'aujourd'hui en plusieurs formats
console.log("dddd", dateNow.format("dddd"));
console.log("YYYY", dateNow.format("YYYY"));
console.log("YY", dateNow.format("YY"));
console.log("MMMM", dateNow.format("MMMM"));
console.log("dddd D MMMM YYYY", dateNow.format("dddd D MMMM YYYY"));
console.log("dddd DD/MM/YYYY", dateNow.format("dddd DD/MM/YYYY"));
console.log("dddd DD/MM/YY", dateNow.format("dddd DD/MM/YY"));

// Choisis le format le plus adapté et ajoute un paragraphe au début de la page, juste après la titre h1, le contenu du paragrahe devrait être : "Nous sommes ...." avec la date du jour.
 
const h1 = document.querySelector("h1");

const dateP = document.createElement("p");

dateP.textContent = `Bonjour nous sommes le ${dateNow.format("dddd D MMMM YYYY")}`;

h1.after(dateP);
*/

const h1 = document.getElementById("h1")
console.log(h1)

let introP = `<p class="bg-primary text-center text-light py-3">Bonjour nous sommes le ${dateNow.format("dddd D MMMM YYYY")}</p>`
h1.insertAdjacentHTML("afterend", introP)