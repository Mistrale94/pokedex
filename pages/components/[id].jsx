import React from "react";
import style from '../../styles/Home.module.scss'

const Pokemon = ({ pokemon }) => {
    return (
        <div className={style.pokemon_detail_container}>
            <div>
                <h1>{pokemon.name}</h1>
                <div className={style.detail_card}>
                    <img className="mx-auto" src={pokemon.image} alt={pokemon.name} />
                    <p>
                        <span>Poids:</span> {pokemon.weight}
                    </p>
                    <p>
                        <span>Taille:</span> {pokemon.height}
                    </p>
                    <h2>Types</h2>
                    {pokemon.types.map((type, index) => (
                        <p key={index} className={`${style.types__type} ${style[type.type.name]}`}>{type.type.name}</p>
                    ))}
                    <h2>Attaques</h2>
                    {pokemon.abilities.map((ability, index) => (
                        <p key={index} className={style.abilities}>{ability.ability.name}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}
export const getServerSideProps = async (context) => {
    const { id } = context.query;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await res.json();
    const paddedId = ('00' + id).slice(-3);
    pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
    return {
        props: { pokemon },
    };
}
export default Pokemon