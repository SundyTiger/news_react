import React, { useEffect } from "react";
import Search from "./components/search.components";
import Article from "./components/Article";

function App() {
  return (
    <div className="container">
      <Search />
      <Article />
    </div>
  );
}

export default App;
