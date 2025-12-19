const welcomeTitle = document.getElementById("welcome_title");
const btnLogOut = document.getElementById("btnLogOut");
const container = document.getElementById("catalog-container");
const userText = sessionStorage.getItem('userSession');


if (userText) {
    const userData = JSON.parse(userText);
    welcomeTitle.innerText = `Bienvenido ${userData.userName}`;
} else {
    welcomeTitle.innerText = "Usuario invitado";
}

btnLogOut.onclick = () => {
    Swal.fire({
        title: 'Cerrar sesión',
        text: "Si deseas continuar comprando, presiona cancelar.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'red', 
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Cerrar Sesión',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            sessionStorage.clear();
            window.location.replace('index.html');
        }
    });
}

//Solo se mostrarán pokémons de la primer generación hasta el #151 de forma aleatoria.
const getRandomId = () => Math.floor(Math.random() * 151) + 1;

async function fetchPokemonData(id) {
    try {
        // nombre e imagen 
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        // Obtenemos la especie para sacar la descripción
        const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        const speciesData = await speciesResponse.json();
        
        console.log("json", speciesData);
        //flavor_text_entries es la parte del JSON donde se puede encontrar la descripicón de los pokemon en varias lineas en diferente lenguajes 
        const spanishEntry = speciesData.flavor_text_entries.find(entry => entry.language.name === 'es');
        
        // Si no hay español, usamos la primera disponible, y limpiamos saltos de línea raros
        const description = spanishEntry ? spanishEntry.flavor_text : "Ups!, no tengo una descripción.";

        return {
            name: "Peluche Pokémon Shiny de " + data.name,
            image: data.sprites.front_shiny, // los peluches serán shiny 
            desc: description.replace(/[\n\f]/g, ' '), // limpieza del texto de descripción para quitar saltos de linea
            price: Math.floor(Math.random() * 150) + 1, // precio aleatorio, máximo 150 dolares
            stock: 10   
        };

    } catch (err) {
        console.error("Error ", err);
        return null;
    }
}

// Función para crear la tarjeta HTML e inyectarla en el DOM
function createCard(pokemon) {
    // Creamos el div de la tarjeta
    const card = document.createElement('div');
    
    // Usamos Template Literals para llenar el HTML
    card.innerHTML = `
        <div class="card-body">
            <img src="${pokemon.image}" class="card-img">
            <h3 class="card-title" style="text-transform: capitalize;"> <b>${pokemon.name}</b></h3>
            <p class="card-desc" style="font-size: 0.9em; height: 60px; overflow-y: auto;">
              <i>Dato curioso:</i>
                ${pokemon.desc}
            </p>
            <div class="card-footer">
                <span class="price">$${pokemon.price} dlls.</span>
                <span class="stock">Stock: ${pokemon.stock}</span>
            </div>
            <button class="btn-add">Comprar</button>
        </div>
    `;

    const btnAdd = card.querySelector('.btn-add');
    
    btnAdd.onclick = () => {
        Swal.fire({
            title: '¡Transacción éxitosa!',
            text: `Has comprado un peluche de ${pokemon.name}.`,
            icon: 'success',
            confirmButtonText: 'Seguir comprando',
            confirmButtonColor: '#007bff' 
        });
    };

    container.appendChild(card);
}

async function loadCatalog() {
    for (let i = 0; i < 4; i++) {
        const randomId = getRandomId();
        const pokemonData = await fetchPokemonData(randomId);        
        if (pokemonData) {
            createCard(pokemonData);
        }
    }
}

//cargamos del catálogo
loadCatalog();
