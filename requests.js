async function getPokemons(API) {
  let resultados = []
  const response = await axios.get(API + 'pokemon/?limit=151')
  resultados = response.data.results
  const resEjercicio = resultados.map((resultado, index) => {
    return {
      ...resultado,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index+1}.png`
    }
  })
  return resEjercicio
}

async function getSiglePokemons(API, id) {
  const response = await axios.get(API + 'pokemon/'+ id)
  return {
    ...response.data,
    imageHD: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`
  }
}