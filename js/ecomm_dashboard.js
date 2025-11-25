const welcomeTitle = document.getElementById("welcome_title");
const userText = sessionStorage.getItem('userSession');
const btnLogOut = document.getElementById("btnLogOut")

const userData =  JSON.parse(userText);


welcomeTitle.innerText = `Bienvenido ${userData.userName}`;



btnLogOut.onclick = () => { sessionStorage.clear(); 
    window.location.replace('index.html');
}