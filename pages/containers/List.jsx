import React from 'react'
import Pokemon from '../components/Pokemon'
import style from '../../styles/Home.module.scss'

export default function List({ data = [] }) {
    if (data && data.length === 0) return <>Aucun pokemon trouvé</>

    return (
        <div className={style.pokemon_container}>
            {data.map((item, index) => (
                <Pokemon key={item.name} {...item} index={index} />
            ))}
        </div>
    )
}
