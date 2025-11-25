// Referencias a los elementos del DOM
        const btnLogin = document.getElementById('btnLogin');
        const btnSignUp = document.getElementById('btnSignUp')
        // 3. EVENTO DEL BOTÓN
        btnLogin.addEventListener('click', function() {
            
            // Obtener los valores actuales de los inputs

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
    
            let usersList = JSON.parse(localStorage.getItem('users')) || [];
        
            const userFound = usersList.find(user => 
                user.email === email && user.password === password
            );

            if (userFound) {
                sessionStorage.setItem('userSession', JSON.stringify(userFound));
                window.location.replace ('ecommerce.html');
            } else {
            alert("Usuario y/o contraseña incorrectos");
            }
        });

        btnSignUp.onclick = () => { window.location.href = 'signup.html' }