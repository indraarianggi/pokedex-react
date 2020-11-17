export const pokemonTypes = [
    {
        name: "normal",
        url: "https://pokeapi.co/api/v2/type/1/",
    },
    {
        name: "fighting",
        url: "https://pokeapi.co/api/v2/type/2/",
    },
    {
        name: "flying",
        url: "https://pokeapi.co/api/v2/type/3/",
    },
    {
        name: "poison",
        url: "https://pokeapi.co/api/v2/type/4/",
    },
    {
        name: "ground",
        url: "https://pokeapi.co/api/v2/type/5/",
    },
    {
        name: "rock",
        url: "https://pokeapi.co/api/v2/type/6/",
    },
    {
        name: "bug",
        url: "https://pokeapi.co/api/v2/type/7/",
    },
    {
        name: "ghost",
        url: "https://pokeapi.co/api/v2/type/8/",
    },
    {
        name: "steel",
        url: "https://pokeapi.co/api/v2/type/9/",
    },
    {
        name: "fire",
        url: "https://pokeapi.co/api/v2/type/10/",
    },
    {
        name: "water",
        url: "https://pokeapi.co/api/v2/type/11/",
    },
    {
        name: "grass",
        url: "https://pokeapi.co/api/v2/type/12/",
    },
    {
        name: "electric",
        url: "https://pokeapi.co/api/v2/type/13/",
    },
    {
        name: "psychic",
        url: "https://pokeapi.co/api/v2/type/14/",
    },
    {
        name: "ice",
        url: "https://pokeapi.co/api/v2/type/15/",
    },
    {
        name: "dragon",
        url: "https://pokeapi.co/api/v2/type/16/",
    },
    {
        name: "dark",
        url: "https://pokeapi.co/api/v2/type/17/",
    },
    {
        name: "fairy",
        url: "https://pokeapi.co/api/v2/type/18/",
    },
    {
        name: "unknown",
        url: "https://pokeapi.co/api/v2/type/10001/",
    },
    {
        name: "shadow",
        url: "https://pokeapi.co/api/v2/type/10002/",
    },
];

export const pokemons = [
    {
        abilities: [
            {
                ability: {
                    name: "overgrow",
                    url: "https://pokeapi.co/api/v2/ability/65/",
                },
                is_hidden: false,
                slot: 1,
            },
            {
                ability: {
                    name: "chlorophyll",
                    url: "https://pokeapi.co/api/v2/ability/34/",
                },
                is_hidden: true,
                slot: 3,
            },
        ],
        height: 7,
        id: 1,
        name: "bulbasaur",
        sprites: {
            front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        },
        stats: [
            {
                base_stat: 45,
                effort: 0,
                stat: {
                    name: "hp",
                    url: "https://pokeapi.co/api/v2/stat/1/",
                },
            },
            {
                base_stat: 49,
                effort: 0,
                stat: {
                    name: "attack",
                    url: "https://pokeapi.co/api/v2/stat/2/",
                },
            },
            {
                base_stat: 49,
                effort: 0,
                stat: {
                    name: "defense",
                    url: "https://pokeapi.co/api/v2/stat/3/",
                },
            },
            {
                base_stat: 65,
                effort: 1,
                stat: {
                    name: "special-attack",
                    url: "https://pokeapi.co/api/v2/stat/4/",
                },
            },
            {
                base_stat: 65,
                effort: 0,
                stat: {
                    name: "special-defense",
                    url: "https://pokeapi.co/api/v2/stat/5/",
                },
            },
            {
                base_stat: 45,
                effort: 0,
                stat: {
                    name: "speed",
                    url: "https://pokeapi.co/api/v2/stat/6/",
                },
            },
        ],
        types: [
            {
                slot: 1,
                type: {
                    name: "grass",
                    url: "https://pokeapi.co/api/v2/type/12/",
                },
            },
            {
                slot: 2,
                type: {
                    name: "poison",
                    url: "https://pokeapi.co/api/v2/type/4/",
                },
            },
        ],

        weight: 69,
    },
    {
        abilities: [
            {
                ability: {
                    name: "overgrow",
                    url: "https://pokeapi.co/api/v2/ability/65/",
                },
                is_hidden: false,
                slot: 1,
            },
            {
                ability: {
                    name: "chlorophyll",
                    url: "https://pokeapi.co/api/v2/ability/34/",
                },
                is_hidden: true,
                slot: 3,
            },
        ],
        height: 10,
        id: 2,
        name: "ivysaur",
        sprites: {
            front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        },
        stats: [
            {
                base_stat: 60,
                effort: 0,
                stat: {
                    name: "hp",
                    url: "https://pokeapi.co/api/v2/stat/1/",
                },
            },
            {
                base_stat: 62,
                effort: 0,
                stat: {
                    name: "attack",
                    url: "https://pokeapi.co/api/v2/stat/2/",
                },
            },
            {
                base_stat: 63,
                effort: 0,
                stat: {
                    name: "defense",
                    url: "https://pokeapi.co/api/v2/stat/3/",
                },
            },
            {
                base_stat: 80,
                effort: 1,
                stat: {
                    name: "special-attack",
                    url: "https://pokeapi.co/api/v2/stat/4/",
                },
            },
            {
                base_stat: 80,
                effort: 1,
                stat: {
                    name: "special-defense",
                    url: "https://pokeapi.co/api/v2/stat/5/",
                },
            },
            {
                base_stat: 60,
                effort: 0,
                stat: {
                    name: "speed",
                    url: "https://pokeapi.co/api/v2/stat/6/",
                },
            },
        ],
        types: [
            {
                slot: 1,
                type: {
                    name: "grass",
                    url: "https://pokeapi.co/api/v2/type/12/",
                },
            },
            {
                slot: 2,
                type: {
                    name: "poison",
                    url: "https://pokeapi.co/api/v2/type/4/",
                },
            },
        ],
        weight: 130,
    },
    {
        abilities: [
            {
                ability: {
                    name: "overgrow",
                    url: "https://pokeapi.co/api/v2/ability/65/",
                },
                is_hidden: false,
                slot: 1,
            },
            {
                ability: {
                    name: "chlorophyll",
                    url: "https://pokeapi.co/api/v2/ability/34/",
                },
                is_hidden: true,
                slot: 3,
            },
        ],
        height: 20,
        id: 3,
        name: "venusaur",
        sprites: {
            front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        },
        stats: [
            {
                base_stat: 80,
                effort: 0,
                stat: {
                    name: "hp",
                    url: "https://pokeapi.co/api/v2/stat/1/",
                },
            },
            {
                base_stat: 82,
                effort: 0,
                stat: {
                    name: "attack",
                    url: "https://pokeapi.co/api/v2/stat/2/",
                },
            },
            {
                base_stat: 83,
                effort: 0,
                stat: {
                    name: "defense",
                    url: "https://pokeapi.co/api/v2/stat/3/",
                },
            },
            {
                base_stat: 100,
                effort: 2,
                stat: {
                    name: "special-attack",
                    url: "https://pokeapi.co/api/v2/stat/4/",
                },
            },
            {
                base_stat: 100,
                effort: 1,
                stat: {
                    name: "special-defense",
                    url: "https://pokeapi.co/api/v2/stat/5/",
                },
            },
            {
                base_stat: 80,
                effort: 0,
                stat: {
                    name: "speed",
                    url: "https://pokeapi.co/api/v2/stat/6/",
                },
            },
        ],
        types: [
            {
                slot: 1,
                type: {
                    name: "grass",
                    url: "https://pokeapi.co/api/v2/type/12/",
                },
            },
            {
                slot: 2,
                type: {
                    name: "poison",
                    url: "https://pokeapi.co/api/v2/type/4/",
                },
            },
        ],
        weight: 1000,
    },
    {
        abilities: [
            {
                ability: {
                    name: "blaze",
                    url: "https://pokeapi.co/api/v2/ability/66/",
                },
                is_hidden: false,
                slot: 1,
            },
            {
                ability: {
                    name: "solar-power",
                    url: "https://pokeapi.co/api/v2/ability/94/",
                },
                is_hidden: true,
                slot: 3,
            },
        ],
        height: 6,
        id: 4,
        name: "charmander",
        sprites: {
            front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        },
        stats: [
            {
                base_stat: 39,
                effort: 0,
                stat: {
                    name: "hp",
                    url: "https://pokeapi.co/api/v2/stat/1/",
                },
            },
            {
                base_stat: 52,
                effort: 0,
                stat: {
                    name: "attack",
                    url: "https://pokeapi.co/api/v2/stat/2/",
                },
            },
            {
                base_stat: 43,
                effort: 0,
                stat: {
                    name: "defense",
                    url: "https://pokeapi.co/api/v2/stat/3/",
                },
            },
            {
                base_stat: 60,
                effort: 0,
                stat: {
                    name: "special-attack",
                    url: "https://pokeapi.co/api/v2/stat/4/",
                },
            },
            {
                base_stat: 50,
                effort: 0,
                stat: {
                    name: "special-defense",
                    url: "https://pokeapi.co/api/v2/stat/5/",
                },
            },
            {
                base_stat: 65,
                effort: 1,
                stat: {
                    name: "speed",
                    url: "https://pokeapi.co/api/v2/stat/6/",
                },
            },
        ],
        types: [
            {
                slot: 1,
                type: {
                    name: "fire",
                    url: "https://pokeapi.co/api/v2/type/10/",
                },
            },
        ],
        weight: 85,
    },
    {
        abilities: [
            {
                ability: {
                    name: "blaze",
                    url: "https://pokeapi.co/api/v2/ability/66/",
                },
                is_hidden: false,
                slot: 1,
            },
            {
                ability: {
                    name: "solar-power",
                    url: "https://pokeapi.co/api/v2/ability/94/",
                },
                is_hidden: true,
                slot: 3,
            },
        ],
        height: 11,
        id: 5,
        name: "charmeleon",
        sprites: {
            front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        },
        stats: [
            {
                base_stat: 58,
                effort: 0,
                stat: {
                    name: "hp",
                    url: "https://pokeapi.co/api/v2/stat/1/",
                },
            },
            {
                base_stat: 64,
                effort: 0,
                stat: {
                    name: "attack",
                    url: "https://pokeapi.co/api/v2/stat/2/",
                },
            },
            {
                base_stat: 58,
                effort: 0,
                stat: {
                    name: "defense",
                    url: "https://pokeapi.co/api/v2/stat/3/",
                },
            },
            {
                base_stat: 80,
                effort: 1,
                stat: {
                    name: "special-attack",
                    url: "https://pokeapi.co/api/v2/stat/4/",
                },
            },
            {
                base_stat: 65,
                effort: 0,
                stat: {
                    name: "special-defense",
                    url: "https://pokeapi.co/api/v2/stat/5/",
                },
            },
            {
                base_stat: 80,
                effort: 1,
                stat: {
                    name: "speed",
                    url: "https://pokeapi.co/api/v2/stat/6/",
                },
            },
        ],
        types: [
            {
                slot: 1,
                type: {
                    name: "fire",
                    url: "https://pokeapi.co/api/v2/type/10/",
                },
            },
        ],
        weight: 190,
    },
    {
        abilities: [
            {
                ability: {
                    name: "blaze",
                    url: "https://pokeapi.co/api/v2/ability/66/",
                },
                is_hidden: false,
                slot: 1,
            },
            {
                ability: {
                    name: "solar-power",
                    url: "https://pokeapi.co/api/v2/ability/94/",
                },
                is_hidden: true,
                slot: 3,
            },
        ],
        height: 17,
        id: 6,
        name: "charizard",
        sprites: {
            front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        },
        stats: [
            {
                base_stat: 78,
                effort: 0,
                stat: {
                    name: "hp",
                    url: "https://pokeapi.co/api/v2/stat/1/",
                },
            },
            {
                base_stat: 84,
                effort: 0,
                stat: {
                    name: "attack",
                    url: "https://pokeapi.co/api/v2/stat/2/",
                },
            },
            {
                base_stat: 78,
                effort: 0,
                stat: {
                    name: "defense",
                    url: "https://pokeapi.co/api/v2/stat/3/",
                },
            },
            {
                base_stat: 109,
                effort: 3,
                stat: {
                    name: "special-attack",
                    url: "https://pokeapi.co/api/v2/stat/4/",
                },
            },
            {
                base_stat: 85,
                effort: 0,
                stat: {
                    name: "special-defense",
                    url: "https://pokeapi.co/api/v2/stat/5/",
                },
            },
            {
                base_stat: 100,
                effort: 0,
                stat: {
                    name: "speed",
                    url: "https://pokeapi.co/api/v2/stat/6/",
                },
            },
        ],
        types: [
            {
                slot: 1,
                type: {
                    name: "fire",
                    url: "https://pokeapi.co/api/v2/type/10/",
                },
            },
            {
                slot: 2,
                type: {
                    name: "flying",
                    url: "https://pokeapi.co/api/v2/type/3/",
                },
            },
        ],
        weight: 905,
    },
    {
        abilities: [
            {
                ability: {
                    name: "torrent",
                    url: "https://pokeapi.co/api/v2/ability/67/",
                },
                is_hidden: false,
                slot: 1,
            },
            {
                ability: {
                    name: "rain-dish",
                    url: "https://pokeapi.co/api/v2/ability/44/",
                },
                is_hidden: true,
                slot: 3,
            },
        ],
        height: 5,
        id: 7,
        name: "squirtle",
        sprites: {
            front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        },
        stats: [
            {
                base_stat: 44,
                effort: 0,
                stat: {
                    name: "hp",
                    url: "https://pokeapi.co/api/v2/stat/1/",
                },
            },
            {
                base_stat: 48,
                effort: 0,
                stat: {
                    name: "attack",
                    url: "https://pokeapi.co/api/v2/stat/2/",
                },
            },
            {
                base_stat: 65,
                effort: 1,
                stat: {
                    name: "defense",
                    url: "https://pokeapi.co/api/v2/stat/3/",
                },
            },
            {
                base_stat: 50,
                effort: 0,
                stat: {
                    name: "special-attack",
                    url: "https://pokeapi.co/api/v2/stat/4/",
                },
            },
            {
                base_stat: 64,
                effort: 0,
                stat: {
                    name: "special-defense",
                    url: "https://pokeapi.co/api/v2/stat/5/",
                },
            },
            {
                base_stat: 43,
                effort: 0,
                stat: {
                    name: "speed",
                    url: "https://pokeapi.co/api/v2/stat/6/",
                },
            },
        ],
        types: [
            {
                slot: 1,
                type: {
                    name: "water",
                    url: "https://pokeapi.co/api/v2/type/11/",
                },
            },
        ],
        weight: 90,
    },
    {
        abilities: [
            {
                ability: {
                    name: "torrent",
                    url: "https://pokeapi.co/api/v2/ability/67/",
                },
                is_hidden: false,
                slot: 1,
            },
            {
                ability: {
                    name: "rain-dish",
                    url: "https://pokeapi.co/api/v2/ability/44/",
                },
                is_hidden: true,
                slot: 3,
            },
        ],
        height: 10,
        id: 8,
        name: "wartortle",
        sprites: {
            front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
        },
        stats: [
            {
                base_stat: 59,
                effort: 0,
                stat: {
                    name: "hp",
                    url: "https://pokeapi.co/api/v2/stat/1/",
                },
            },
            {
                base_stat: 63,
                effort: 0,
                stat: {
                    name: "attack",
                    url: "https://pokeapi.co/api/v2/stat/2/",
                },
            },
            {
                base_stat: 80,
                effort: 1,
                stat: {
                    name: "defense",
                    url: "https://pokeapi.co/api/v2/stat/3/",
                },
            },
            {
                base_stat: 65,
                effort: 0,
                stat: {
                    name: "special-attack",
                    url: "https://pokeapi.co/api/v2/stat/4/",
                },
            },
            {
                base_stat: 80,
                effort: 1,
                stat: {
                    name: "special-defense",
                    url: "https://pokeapi.co/api/v2/stat/5/",
                },
            },
            {
                base_stat: 58,
                effort: 0,
                stat: {
                    name: "speed",
                    url: "https://pokeapi.co/api/v2/stat/6/",
                },
            },
        ],
        types: [
            {
                slot: 1,
                type: {
                    name: "water",
                    url: "https://pokeapi.co/api/v2/type/11/",
                },
            },
        ],
        weight: 225,
    },
    {
        abilities: [
            {
                ability: {
                    name: "torrent",
                    url: "https://pokeapi.co/api/v2/ability/67/",
                },
                is_hidden: false,
                slot: 1,
            },
            {
                ability: {
                    name: "rain-dish",
                    url: "https://pokeapi.co/api/v2/ability/44/",
                },
                is_hidden: true,
                slot: 3,
            },
        ],
        height: 16,
        id: 9,
        name: "blastoise",
        sprites: {
            front_default:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        },
        stats: [
            {
                base_stat: 79,
                effort: 0,
                stat: {
                    name: "hp",
                    url: "https://pokeapi.co/api/v2/stat/1/",
                },
            },
            {
                base_stat: 83,
                effort: 0,
                stat: {
                    name: "attack",
                    url: "https://pokeapi.co/api/v2/stat/2/",
                },
            },
            {
                base_stat: 100,
                effort: 0,
                stat: {
                    name: "defense",
                    url: "https://pokeapi.co/api/v2/stat/3/",
                },
            },
            {
                base_stat: 85,
                effort: 0,
                stat: {
                    name: "special-attack",
                    url: "https://pokeapi.co/api/v2/stat/4/",
                },
            },
            {
                base_stat: 105,
                effort: 3,
                stat: {
                    name: "special-defense",
                    url: "https://pokeapi.co/api/v2/stat/5/",
                },
            },
            {
                base_stat: 78,
                effort: 0,
                stat: {
                    name: "speed",
                    url: "https://pokeapi.co/api/v2/stat/6/",
                },
            },
        ],
        types: [
            {
                slot: 1,
                type: {
                    name: "water",
                    url: "https://pokeapi.co/api/v2/type/11/",
                },
            },
        ],
        weight: 855,
    },
];
