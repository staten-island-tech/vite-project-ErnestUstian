import "./style.css";
import { food } from "./Food";
import {DOM} from "./DOM";


DOM.MainMenu.addEventListener("click", function(){
    food.forEach((food) => DOM.Menupage.insertAdjacentHTML("beforeend", `
    <div>
     <img src="${food.img}"><img>
     <h1>${food.price}</h1>
    </div>
    `))
   
    
})
