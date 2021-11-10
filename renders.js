function renderPokemons(pokemones, htmlElement){
  const html = pokemones.map(pokemon => {
    return `
      <div class='imagen'>
        <h2 class='pokemon-item'>${pokemon.name}</h2>
        <img class='imagen' src="${pokemon.image}" />
      </div>
    
    `
  }).join('')
  htmlElement.innerHTML = html;
}