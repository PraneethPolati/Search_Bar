import React from 'react';
import './SearchSuggestions.css';

const SearchSuggestions = ({ suggestions, onSuggestionClick }) => {
  return (
    <div className="suggestions-container">
      {suggestions.map((item, index) => (
        <div
          key={index}
          className="suggestion-item"
          onClick={() => onSuggestionClick(`${item.country} - ${item.capital}`)}
        >
          {item.country} - {item.capital}
        </div>
      ))}
    </div>
  );
};

export default SearchSuggestions;
