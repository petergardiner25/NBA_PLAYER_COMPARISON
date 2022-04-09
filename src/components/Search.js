import React, { useState } from "react";
import SearchList from "./SearchList";

function Search(props) {
  const [name, setName] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSelect(){
      setSearchResults([]);
  }

  function handleSubmit(e) {
    e.preventDefault();


    fetch(`https://www.balldontlie.io/api/v1/players?search=${name}`)
    .then(response => response.json())
    .then(response => {
        let arr= [];
        response.data.forEach(element => {
            if(element.height_feet){
                const newSearchResult = {id: element.id, firstname: element.first_name, lastname: element.last_name, team: element.team.full_name};
                arr.push(newSearchResult);
            }

        });

        return arr
    })
    .then(arr => setSearchResults(arr))
    .catch(err => console.error(err));

    setName("");
  };

  const resultsList = searchResults.map(result => (
      <SearchList
        id = {result.id}
        first = {result.firstname}
        last = {result.lastname}
        team = {result.team}
        key = {result.id}
        setter = {props.parentCallback}
        cleanUp = {handleSelect}
        />
    )
    );

  return (
    <>
    <div className="searchBar">
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                id="new-player-search"
                className="input input__lg"
                name="text"
                placeholder="First and Last Name for Best Results"
                autoComplete="off"
                value={name}
                onChange={handleChange} />
            <button type="submit" className="btn btn__primary btn__lg">
                Search
            </button>
        </form>
    </div>
    <div className="searchResults">
        <ul>
            {resultsList}
        </ul>
        
    </div>

    </>)
}

export default Search;