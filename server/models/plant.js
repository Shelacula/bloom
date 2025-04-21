const con = require("./db_connect")

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS Plants (
	PlantID int NOT NULL,
	Cost int,
	GrowTime int,
	RecipeValue int,
	PRIMARY KEY (PlantID)
);`
  await con.query(sql)  
}

async function getPlant(plantID) {
  let sql = `
    SELECT * FROM Plants
    WHERE PlantID="${plantID}"
  `
  return await con.query(sql)
}

module.exports = { getPlant }