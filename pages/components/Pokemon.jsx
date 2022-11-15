import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from '../../styles/Home.module.scss'
import { useEffect, useState } from 'react'

const Pokemon = ({ name, index, url }) => {
    const [pkmnSprite, setPkmnSprite] = useState(url)

    useEffect(() => {
        const getSprite = () => {
            const pkmnId = url
                .split('/')
                .filter((e) => e)
                .at(-1)
            setPkmnSprite(
                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmnId}.png`
            )
        }
        getSprite()
    }, [])

    return (
        <>
            <li key={index} className={style.pokemon_card}>
                <Link href={{ pathname: '/[slug]', query: { slug: name } }}>
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

export default Pokemon
