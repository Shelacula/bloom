let registerForm = document.getElementById('reg-form')
registerForm.addEventListener('submit', register)

class User{
    constructor(email, uname, fname, lname, password){
        this.email = email;
        this.uname = uname;
        this.fname = fname;
        this.lname = lname;
        this.password = password;
    }
}

function register(e){
    e.preventDefault()
    let email = document.getElementById('email').value
    let username = document.getElementById('uname').value
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let password = document.getElementById('pass').value

    let newUser = new User(email, username, fname, lname, password)
    console.log(newUser)
}