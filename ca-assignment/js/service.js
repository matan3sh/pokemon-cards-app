'use-strict'

var gPokemons = []

const SIZE = 30
const KEY = 'pokemons'

function fetchPokemons() {
    let pokemons = loadFromStorage(KEY)
    if (pokemons) {
        pokemons.forEach(pokemon => renderPokemon(pokemon))
        gPokemons = pokemons
    } else for (let i = 1; i <= SIZE; i++) getPokemon(i)
    sortPokemonByAlphaBet(gPokemons)
}

function getPokemon(id) {
    $.get(`https://pokeapi.co/api/v2/pokemon/${id}`, response => {
        gPokemons.push(response)
        renderPokemon(response)
        saveToStorage(KEY, gPokemons);
    })
}

function getPokemonCard(pokemonName) {
    $.get(`https://api.pokemontcg.io/v1/cards?name=${pokemonName}`, response => {
        renderPokemonCard(response.cards[0].imageUrl, pokemonName)
    })
}

function getPokemons() {
    return gPokemons
}

function getPokemonById(pokemonId) {
    return gPokemons.find(pokemon => pokemon.id === pokemonId)
}

function sortPokemonByAlphaBet() {
    let pokemons = getPokemons()
    gPokemons = pokemons.sort((pokemonA, pokemonB) =>
        pokemonA.name < pokemonB.name
            ? -1
            : pokemonA.name > pokemonB.name
                ? 1
                : 0
    );
    $('.poke-container').html('')
    gPokemons.forEach(pokemon => renderPokemon(pokemon))
}