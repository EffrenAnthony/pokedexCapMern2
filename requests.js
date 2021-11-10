async function getPokemons(API) {
  let resultados = []
  const response = await axios.get(API + 'pokemon/')
  resultados = response.data.results
  const resEjercicio = resultados.map((resultado, index) => {
    return {
      name: resultado.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index+1}.png`
    }
  })
  return resEjercicio
}