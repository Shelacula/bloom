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
    constructor(plantName, type){
        this.pname = plantName;
        this.type = type
    }
}

function purchasePlant(e){
    e.preventDefault()
    let pname = document.getElementById('pname').value
    let type = document.getElementById('plant-select').value


    let newPlant = new Plant(pname, type)
    console.log(newPlant)
}