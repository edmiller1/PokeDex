import React, { useState, useEffect } from "react";

export const PokemonList: React.FC = () => {
  const [pokemon, setPokemon] = useState<null>(null);
  const pokemonNumber = 150;

  useEffect(() => {
    fetchPokemons();
    console.log(pokemon);
  }, []);

  const fetchPokemons = async () => {
    for (let i = 1; i <= pokemonNumber; i++) {
      await getPokemon(i);
    }
  };

  const getPokemon = async (id: number) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    const [item] = data.pokemons;
    setPokemon(item);
  };

  return (
    <div>
      <h1>Pokemon</h1>
    </div>
  );
};
