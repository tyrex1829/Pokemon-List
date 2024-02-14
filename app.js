// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for(let i = 1; i <= 150; i++){

    const pokemon = document.createElement("div");
    pokemon.classList.add("pokemon");

    const img = document.createElement("img");
    const span = document.createElement("span");

    img.src = `${baseUrl}${i}.png`;
    span.innerText = `#${i}`;

    pokemon.appendChild(img);
    pokemon.appendChild(span);
    container.appendChild(pokemon);
}