import styles from '../../styles/Home.module.scss'
import Link from 'next/link'

export default function Type({ type }) {
    return (
        <Link href={`/types/${type}`}>
            <a className={`${styles.types__type} ${styles[type]}`}>{type}</a>
        </Link>
    )
}
