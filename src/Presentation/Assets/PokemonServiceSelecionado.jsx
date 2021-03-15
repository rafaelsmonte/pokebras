import { useSelector } from "react-redux";
import store from "../../Store/store";
import { getPokemon } from "../../Store/Reducers/PokemonsAction";
let selecionado = "";
export function getSelecionado()
{
  return selecionado;
}
export function SelecionaPokemon(id)
{
  store.dispatch(getPokemon(id));
  
}
export function GetPokemonSelecionado()
{
  let result = useSelector((state) => state.PokemonReducer);
  const pokemon = result.pokemonSelecionado;
  selecionado = pokemon;
  return pokemon
}

