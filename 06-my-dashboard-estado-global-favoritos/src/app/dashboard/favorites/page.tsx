import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/src/pokemons";
import { cacheLife, cacheTag, revalidateTag } from "next/cache";

export const metadata = {
    title: 'Favoritos',
    description: 'Tus pokemons favoritos'
}

export default async function PokemonsPage() {

    return (
        <div className="flex flex-col">

            <span className="text-5xl my-2">Pokemons favoritos <small className="text-blue-500">Global State</small></span>

            <PokemonGrid pokemons={ [] } />

        </div>
    );

}