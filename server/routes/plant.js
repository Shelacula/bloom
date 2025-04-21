const express = require("express")
const Plant = require("../models/plant")
const router = express.Router()

router

.get('/getPlant', async (req, res) => {
  try {
    const plant = await Plant.getPlant(req.body.plantID)
    res.send(plant)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

module.exports = router