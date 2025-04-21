const express = require("express")
const Garden = require("../models/garden")
const router = express.Router()

router

.get('/garden', async (req, res) => {
    try {
      const garden = await Garden.getPlayerGarden(req.body.playerID)
      res.send(garden)
    } catch(err) {
      res.status(401).send({message: err.message})
    }
  })

  module.exports = router