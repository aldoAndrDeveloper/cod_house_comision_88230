const welcomeTitle = document.getElementById("welcome_title");
const userText = sessionStorage.getItem('userSession');
const btnLogOut = document.getElementById("btnLogOut");
const btnAdd1 = document.getElementById("btn-add1");
const btnAdd2 = document.getElementById("btn-add2");

const userData =  JSON.parse(userText);


welcomeTitle.innerText = `Bienvenido ${userData.userName}`;
btnAdd1.onclick = () => { alert("¡Gracias por tu compra!") ;}
btnAdd2.onclick = () => { alert("¡Gracias por tu compra!") ;}

btnLogOut.onclick = () => { sessionStorage.clear(); 
    window.location.replace('index.html');
}