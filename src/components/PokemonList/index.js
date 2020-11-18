import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import PokemonItem from "../PokemonItem";
import { useRequestInfinite } from "../../hooks/useRequestInfinite";
import Loader from "../Loader";
import WarningText from "../WarningText";

const PokemonList = ({ path, selectedType }) => {
    const {
        data,
        error,
        isLoadingMore,
        size,
        setSize,
        isReachingEnd,
    } = useRequestInfinite(path, !!selectedType);

    let content = <Loader height="250px" width="100%" />;

    if (error) content = <WarningText text="Something went wrong!" />;

    if (data) {
        content = data.map((group) => {
            if (group.length === 0)
                return <WarningText key={0} text="Pokemon not found :(" />;

            return group.map((pokemon) => (
                <PokemonItem key={pokemon.name} pokemon={pokemon} />
            ));
        });
    }

    return (
        <main className="main-section">
            <InfiniteScroll
                loadMore={() => setSize(size + 1)}
                hasMore={!isLoadingMore && !isReachingEnd}
                loader={
                    <h3
                        key={0}
                        style={{ textAlign: "center", padding: "1rem" }}
                    >
                        Load More Data...
                    </h3>
                }
                threshold={500}
            >
                {content}
            </InfiniteScroll>
        </main>
    );
};

export default PokemonList;
