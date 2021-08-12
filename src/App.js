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
import { BiCameraMovie } from "react-icons/bi";
import { Modal } from "bootstrap";

function App() {
  const [entry, setEntry] = useState("");
  const [search, setSearch] = useState([]);

  const handleInputChange = (e) => setEntry(e.target.value);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    getFetch();
    setEntry("");
  };

  const getRandomPrice = (item) => {
    item.price = (Math.random() * 10).toFixed(2);
    return item;
  };

  const getFetch = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=b88fec9&s=${entry}`
      );
      console.log(response);
      const data = await response.json();
      console.log(data.Error);
      setSearch(data.Search.map(getRandomPrice));
      // alert(data.Error);
      // data.Error ? alert(data.Error) : "";
      if (data.Error) {
        return alert(data.Error);
      }
    } catch (error) {
      console.log("error");
    }
  };

  // console.log(search);

  return (
    <BrowserRouter>
      <Navbar bg="info" expand="lg">
        <Container>
          <div className="logo">
            <BiCameraMovie size="60px" />
          </div>
          <Link to="/" id="home">
            Home
          </Link>
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
