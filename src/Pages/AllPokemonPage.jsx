import { useState, useEffect } from "react"
import SearchBar from "../Components/SearchBar";
import { useNavigate } from "react-router-dom";

const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=1302&offset=0'

const AllPokemonPage = () => {

  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonToDisplay, setPokemonToDisplay] = useState([]);
  const navigate = useNavigate();

  const fetchAllPokemon = async () =>{
    try{
    const response = await fetch(API_URL)
    const result = await response.json()
    console.log(result.results);
    setPokemonList(result.results)
    setPokemonToDisplay(result.results)
    }catch(error){
      alert(error)
    }
  }

  useEffect(()=>{
    fetchAllPokemon()
  }, []);

  return(
    <>
    <h2>All Pokemon!</h2>
    <SearchBar 
    pokemonList={pokemonList}
    setPokemonToDisplay={setPokemonToDisplay}
    />
      {pokemonToDisplay.map((pokemon) => {
        return(
          <>
            <div key={`${pokemon.name}`} className="card btn btn-warning" onClick={()=>{
              navigate(`/pokemon/${pokemon.name}`)
            }}>{pokemon.name}</div>
          </>
        )
      })}
    </>
  )
}

export default AllPokemonPage