import "./scss/main.scss";
import database from "./database.json";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import Home from "./components/Home";
import List from "./components/List";
import Create from "./components/Create";
import ProductContext from "../src/components/ProductContext";

function App() {
  const [entry, setEntry] = useState("");
  const [search, setSearch] = useState([]);

  const handleInputChange = (e) => setEntry(e.target.value);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    getFetch();
    setEntry("");
  };

  const getFetch = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=b88fec9&s=${entry}`
    );
    const data = await response.json();
    setSearch(data.Search);
  };
  console.log(search);

  return (
    <BrowserRouter>
      <Navbar bg="info" expand="lg">
        <Container>
          <div>Logo</div>
          <Link to="/">Home</Link>
        </Container>
      </Navbar>

      <ProductContext.Provider
        value={{
          handleInputChange,
          handleFormSubmit,
          entry,
          search,
          setSearch,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={Create} />
        </Switch>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;
