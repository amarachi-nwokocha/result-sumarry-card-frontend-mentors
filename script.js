import { data } from './data.js';
console.log(data);
let list = document.getElementById("categories")
data.map((item)=>{
    console.log(item);
    let icon = item.icon
    let category = item.category
    let score = item.score
    let section = document.createElement("section");
    section.setAttribute("id", "listItem");
    section.innerHTML=
    `
    <div class='flex-cont ${category}'>
    <div class='left'>
    <img src='${icon}'></img>
    <p>${category}</p>
    </div>
    <div class='right'>
    <p>${score}/100</p>
    </div>
    
    </div>
    `
    list.appendChild(section)
})