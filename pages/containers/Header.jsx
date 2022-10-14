import React from 'react'
import Image from 'next/image'
import banniere from '../../public/banniere.png'
import style from '../../styles/Home.module.scss'
import Nav from '../components/Nav'

export default function Header() {
  return (
    <>
      <Nav/>
      <div className={style.banniere_container}>

      </div>
      
    </>
  )
}
