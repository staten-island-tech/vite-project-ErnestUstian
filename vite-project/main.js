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
DOM.food.addEventListener("click", function(){
    DOM.Menupage.innerHTML = "";
    food.filter((food) => food.group.includes("food"))
    .forEach((food) => DOM.Menupage.insertAdjacentHTML("beforeend", `
    <div class="card">
        <h1>${food.name}</h1>
        <h2>$${food.price}</h2>
        <img src="${food.img}">
    </div>
    `))
})
DOM.sweet.addEventListener("click", function(){
    DOM.Menupage.innerHTML = "";
    food.filter((food) => food.group.includes("sweet"))
    .forEach((food) => DOM.Menupage.insertAdjacentHTML("beforeend", `
    <div class="card">
        <h1>${food.name}</h1>
        <h2>$${food.price}</h2>
        <img src="${food.img}">
    </div>
    `))
})
DOM.drink.addEventListener("click", function(){
    DOM.Menupage.innerHTML = "";
    food.filter((food) => food.group.includes("drink"))
    .forEach((food) => DOM.Menupage.insertAdjacentHTML("beforeend", `
    <div class="card">
        <h1>${food.name}</h1>
        <h2>$${food.price}</h2>
        <img src="${food.img}">
    </div>
    `))
})

DOM.Warm.addEventListener("click", function(){
    if (document.body.classList.contains("cool")){
        document.body.classList.add("warm")
        document.body.classList.remove("cool")
    } else {
        document.body.classList.add("cool")
        document.body.classList.remove("warm")
    }
})