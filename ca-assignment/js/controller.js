'use-strict'

$(document).ready(() => { onInit() })

function onInit() {
    fetchPokemons()
}

function renderPokemon(pokemon) {
    const elContainer = document.querySelector('.poke-container')
    const elPokemon = document.createElement('div')
    elPokemon.classList.add('pokemon')

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const pokemonHTML = `
    <div onclick="onOpenModal(${pokemon.id})">
        <div class="image-container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" />
        </div>
        <div class="info>
            <span class="number">Weight: ${pokemon.weight}</span>
            <h3 class="name">${name}</h3>
        </div>
    </div>
    `
    elPokemon.innerHTML = pokemonHTML
    elContainer.appendChild(elPokemon)
}

function renderPokemonCard(cardUrl, pokemonName) {
    let strHTML = `
    <div class="modal-content">
            <div class="modal-header text-center">
                <span class="closeBtn" onclick="onCloseModal()">&times;</span>
                <h2>${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h2>
            </div>
            <div class="modal-body">
                <img src="${cardUrl}" />
            </div>
        <div class="modal-footer"></div>
    </div>
    `
    $('.modal').html(strHTML)
}

function onOpenModal(pokemonId) {
    $('.modal').css('display', 'block')
    let pokemon = getPokemonById(pokemonId)
    getPokemonCard(pokemon.name)
}

function onCloseModal() {
    $('.modal').css('display', 'none')
    $('.modal').html('')
}