import React, { useState, useEffect } from "react";
import Search from "./components/search.components";
import Article from "./components/Article";
import axios from "axios";
function App() {
  const [news, setNews] = useState([]);
  const [num, setNum] = useState(20);
  const [searching, setSearch] = useState("");
  useEffect(() => {
    return axios
      .get("http://localhost:3333/articles")
      .then(async (res) => {
        const { data } = res;
        await setNews(data);
      })
      .catch((e) => e);
  }, []);
  return (
    <div className="container">
      <Search
        news={news}
        setNews={setNews}
        searching={searching}
        setSearch={setSearch}
      />
      <Article news={news} num={num} setNum={setNum} />
    </div>
  );
}

export default App;
