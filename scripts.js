const BaseAPI = 'https://pokeapi.co/api/v2/'
let pokelist = []


function showPokemons(){
  const targetElement = document.getElementById('pokemonList')
  getPokemons(BaseAPI)
  .then(pokemones => {
    pokelist = [...pokemones]
    renderPokemons(pokemones, targetElement)
  })
}

async function showPokemonDetail(id){
  // getSiglePokemons(BaseAPI, id)
  // .then(details => {
  //   renderDetailContent(details, id)
  // })
  let details = await getSiglePokemons(BaseAPI, id)
  renderDetailContent(details, id)
}

function filterPokemonsByName(){
  let str = document.getElementById('pokesearch').value
  const filteredList = pokelist.filter(item => item.name.toLowerCase().includes(str.toLowerCase()))
  const targetElement = document.getElementById('pokemonList')
  renderPokemons(filteredList, targetElement)
}


showPokemons()

// let inputSearch = document.getElementById('pokesearch')
// inputSearch.addEventListener('onchange', () => {
//   console.log('hgola');
//   let value = inputSearch.value
//   filterPokemonsByName(value)
// })