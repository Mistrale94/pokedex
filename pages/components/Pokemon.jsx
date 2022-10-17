import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from '../../styles/Home.module.scss'
import { useEffect, useState } from "react";

const Pokemon = ({name, index}) => {

    const [pkmnSprite, setPkmnSprite] = useState();

    useEffect(() => {
      const getSprite = () => {
        const pkmnId = ('00' + (index + 1)).slice(-3)
          .split("/")
          .filter((e) => e)
        setPkmnSprite(
            `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pkmnId}.png`
        );
      };
      getSprite();
    }, []);

  return (
    <>
        <li key={index} className={style.pokemon_card}>
            <Link href={{pathname: "components/[slug]", query: { slug: name }}}>
                <a>
                    <Image 
                        src={pkmnSprite}
                        alt={name}
                        width={180}
                        height={180}
                    />
                    <h5>{name}</h5>
                </a>
            </Link>
        </li>
    </>
  )
}

export default Pokemon;
