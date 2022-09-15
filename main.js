const input = document.querySelector("input");
const button = document.querySelector("button");
const pokemonContainer = document.querySelector(".pokemon-container");

button.addEventListener('click', (e) =>{
    e.preventDefault();
    mostrarPoke(input.value);
})

function mostrarPoke(pokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then((res) => res.json())

    .then((data) => console.log(data));
}



