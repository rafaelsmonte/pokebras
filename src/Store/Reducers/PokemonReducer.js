const initialState = {
    pending: true,
    pokemon: [],
    error: null,
    pokemonSelecionado: [],
}
export default function reducer(state = initialState, action) {

    switch (action.type) {
        case 'getAllSucess':
            return {
                ...state,
                pokemon: action.payload.pokemons,
                pending: action.payload.pending,
            }
        case 'getPokemonSelecionado':
            return {
                ...state,
                pokemonSelecionado: action.payload.pokemonSelecionado,
            }
        default:
            return state;
    }
}