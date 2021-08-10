import "./scss/main.scss";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import Home from "./components/Home";
import List from "./components/List";
import Create from "./components/Create";
import ProductContext from "../src/components/ProductContext";

function App() {
  const [product, setProduct] = useState("");
  const [added, setAdded] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const handleInputChange = (e) => setProduct(e.target.value);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setAdded([...added, product]);
    setProduct("");
  };

  // ↓↓↓ fetch

  // uncomment for testing ↓↓↓
  const API = `https://api.spoonacular.com/food/ingredients/search?apiKey=67d766cac1e94d4d85ac33708f9ffb83&query=${added}`;

  async function getFetch() {
    const response = await fetch(API);
    const data = await response.json();
    setAllProducts([...data.results]);
  }
  console.log(allProducts);

  useEffect(() => {
    getFetch();
  }, [added]);

  return (
    <BrowserRouter>
      <Navbar bg="info" expand="lg">
        <Container>
          <div>Logo</div>
          <Link to="/">Home</Link>
        </Container>
      </Navbar>

      <ProductContext.Provider
        value={{ handleInputChange, handleFormSubmit, allProducts, product }}
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
