import { food } from "./Food";
import {DOM} from "./DOM";


DOM.MainMenu.addEventListener("click", function(){
    food.forEach((food) => DOM.Menupage.insertAdjacentHTML("beforeend", `
    <div class="card">
        <h1>${food.name}</h1>
        <h2>${food.price}</h2>
        <img src="${food.img}">
    </div>
    `))
   
    
})
