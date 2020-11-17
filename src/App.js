import { SWRConfig } from "swr";
import PokemonFilter from "./components/PokemonFilter";
import PokemonList from "./components/PokemonList";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
    return (
        <SWRConfig value={{ fetcher }} className="App">
            <PokemonFilter />
            <PokemonList />
        </SWRConfig>
    );
}

export default App;
