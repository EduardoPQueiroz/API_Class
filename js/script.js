const baseurl = "https://pokeapi.co/api/v2/pokemon/"

function getPokemonlist(){
    let listaPokemons = []
    fetch(baseurl + '?limit=151').then(Response => {
        if (Response.status == 200){
            listaPokemons = Response.json().then( json => {json.results.map(pokemon => {console.log(pokemon.name)})
            return json})
            return listaPokemons
        }
    })
}

 function showPokemons(){
    let listaPokemons = []
    fetch(baseurl + '?limit=151').then(Response => {
        if (Response.status == 200){
            listaPokemons = Response.json().then( json => {json.results.map(pokemon => {
                let pokemonlist = document.createElement("li")
                let pokemonimgs = document.createElement("img")
                fetch(pokemon.url).then(Response => { pokemonImg = Response.json().then((pokemonimg.src = pokemon.sprites.front_default))})
                pokemonlist.innerHTML = pokemon.name
                document.getElementById("listaPokemons").appendChild(pokemonlist)
                document.getElementById("listaPokemons").appendChild(pokemonimgs)
            })
            return json})
            return listaPokemons
        }
    })
}