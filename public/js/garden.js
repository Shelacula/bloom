import { fetchData } from "./main.js"
import {getCurrentUser} from "./player.js"

let currentUser = getCurrentUser()
let userId = currentUser.PlayerID
let gardenURL = "/garden/garden/" + userId

const gardenPlot = document.querySelector(".garden-plot")



fetch(gardenURL)
.then(data => {
if(!data.message) {
    return data.json()
}
}).then(garden => {
    garden.forEach(element => {
        console.log(element);
        let pname = element.PlantName
        let ptype = element.PlantID
        let glevel = element.GrowthLevel
        let html = `<div class="plant"><div class="plant-img-wrapper">
                <div class="plant-imgs">
                    <img src="images\\Bloom_1.png" class="pot-img">
                    <img src="images\\Bloom_1-${ptype}.png" class="flower" id="flower-1">
                    <img src="images\\Bloom_1-0.png" class="pot-back">
                </div>
            </div><div class="ptext">${pname}</div><div class="ptext">Growth: ${glevel}</div></div>`;
        gardenPlot.innerHTML += html;
    });
})
.catch(err => {
    console.log(err.message);
})