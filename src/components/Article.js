import React from "react";
function Article({ news, num, setNum }) {
  return (
    <div className="row">
      {news &&
        news.slice(0, num).map((data) => (
          <div className="card w-25 col-2 m-3" key={data.title}>
            <img
              src={data.urlToImage}
              className="card-img-top"
              alt={data.source.name}
            />
            <div className="card-body">
              <h3 className="card-title">{data.title}</h3>
              <h4>{data.author}</h4>
              <h5>{data.publishedAt}</h5>
              <p className="card-text">{data.description}</p>
              <a className="btn btn-danger text-black" href={data.url}>
                Read Full Article
              </a>
            </div>
          </div>
        ))}
      <button
        onClick={() => {
          if (news.length < num) {
            setNum(5);
          } else {
            setNum(num + 5);
          }
        }}
        className="btn btn-primary m-3"
      >
        load More...
      </button>
    </div>
  );
}
export default Article;
