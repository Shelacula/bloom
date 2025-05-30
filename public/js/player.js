import { fetchData } from "./main.js"
let loginForm = document.getElementById('login-form')
if(loginForm) loginForm.addEventListener('submit', login)

function login(e) {
  e.preventDefault()
  let errorSection = document.getElementById("error")

  let username = document.getElementById('uname').value
  let password = document.getElementById('pass').value

  if(validString(username)) {
    errorSection.innerText = `Username cannot be blank`
  } else {
    errorSection.innerText = ""  

    const user = {
      Username: username,
      Password: password
    }

    fetchData('/users/login', user, "POST")
    .then(data => {
      if(!data.message) {
        setCurrentUser(data)
        window.location.href = "index.html"
      }
    })
    .catch(err => {
      errorSection.innerText = `${err.message}`
    })
  
    let section = document.getElementById("welcome")
    section.innerHTML = `Welcome, ${username}!`
  
    console.log(user)
  }
  document.getElementById('uname').value = ""
  document.getElementById('pass').value = ""

}

function validString(word) {
  return word == ""
}

// register form code
let registerForm = document.getElementById("reg-form")
if(registerForm) registerForm.addEventListener('submit', register)

function register(e) {
  e.preventDefault() 

  let errorSection = document.getElementById("error")

  const user = {
    Username: document.getElementById("uname").value,
    Password: document.getElementById("pass").value,
    FirstName: document.getElementById("fname").value,
    LastName: document.getElementById("lname").value,
    Email: document.getElementById("email").value
  }

  fetchData("/users/register", user, "POST")
  .then(data => {
    if(!data.message) {
      setCurrentUser(data)
      window.location.href = "index.html"
    }
  })
  .catch(err => {
    errorSection.innerText = `${err.message}`
  })
}  

// local storage functions
function setCurrentUser(user) {
  localStorage.setItem('user', JSON.stringify(user))
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'))
}

export function removeCurrentUser() {
  localStorage.removeItem('user')
  window.location.href = "index.html"
}

export function logout() {
  removeCurrentUser();
  window.location.href = "index.html"
}