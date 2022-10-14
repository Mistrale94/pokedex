import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from '../../styles/Home.module.scss'

const Pokemon = ({pokemon, index}) => {

    const pokeIndex = ('00' + (index + 1)).slice(-3);

  return (
    <>
        <li key={index} className={style.pokemon_card}>
            <Link href={`./components/${index + 1}`}>
                <a>
                    <Image 
                        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokeIndex}.png`}
                        alt={pokemon.name}
                        width={180}
                        height={180}
                    />
                    <h5>{pokemon.name}</h5>
                </a>
            </Link>
        </li>
    </>
  )
}

export default Pokemon;
