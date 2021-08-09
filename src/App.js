import "./scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import Home from "./components/Home";
import Create from "./components/Home";

function App() {
  const query = "banana";

  // ↓↓↓ fetch

  // const apiKey = "67d766cac1e94d4d85ac33708f9ffb83 "; //? if inserted in API error 401

  // uncomment for testing ↓↓↓
  // const API = `https://api.spoonacular.com/food/ingredients/search?apiKey=67d766cac1e94d4d85ac33708f9ffb83&query=${query}`;

  // async function getFetch() {
  //   const response = await fetch(API);
  //   const data = await response.json();
  //   console.log(data);
  // }

  // useEffect(() => {
  //   getFetch();
  // }, []);
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  return (
    <BrowserRouter>
      <Navbar bg="info" expand="lg">
        <Container>
          <div>Logo</div>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
