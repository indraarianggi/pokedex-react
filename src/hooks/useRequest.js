import useSWR from "swr";

const baseUrl = "https://pokeapi.co/api/v2";

export const useRequest = (path) => {
    const url = path ? `${baseUrl}${path}` : baseUrl;

    const { data, error } = useSWR(url);

    return { data, error };
};
