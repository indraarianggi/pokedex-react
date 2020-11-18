import React from "react";
import { useRequest } from "../../hooks/useRequest";
import Loader from "../Loader";
import WarningText from "../WarningText";

const PokemonFilter = ({ selectedType, setSelectedType }) => {
    const { data, error } = useRequest(`/type`);

    let content = Array.from({ length: 10 }).map((_, index) => (
        <Loader key={index} type="button" />
    ));

    if (error) content = <WarningText text="Something went wrong!" />;

    if (data) {
        content = (
            <>
                <button
                    className={`btn-filter ${!selectedType && "active"}`}
                    key="all"
                    onClick={() => setSelectedType(null)}
                >
                    All
                </button>
                {data.results.map((type) => (
                    <button
                        className={`btn-filter ${type.name} ${
                            selectedType === type.name && "active"
                        }`}
                        key={type.name}
                        onClick={() => setSelectedType(type.name)}
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
