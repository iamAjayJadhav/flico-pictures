import "./App.css"
import Header from "./components/Header/Header"
import Navbar from "./components/Header/Navbar"
import Trending from "./Pages/Trending/Trending"
import Movies from "./Pages/Movies/Movies"
import Series from "./Pages/Series/Series"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Container } from "@mui/material"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
          </Switch>
        </Container>
      </div>

      <Navbar />
    </BrowserRouter>
  )
}

export default App
