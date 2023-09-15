import React, { useState } from "react";
import { arrayData } from "./utils";
import "./SearchPage.css";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [backupArrayData] = useState(arrayData);

  const handleSearchTextChange = (text) => {
    setSearchQuery(text);

    if (text === "") {
      setSearchResults([]); // Clear results when search text is empty
    } else {
      const filteredResults = backupArrayData.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  };

  return (
    <div className="search-page">
      <h1 className="title">Search Page</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => handleSearchTextChange(e.target.value)}
        />
        <button
          onClick={() => handleSearchTextChange(searchQuery)}
          className="search-button"
        >
          Search
        </button>
      </div>

      <div className="results-container">
        {searchResults.length === 0 && searchQuery !== "" ? ( // Check if searchQuery is not empty
          <div className="no-data-found">No data found for current search.</div>
        ) : (
          searchResults.map((result) => (
            <div key={result.id} className="result-item">
              {result.id}: {result.name}, Age: {result.age}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchPage;
