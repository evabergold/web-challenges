import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${page * 20}`
        );
        const data = await response.json();
        setPokemon(data.results);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [page]);

  return (
    <main>
      <button
        type="button"
        onClick={() => {
          setPage(pokemon.previous);
        }}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => {
          setPage(pokemon.next);
        }}
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
