import React, { useEffect, useState } from "react";
import axios from "axios";
import './Characters.scss'

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getCharacters = async () => {
      const charactersApi = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      console.log(charactersApi);
      setCharacters(charactersApi.data.results);
    };
    getCharacters();
  });
  return (
    <div className="characters">
      {characters.length ? (
        <>
          {characters.map((character) => (
            <div className="card">
            <p key={character.id}>{character.name}</p>
            <img src={character.image} alt={character.name}></img>
            </div>
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Characters;
