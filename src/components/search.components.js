import React from "react";

function Search({ news, setNews, newsData, searching, setSearch }) {
  const searchData = () => {
    if (searching.length > 0) {
      return news.filter(
        (data) =>
          data.title.toLowerCase().indexOf(searching.toLowerCase()) !== -1
      );
    } else {
      return newsData;
    }
  };

  return (
    <div>
      <div className="m-auto mt-3 w-50 d-flex">
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          type="button"
          className="btn btn-primary ms-3"
          onClick={() => setNews(searchData())}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
