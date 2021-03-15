
import React from "react";
import "../Assets/CSS/home.css";
import Index from '../Components/Index'
import store from '../../Store/store'
import { Provider } from 'react-redux'
import { getAllPokemons } from "../../Store/Reducers/PokemonsAction";

 store.dispatch(getAllPokemons())
function Home(){
return(
  <Provider store = {store}>
    <Index key={'1'}/>
  </Provider>
);
}
export default Home;


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals