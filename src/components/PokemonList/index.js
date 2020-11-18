import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import PokemonItem from "../PokemonItem";
import { useRequestInfinite } from "../../hooks/useRequestInfinite";

const PokemonList = () => {
    const {
        data,
        error,
        isLoadingMore,
        size,
        setSize,
        isReachingEnd,
    } = useRequestInfinite("/pokemon");

    let content;
    if (error) content = <h1>Something went wrong</h1>;
    if (!data && !error) content = <h1>Loading...</h1>;
    if (data) {
        content = data.map((group) => {
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
                loader={<h1 key={0}>Load More Data...</h1>}
                threshold={500}
            >
                {content}
            </InfiniteScroll>
        </main>
    );
};

export default PokemonList;
