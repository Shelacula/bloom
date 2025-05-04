import { getCurrentUser, logout } from "./player.js";

// Fetch method implementation:
export async function fetchData(route = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:3000${route}`, {
      method: methodType, // *POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if (response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
}

const nav = document.querySelector("#nav-links");
const navBar = document.querySelector(".nav-bar")

if(getCurrentUser()){
  nav.innerHTML = `<a href="newplant.html" class="nav-link">Purchase Plant</a><a href="garden.html" class="nav-link">My Garden</a><span class="nav-link" id="logout">Logout</span>`;
  let registerForm = document.getElementById('logout')
  registerForm.addEventListener('click', logout)
  let statBar = document.createElement('div')
  statBar.classList.add('stat-bar')
  statBar.innerHTML = `<span class="money">Money: <span id="money"></span></span>`;
  navBar.insertAdjacentElement("afterend", statBar)
} else {
  nav.innerHTML = `<a href="register.html" class="nav-link">Register</a><a href="login.html" class="nav-link">Login</a>`;
}