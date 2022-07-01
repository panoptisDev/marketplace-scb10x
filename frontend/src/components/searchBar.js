import React, { useState, useCallback } from "react";
import { Search } from "react-feather";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";

/** Styled Component */
const SearchInput = styled.input`
  background-color: #9c86ff;
  color: #ffff;
  border-radius: 20px;
  border: none;
  width: 60%;
  padding: 2px 10px 2px 35px;

  ::placeholder {
    color: #ffff;
    opacity: 0.6;
  }
`;

const SearchIcon = styled.a`
  position: relative;
  color: #ffff;
  width: 10px;
  padding: 3px;
  border-radius: 20px;
  left: 30px;
`;

/** Component */
const SearchBar = () => {
  const [text, setText] = useState("");
  const [isPressEnter, setIsPressEnter] = useState(false);

  const handleSearchChange = (e) => {
    setText(e.currentTarget.value);
  };

  const handlePressEnter = useCallback((e) => {
    if (e.key === "Enter") {
      setIsPressEnter(true);
    }
  }, []);

  return (
    <div>
      {/* {isPressEnter && (
        <Navigate to={`/collections/search/${text}`} replace={true} />
      )} */}
      <Link to={`/collections/search/${text}`} style={{ color: "#ffff" }}>
        <SearchIcon>
          <Search />
        </SearchIcon>
      </Link>
      <SearchInput
        type="search"
        name="search"
        id="search"
        placeholder="search"
        onChange={(e) => handleSearchChange(e)}
        // onKeyDown={(e) => handlePressEnter(e)}
      />
    </div>
  );
};

export default SearchBar;
