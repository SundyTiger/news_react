import React, { useEffect, useState } from "react";
import getArticle from "../services/getNews";
function Article() {
  const [news, setNews] = useState([]);
  const gettingData = async () => {
    await getArticle()
      .then((res) => setNews(res.data))
      .catch((err) => err.message);
  };
  useEffect(() => {
    gettingData();
  });
  return (
    <div>
      {/* {news &&
        news.map((data) => {
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={data.urlToImage}
              className="card-img-top"
              alt={data.title}
            />
            <div className="card-body">
              <h3 className="card-title">{data.title}</h3>
              <h4>{data.author}</h4>
              <h5>{data.publishedAt}</h5>
              <p className="card-text">{data.description}</p>
            </div>
            <a className="btn btn-danger text-black" href={data.url}>
              Read Full Article
            </a>
          </div>;
        })} */}
    </div>
  );
}
export default Article;
