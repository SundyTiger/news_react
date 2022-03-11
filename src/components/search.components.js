import React from "react";

function Search() {
  return (
    <div>
      <div className="m-auto mt-3 w-50 d-flex">
        <label className="form-label mt-2 me-2">Search:</label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
    </div>
  );
}

export default Search;
