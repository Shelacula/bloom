const con = require("./db_connect")

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS Garden (
		GardenID int NOT NULL AUTO_INCREMENT,
	PlayerID int,
	PlantID int,
	PlantName varchar(50),
	GrowthLevel int,
	PRIMARY KEY (GardenID),
	FOREIGN KEY (PlayerID) REFERENCES Players(PlayerID),
	FOREIGN KEY (PlantID) REFERENCES Plants(PlantID)
    );`
  await con.query(sql)  
}

async function getPlayerGarden(playerID) {
  let sql = `
    SELECT g.PlantName, g.GrowthLevel, p.Cost, p.GrowTime, p.PlantID FROM Garden as g INNER JOIN Plants as p ON g.PlantID = p.PlantID WHERE g.PlayerID =${playerID}
  `
  return await con.query(sql)
}

async function buyPlant(plant) {
    let sql = `
      INSERT INTO Garden (PlayerID, PlantID, PlantName, GrowthLevel) VALUE (${plant.playerID}, ${plant.type}, "${plant.pname}", 0)
    `
    return await con.query(sql)
  }

  module.exports = { getPlayerGarden, buyPlant }
