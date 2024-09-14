import React, { useState } from 'react';
import './SearchBar.css';
import SearchSuggestions from './SearchSuggestions';
import countriesData from '../data/countriesData';

const SearchBar = () => {
  const [query, setQuery] = useState('');            // Search input state
  const [suggestions, setSuggestions] = useState([]); // Suggestions state

  const handleInputChange = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input) {
      const filteredSuggestions = countriesData.filter(
        (country) =>
          country.country.toLowerCase().includes(input.toLowerCase()) ||
          country.capital.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);  // Autofill the search bar with the clicked suggestion
    setSuggestions([]);    // Clear suggestions after selection
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search by country or capital..."
        className="search-input"
      />
      {suggestions.length > 0 && (
        <SearchSuggestions
          suggestions={suggestions}
          onSuggestionClick={handleSuggestionClick}
        />
      )}
    </div>
  );
};

export default SearchBar;
