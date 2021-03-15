import React from "react";
import "../Assets/CSS/home.css";
import Pokemon from "../Components/Pokemon";
import store from "../../Store/store";
import { Provider } from "react-redux";
import { getAllPokemons } from "../../Store/Reducers/PokemonsAction";
store.dispatch(getAllPokemons());

function GetPokemon() {
  return (
    <Provider store={store}>
      <Pokemon />
    </Provider>
  );
}
export default GetPokemon;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
