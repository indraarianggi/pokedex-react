import React from "react";
import PokemonItem from "../PokemonItem";
import { pokemons } from "../../constant/data";

const PokemonList = () => {
    return (
        <main className="main-section">
            {pokemons.map((pokemon) => (
                <PokemonItem key={pokemon.name} {...pokemon} />
            ))}
        </main>
    );
};

export default PokemonList;
