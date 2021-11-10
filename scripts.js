const BaseAPI = 'https://pokeapi.co/api/v2/'

function showPokemons(){
  const targetElement = document.getElementById('pokemonList')
  getPokemons(BaseAPI)
  .then(pokemones => {
    renderPokemons(pokemones, targetElement)
  })
}

