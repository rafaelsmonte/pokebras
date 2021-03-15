import { useSelector } from "react-redux";
import store from "../../Store/store";
import { getPokemon } from "../../Store/Reducers/PokemonsAction";
let result;
export  function BuscarPorID(id)
{
  result =  useSelector((state) => state.PokemonReducer);
  const pokemons = result.pokemon;
  const pokemon =  pokemons.find(element => element.id === id);
  return pokemon
}
export function GetAll()
{
  result =  useSelector((state) => state.PokemonReducer);
  const pokemons = result.pokemon;
  return pokemons
}
export  function GetPokemon(id)
{
  store.dispatch(getPokemon(id));
  const pokemon = result.pokemonSelecionado;
  console.log(pokemon)
  return pokemon
}

