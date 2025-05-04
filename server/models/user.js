const con = require("./db_connect")

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS Players (
	PlayerID int NOT NULL AUTO_INCREMENT,
	Username varchar(255),
  Password varchar(255),
	FirstName varchar(255),
	LastName varchar(255),
	Email varchar(255),
	Money int,
	PRIMARY KEY (PlayerID)
    );`
  await con.query(sql)  
}
createTable()

// CRUD Operations
async function getAllUsers() {
  let sql = `SELECT * FROM Players`
  return await con.query(sql)
}

async function getMoney(userID){
  let sql = `
    SELECT money FROM Players
    WHERE PlayerID="${userID}"
  `
  return await con.query(sql)
}

// READ in CRUD: Logging in a user
async function login(user) {
  let cUser = await userExists(user.Username)
  console.log(cUser[0].Password)
  if(!cUser[0]) throw Error("Username does not exist!") 
  if(cUser[0].Password != user.Password) throw Error("Password is incorrect!")
  return cUser[0]
}

async function userExists(username) {
  let sql = `
    SELECT * FROM Players
    WHERE Username="${username}"
  `
  return await con.query(sql)
}

// CREATE in CRUD - Registering a user
async function register(user) {
  const cUser = await userExists(user.Username)
  if(cUser.length > 0) throw Error("Username already in use!")

  let sql = `
    INSERT INTO players(password, username, email, firstName, lastName, money)
    VALUES("${user.Password}", "${user.Username}", "${user.Email}", "${user.FirstName}", "${user.LastName}", 0)
  `
  await con.query(sql)

  return await login(user)
}


async function editUsername(user) {
  let sql = `
    UPDATE players SET
    username = "${user.username}"
    WHERE playerId = ${user.userId}
  `
  await con.query(sql)
  const currentUser = await userExists(user.username)
  return currentUser[0]
}

async function deleteAccount(user) {
  let sql = `
    DELETE FROM players
    WHERE playerId = ${user.userId}
  `
  await con.query(sql)
}

module.exports = { getAllUsers, login, register, editUsername, deleteAccount, getMoney }