import { fetchData } from "./main.js"
import {getCurrentUser} from "./player.js"
let plantSelect = document.getElementById('plant-select')
plantSelect.addEventListener('change', changePlantImg)

function changePlantImg(){
    let plantImg = document.getElementById('flower-1')
    let plantID = document.getElementById('plant-select').value
    let plantImgLink = `images\\Bloom_1-${plantID}.png`

    plantImg.src = plantImgLink
    console.log(plantImgLink)
}

let registerForm = document.getElementById('plant-form')
registerForm.addEventListener('submit', purchasePlant)

class Plant{
    constructor(plantName, type, id){
        this.pname = plantName;
        this.type = type
        this.playerID = id;
    }
}

function purchasePlant(e){
    e.preventDefault()
    let currentUser = getCurrentUser();
    let id = currentUser.PlayerID;
    let pname = document.getElementById('pname').value
    let type = document.getElementById('plant-select').value

    console.log(id)

    let newPlant = new Plant(pname, type, id)

    fetchData("/garden/buy", newPlant, "POST")
    .then(data => {})
    .catch(err => {
    console.log(err)
    })
    window.location.href = "garden.html"
}