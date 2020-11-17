import React from "react";
import { pokemonTypes } from "../../constant/data";

const PokemonFilter = () => {
    return (
        <aside className="filter-section">
            <div>
                <button className="btn-filter" key="all">
                    All
                </button>
                {pokemonTypes.map((type) => (
                    <button
                        className={`btn-filter ${type.name}`}
                        key={type.name}
                    >
                        {type.name}
                    </button>
                ))}
            </div>
        </aside>
    );
};

export default PokemonFilter;
