import { useState, useEffect } from "react";
import { SWRConfig } from "swr";
import PokemonFilter from "./components/PokemonFilter";
import PokemonList from "./components/PokemonList";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
    const [selectedType, setSelectedType] = useState(null);
    const [path, setPath] = useState("/pokemon");

    useEffect(() => {
        if (selectedType) {
            setPath(`/type/${selectedType}`);
        } else {
            setPath("/pokemon");
        }
    }, [selectedType]);

    return (
        <SWRConfig value={{ fetcher }} className="App">
            <PokemonFilter
                selectedType={selectedType}
                setSelectedType={setSelectedType}
            />
            <PokemonList path={path} selectedType={selectedType} />
        </SWRConfig>
    );
}

export default App;
