import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/src/pokemons";
import { cacheLife, cacheTag, revalidateTag } from "next/cache";
import { Suspense } from "react";

export const metadata = {
    title: '151 Pokemons',
    description: 'Pagina de 151 pokemons'
}

const getPokemons = async(limit = 20, offset = 0):Promise<SimplePokemon[]> => {
    "use cache";
    cacheTag('pokemons');
    cacheLife('hours');
    const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
        .then(data => data.json()).catch(err => console.log(err))
    
    const pokemons = data.results.map( pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }));

    return pokemons;

} 

export default async function PokemonsPage() {

    // 'use cache';

    // cacheTag('pokenons')

    // cacheLife({
    //    stale: 10,
    //    revalidate: 60 
    // })

    // revalidateTag('pokemons', 'max');

    const pokemons = await getPokemons(151);

    return (
        <div className="flex flex-col">

            <span className="text-5xl my-2">Listado de Pokemons <small className="text-blue-500">estático</small></span>

            <Suspense fallback={ <div>Cargando pokemons...</div> }>
                <PokemonGrid pokemons={ pokemons } />
            </Suspense>

        </div>
    );

}