import React, { useEffect, useState } from "react";
import axios from "axios";

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
    <div>
      {characters.length ? (
        <>
          {characters.map((character) => (
            <p key={character.id}>{character.name}</p>
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Characters;
