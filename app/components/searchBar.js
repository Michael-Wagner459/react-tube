'use client'
import { useState } from "react";

export const SearchBar = ({onSearchTermChange}) => {
  const [term, setTerm] = useState('');

  return (
    <div className="search-bar">
      <input onChange={(event) => {
      setTerm(event.target.value);
      onSearchTermChange(event.target.value);
      }} />
    </div>
  );
};