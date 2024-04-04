import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

const API_SINGLE = 'https://pokeapi.co/api/v2/pokemon'


const Details = () =>{

  const {name} = useParams();
  const[pokemonDetails, setPokemonDetails] = useState({});
  const navigate = useNavigate();

  const fetchPokemonDetails = async () => {
    try{
      const response = await fetch(`${API_SINGLE}/${name}`);
      const result = await response.json();
      console.log(result);
      setPokemonDetails(result);
    }catch(error){
      alert("Error")
    }
  }

  useEffect(()=> {
    fetchPokemonDetails();
  }, []);

  return(
    <>
    {
      !pokemonDetails.sprites ? 
      (<h2>Loading...</h2>) : (
        <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pokemonDetails.sprites.front_default} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Species: {pokemonDetails.species.name}
        </Card.Text>
        <Button variant="primary" onClick={()=>{navigate("/pokemon")}}>Back</Button>
      </Card.Body>
    </Card> 
      </>
      )

    }
    </>  
  )
}

export default Details


