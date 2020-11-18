import React from "react";
import { useRequest } from "../../hooks/useRequest";
import Loader from "../Loader";
import WarningText from "../WarningText";

const PokemonItem = ({ pokemon }) => {
    const { name } = pokemon;
    const { data, error } = useRequest(`/pokemon/${name}`);

    let content = <Loader type="card" />;

    if (error) content = <WarningText text="Something went wrong!" />;

    if (data) {
        content = (
            <>
                <article className="pokemon--card">
                    <div className="pokemon--profile">
                        <div className="pokemon--id">{`#${data.id}`}</div>
                        <div className="pokemon--image">
                            <img
                                src={data.sprites.front_default}
                                alt={data.name}
                            />
                        </div>
                        <div className="pokemon--info height">
                            {parseFloat(data.height / 10)}m
                        </div>
                        <div className="pokemon--info weight">
                            {parseFloat(data.weight / 10)}kg
                        </div>
                    </div>
                    <h2 className="pokemon--name">{data.name}</h2>
                    <div className="pokemon--types">
                        {data.types.map((item) => (
                            <span
                                key={item.type.name}
                                className={item.type.name}
                            >
                                {item.type.name}
                            </span>
                        ))}
                    </div>
                    <div className="pokemon--abilities">
                        {data.abilities
                            .map((item) =>
                                item.ability.name.split("-").join(" ")
                            )
                            .join(", ")}
                    </div>
                </article>
                <article className="pokemon--stats">
                    {data.stats.map((item) => (
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
            </>
        );
    }

    return <section className="pokemon">{content}</section>;
};

export default PokemonItem;
