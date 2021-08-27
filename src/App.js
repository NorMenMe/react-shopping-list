import "./scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import { BiCameraMovie } from "react-icons/bi";
import { RiShoppingCartLine } from "react-icons/ri";
import { Home, Create, Basket, ProductContext } from "./importer";

function App() {
  const [entry, setEntry] = useState("");
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState([]);
  const [movieShow, setMovieShow] = useState([]);

  const handleInputChange = (e) => setEntry(e.target.value);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setQuery(entry);

    // ↓↓↓ declare valid cases otherwise display the error

    if (entry.length > 0 && entry !== " ") {
      setQuery(entry);
      setEntry("");
    } else {
      alert("please enter the movie name!");
    }
  };

  // ↓↓↓ prepping for fetching

  const getFetch = async () => {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=b88fec9&s=${query}`
    );
    const data = await response.json();

    // ↓↓↓ inside every fetched object, add a key/value with price

    if (!data.Error) {
      setSearch(data.Search.map(getRandomPrice));
    } else {
      setSearch([]);
      alert(data.Error);
    }
  };

  useEffect(() => {
    if (query.length > 0) {
      getFetch();
    }
  }, [query]);

  // ↓↓↓ building a key with a value of a random number, see line 42

  const getRandomPrice = (item) => {
    item.price = (Math.random() * 10).toFixed(2);
    return item;
  };

  return (
    <BrowserRouter>
      <Navbar bg="info" expand="lg">
        <Container>
          <div className="logo">
            <BiCameraMovie size="60px" />
          </div>
          <div className="wrapper-home-basket">
            <Link to="/" id="home">
              Home
            </Link>
            <Link to="/basket" id="basket">
              <RiShoppingCartLine size="35px" className="icon-basket" />
            </Link>
          </div>
        </Container>
      </Navbar>

      <ProductContext.Provider
        value={{
          handleInputChange,
          handleFormSubmit,
          entry,
          search,
          setSearch,
          movieShow,
          setMovieShow,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/basket" component={Basket} />
        </Switch>
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;
