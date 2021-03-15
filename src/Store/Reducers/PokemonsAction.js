import axios from 'axios';

export function getPokemons(id) {
    return (dispatch) => {
        return axios.get('https://pokeapi.co/api/v2/pokemon/' + id).then((response) => {
            dispatch(getPokemon(response));
        })
    }
}
export function getAllPokemons() {
    return (dispatch) => {
        var promises = []
        var pokemons = []

        for (var i = 1; i < 152; i++) {
            promises.push(axios.get('https://pokeapi.co/api/v2/pokemon/' + i));
        }
        Promise.all(promises).then((values) => {
            values.forEach(response => {
                var foto = response.data.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default
                var tipoArray = response.data.types
                var tipo = [];
                var id = response.data.id
                var nome = response.data.name
                tipoArray.forEach(tp => {
                    tipo.push(tp.type.name)
                });

                pokemons.push({
                    foto,
                    tipo,
                    id,
                    nome
                })

            });
            dispatch(getAll(pokemons));

        })
    }
}
export function getPokemon(id) {
    return (dispatch) => {
        var dadosGerais = axios.get('https://pokeapi.co/api/v2/pokemon/' + id);
        var pokedex = axios.get('https://pokeapi.co/api/v2/pokemon-species/' + id);


        Promise.all([dadosGerais, pokedex]).then((values) => {
            var promisesTipo = []
            var resultDadosGerais = values[0];
            var resultPokedex = values[1];
            var pokedexArray = resultPokedex.data.flavor_text_entries;
            var stats = []
            var pokedexes = []
            var statsArray = resultDadosGerais.data.stats
            var foto = resultDadosGerais.data.sprites.versions["generation-vii"]["ultra-sun-ultra-moon"].front_default
            var tipoArray = resultDadosGerais.data.types
            var tipo = [];
            var id = resultDadosGerais.data.id
            var nome = resultDadosGerais.data.name
            tipoArray.forEach(tp => {
                tipo.push(tp.type.name)
                promisesTipo.push(axios.get('https://pokeapi.co/api/v2/type/' + tp.type.name))
            });
            statsArray.forEach(stat => {
                stats.push({
                    baseStat: stat.base_stat,
                    statName: arrumaNomeAtaques(stat.stat.name)
                })
            });
            pokedexArray.forEach(pokedex => {
                if (pokedex.language.name === 'en') {
                    var text = pokedex.flavor_text.replace(/(\r\n|\n|\r)/gm, ' ');
                    text = text.replace('', ' ');
                    pokedexes.push({
                        pokedex: text
                    })
                }
            });
            Promise.all(promisesTipo).then((values) => {
                var doubleDamageFrom = [];
                var doubleDamageTo = [];

                values.forEach(element => {
                    var damageRelations = element.data.damage_relations;
                    damageRelations.double_damage_from.forEach(from => {
                        doubleDamageFrom.push(from.name)
                    });
                    damageRelations.double_damage_to.forEach(to => {
                        doubleDamageTo.push(to.name)
                    });
                });
                doubleDamageTo = doubleDamageTo.filter(somenteChavesUnicas)
                doubleDamageFrom = doubleDamageFrom.filter(somenteChavesUnicas)

                var pokemonSelecionado = {
                    stats,
                    pokedexes,
                    foto,
                    tipo,
                    id,
                    nome,
                    doubleDamageTo,
                    doubleDamageFrom
                }
                dispatch(getPokemonSelecionado(pokemonSelecionado));
            })


        })
    }
}

function getAll(pokemons) {

    return {
        type: "getAllSucess",
        payload: {
            pokemons: pokemons,
            pending: false,
        }
    }
}

function getPokemonSelecionado(pokemon) {

    return {
        type: "getPokemonSelecionado",
        payload: {
            pokemonSelecionado: pokemon,
            pending: false,
        }
    }
}

function somenteChavesUnicas(value, index, self) {
    return self.indexOf(value) === index;
}

function arrumaNomeAtaques(atk) {
    switch (atk) {
        case 'hp':
            return 'HP'
        case 'attack':
            return 'ATK'
        case 'defense':
            return 'DEF'
        case 'special-attack':
            return 'SP ATK'
        case 'special-defense':
            return 'SP DEF'
        case 'speed':
            return 'SPEED'

        default:
            break;
    }
}