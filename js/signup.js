
const btnSignUp = document.getElementById('btnSignUp');

btnSignUp.addEventListener('click', function() {
    validateFields();
});

function validateFields(){
    //guardaré los usuarios registrados en el localStorage para este proyecto
    //De aquí obtendo todos los datos de usuario 
    let usersList = JSON.parse(localStorage.getItem('users')) || [];

    const userName = document.getElementById('username').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    
    
    if (userName === '' || lastName === '' || email === '' || password === '' || password2 === '') {
        alert("Todos los campos son obligatorios");
    }else        
    if (password !== password2) {
        alert("Las contraseñas no coinciden");
    }else
    if(usersList.find(user => user.email === email)){
        alert("El usuario ya existe, intenta con otro correo");
    }else{
        //se crea el objeto JSON que se guardará en el localstorage
        const users = {
            userName: userName,
            lastName: lastName,
            email: email,
            password: password
        };
        usersList.push(users);
        localStorage.setItem('users', JSON.stringify(usersList));
        alert("Usuario registrado con éxito");
        window.history.back();

    }    
    
}