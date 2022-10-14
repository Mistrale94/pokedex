import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from '../../styles/Home.module.scss'
import logo from '../../public/logo.png'

export default function Nav() {
  return (
    <nav className={style.nav}>
        <Link href={'/'}>
            <Image 
                className={style.logo}
                src={logo}
                alt={'Logo du pokédex'}
                height={80}
                width={240}
            />
        </Link>
    </nav>
  )
}
