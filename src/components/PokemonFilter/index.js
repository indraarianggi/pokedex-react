import React from "react";
import { useRequest } from "../../hooks/useRequest";

const PokemonFilter = () => {
    const { data, error } = useRequest(`/type`);

    let content;

    if (error) content = <h1>Something went wrong!</h1>;
    if (!data && !error) content = <h1>Loading...</h1>;
    if (data) {
        content = (
            <>
                <button className="btn-filter" key="all">
                    All
                </button>
                {data.results.map((type) => (
                    <button
                        className={`btn-filter ${type.name}`}
                        key={type.name}
                    >
                        {type.name}
                    </button>
                ))}
            </>
        );
    }

    return (
        <aside className="filter-section">
            <div>{content}</div>
        </aside>
    );
};

export default PokemonFilter;
