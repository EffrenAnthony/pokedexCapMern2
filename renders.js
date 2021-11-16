function renderPokemons(pokemones, htmlElement){
  const html = pokemones.map((pokemon)=> {
    let pokeSplit = pokemon.url.split('/')
    let idPoke = pokeSplit[pokeSplit.length - 2]
    return `
    <div class='col-sm-4'>
      <div class='imagen card' id='poke${idPoke}'>
        <img class='imagen card-img-top' src="${pokemon.image}" />
        <div class='card-body'>
          <h5 class='pokemon-item card-title'>${pokemon.name}</h5>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${pokemon.name}" onclick=(showPokemonDetail(${idPoke}))>
            Details
          </button>
          <div class="modal fade" id="${pokemon.name}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">${pokemon.name}</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" id='pokeinfo${idPoke}'>
                  <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
    
    `
  }).join('')
  htmlElement.innerHTML = html;
}

function renderDetailContent(details, id) {
  let element = document.getElementById(`pokeinfo${id}`)
  let html = `
    <h4>${details.weight}</h4>
    <img src="${details.imageHD}" class='w-50'/>
  `
  element.innerHTML = html
}


// function showDescription(id) {
//   let element = document.getElementById(id)
//   let child = document.createElement('h4')
//   child.innerText = 'Description'
//   element.appendChild(child)
// }



