import useSWR from "swr";

const baseUrl = "https://pokeapi.co/api/v2";

export const useRequest = (path) => {
    if (!path) {
        throw new Error("Path is required");
    }

    const url = `${baseUrl}${path}`;

    const { data, error } = useSWR(url);

    return { data, error };
};
