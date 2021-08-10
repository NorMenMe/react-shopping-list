import React from "react";
import { useHistory, Link, Redirect } from "react-router-dom";

function Home() {
  return (
    <div className="container-title">
      <Link to="/create" className="title">
        Create your shopping list !
      </Link>
    </div>
  );
}

export default Home;
