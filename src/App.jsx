import { Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import NavBar from "./Components/NavBar"
import Container from "react-bootstrap/esm/Container"
import AllPokemonPage from "./Pages/AllPokemonPage"
import Details from "./Pages/Details"

function App() {


  return (
    <>
      <NavBar/>
      <Container>
        <Routes>
          <Route path="/" element ={<Home/>}></Route>
          <Route path="/about" element ={<About/>}></Route>
          <Route path="/pokemon" element ={<AllPokemonPage/>}></Route>
          <Route path="/pokemon/:name" element ={<Details/>}></Route>
        </Routes>
      </Container>
    </>
  )
}

export default App
