import React from "react";
import PokemonItem from "../PokemonItem";
import { useRequest } from "../../hooks/useRequest";

const PokemonList = () => {
    const { data, error } = useRequest("/pokemon");

    let content;
    if (error) content = <h1>Something went wrong</h1>;
    if (!data && !error) content = <h1>Loading...</h1>;
    if (data) {
        content = data.results.map((pokemon) => (
            <PokemonItem key={pokemon.name} pokemon={pokemon} />
        ));
    }

    return <main className="main-section">{content}</main>;
};

export default PokemonList;
