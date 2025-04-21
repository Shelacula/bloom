let registerForm = document.getElementById('login-form')
registerForm.addEventListener('submit', login)

class User{
    constructor(uname, password){
        this.uname = uname;
        this.password = password;
    }
}

function login(e){
    e.preventDefault()
    let username = document.getElementById('uname').value
    let password = document.getElementById('pass').value

    let newUser = new User(username, password)
    console.log(newUser)
}