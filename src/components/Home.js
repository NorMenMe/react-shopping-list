import React from "react";
import { useHistory, Link, Redirect } from "react-router-dom";

function Home() {
  const history = useHistory();

  function handleLinkClick() {
    history.push("/create");
    console.log(history);
  }

  return (
    <div className="container-title">
      <a onClick={handleLinkClick} className="title">
        Create your shopping list !
      </a>
    </div>
  );
}

export default Home;
