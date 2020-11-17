import React from "react";

const PokemonItem = ({ ...pokemon }) => {
    return (
        <section className="pokemon">
            <article className="pokemon--card">
                <div className="pokemon--profile">
                    <div className="pokemon--id">{`#${pokemon.id}`}</div>
                    <div className="pokemon--image">
                        <img
                            src={pokemon.sprites.front_default}
                            alt={pokemon.name}
                        />
                    </div>
                    <div className="pokemon--info height">
                        {parseFloat(pokemon.height / 10)}m
                    </div>
                    <div className="pokemon--info weight">
                        {parseFloat(pokemon.weight / 10)}kg
                    </div>
                </div>
                <h2 className="pokemon--name">{pokemon.name}</h2>
                <div className="pokemon--types">
                    {pokemon.types.map((item) => (
                        <span className={item.type.name}>{item.type.name}</span>
                    ))}
                </div>
                <div className="pokemon--abilities">
                    {pokemon.abilities
                        .map((item) => item.ability.name.split("-").join(" "))
                        .join(", ")}
                </div>
            </article>
            <article className="pokemon--stats">
                {pokemon.stats.map((item) => (
                    <div className="pokemon-stat-item" key={item.stat.name}>
                        <div>{item.stat.name.split("-").join(" ")}</div>
                        <div>{item.base_stat}</div>
                        <div className="progress-bar">
                            <span
                                style={{
                                    width: `${100 - item.base_stat || 0}%`,
                                }}
                            ></span>
                        </div>
                    </div>
                ))}
            </article>
        </section>
    );
};

export default PokemonItem;
