import { useSWRInfinite } from "swr";

const baseUrl = "https://pokeapi.co/api/v2";

export const useRequestInfinite = (path) => {
    if (!path) {
        throw new Error("Path is required");
    }

    const url = `${baseUrl}${path}`;
    const LIMIT = 30;

    const { data, error, size, setSize } = useSWRInfinite(
        (index, previousData) => {
            // reached the end
            if (previousData && !previousData.next) return null;

            // first fetch, we don't have previous data
            if (index === 0) return `${url}?offset=0&limit=${LIMIT}`;

            return `${url}?offset=${
                previousData.results.length * index
            }&limit=${LIMIT}`;
        }
    );

    let pokemons = [];
    let isReachingEnd = false;
    if (data) {
        pokemons = data.map((group) => {
            if (!group.next) isReachingEnd = true;
            return [...group.results];
        });
    }
    const isLoadingInitialData = !data && !error;
    const isLoadingMore =
        isLoadingInitialData ||
        (size > 0 && data && typeof data[size - 1] === "undefined");

    return {
        data: pokemons,
        error,
        isLoadingMore,
        size,
        setSize,
        isReachingEnd,
    };
};
