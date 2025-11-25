        const btnLogin = document.getElementById('btnLogin');
        const btnSignUp = document.getElementById('btnSignUp')

        
        btnLogin.addEventListener('click', function() {
            

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
    
            //traigo todos los valores guardados en el local storage
            let usersList = JSON.parse(localStorage.getItem('users')) || [];
        
            //se busca al usuario y el password correspondiente
            const userFound = usersList.find(user => 
                user.email === email && user.password === password
            );

            //Si se hace login se guarda el usuario en el SessionStorage
            if (userFound) {
                sessionStorage.setItem('userSession', JSON.stringify(userFound));
                //puse un replace para que al dar hacia atras no se mandé al login si no al dashboard 
                window.location.replace ('ecommerce.html');
            } else {
            alert("Usuario y/o contraseña incorrectos");
            }
        });

        btnSignUp.onclick = () => { window.location.href = 'signup.html' }