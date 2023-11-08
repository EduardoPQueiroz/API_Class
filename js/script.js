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

function showPokemonList(){
    let listaPokemons = []
    fetch(baseurl + '?limit=151').then( Response => {
        if (Response.status == 200){
            listaPokemons = Response.json().then( json => {json.results.map( pokemon => { 
                let liPokemon = document.createElement("li")
                let liPokemonImg = document.createElement("img")
                fetch(pokemon.url).then(Response => { pokemonImg = Response.json().then( (pokemon) => {(liPokemonImg.src = pokemon.sprites.front_default)})})
                liPokemon.innerHTML = pokemon.name
                liPokemon.appendChild(liPokemonImg)
                document.getElementById("pokemonlist").appendChild(liPokemon)
            })
            return json})
            return listaPokemons
        }
    })
}