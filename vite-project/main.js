import { food } from "./Food";
import {DOM} from "./DOM";


DOM.MainMenu.addEventListener("click", function(){
    DOM.Menupage.innerHTML = "";
    food.forEach((food) => DOM.Menupage.insertAdjacentHTML("beforeend", `
    <div class="card">
        <h1>${food.name}</h1>
        <h2>$${food.price}</h2>
        <img src="${food.img}">
    </div>
    `))
})
DOM.Georgian.addEventListener("click", function(){
    DOM.Menupage.innerHTML = "";
    food.filter((food) => food.nationality.includes("georgian"))
    .forEach((food) => DOM.Menupage.insertAdjacentHTML("beforeend", `
    <div class="card">
        <h1>${food.name}</h1>
        <h2>$${food.price}</h2>
        <img src="${food.img}">
    </div>
    `))
})
DOM.Armenian.addEventListener("click", function(){
    DOM.Menupage.innerHTML = "";
    food.filter((food) => food.nationality.includes("armenian"))
    .forEach((food) => DOM.Menupage.insertAdjacentHTML("beforeend", `
    <div class="card">
        <h1>${food.name}</h1>
        <h2>$${food.price}</h2>
        <img src="${food.img}">
    </div>
    `))
})
DOM.Khachapuri.addEventListener("click", function(){
    DOM.Menupage.innerHTML = "";
    food.filter((food) => food.type.includes("khachapuri"))
    .forEach((food) => DOM.Menupage.insertAdjacentHTML("beforeend", `
    <div class="card">
        <h1>${food.name}</h1>
        <h2>$${food.price}</h2>
        <img src="${food.img}">
    </div>
    `))
})