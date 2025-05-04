const express = require("express")
const Garden = require("../models/garden")
const router = express.Router()

router

.get('/garden/:id', async (req, res) => {
    try {
      const garden = await Garden.getPlayerGarden(req.params.id)
      res.send(garden)
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

.post('/buy', async (req, res) => {
  try {
    const garden = await Garden.buyPlant(req.body)
    res.send(garden)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

  module.exports = router