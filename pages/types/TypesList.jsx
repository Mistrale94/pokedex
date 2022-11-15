import MainContext from '../contexts/Main'
import { useContext } from 'react'
import Type from './Type'
import styles from '../../styles/Home.module.scss'

export default function Types() {
    const { hasError, types } = useContext(MainContext)

    if (hasError) return <p>Une erreur est survenue...</p>

    return (
        <div className={styles.types_container}>
            {types.map((item, index) => (
                <div className={styles.types_main} key={index}>
                    <Type type={item.name} />
                </div>
            ))}
        </div>
    )
}
