import { useEffect, useState } from "react"

const SearchBar = ({pokemonList, setPokemonToDisplay}) => {
  const [searchParam, setSearchParam] = useState("")
  
useEffect(()=>{
  const filteredList = pokemonList.filter((pokemon)=>{
    return pokemon.name.toLowerCase().includes(searchParam.toLowerCase());
  });
  setPokemonToDisplay(filteredList);
},[searchParam])

  return(
    <input type="text"
      placeholder="Search for Pokemon"
      value={searchParam}
      onChange={(e)=> {setSearchParam(e.target.value)}}
    ></input>
  )
}

export default SearchBar