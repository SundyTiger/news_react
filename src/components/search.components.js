import React from "react";

function Search({ news, setNews, searching, setSearch }) {
  const searchData = () => {
    if (searching.length > 0) {
      return news.filter((data) => {
        return data.title.toLowerCase().indexOf(searching.toLowerCase()) !== -1;
      });
    } else {
    }
  };
  return (
    <div>
      <div className="m-auto mt-3 w-50 d-flex">
        <label className="form-label mt-2 me-2">Search:</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <button type="button" onClick={() => setNews(searchData())}>
        Search
      </button>
    </div>
  );
}

export default Search;
