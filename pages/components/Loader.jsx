import React from 'react'
import style from '../../styles/Home.module.scss'

export default function Loader() {
  return (
    <>
        <div class="loadings">
            <span class="text-loading">L</span>
            <span class="text-loading">O</span>
            <span class="text-loading">A</span>
            <span class="text-loading">D</span>
            <span class="text-loading">I</span>
            <span class="text-loading">N</span>
            <span class="text-loading">G</span>
            <span class="text-loading">.</span>
            <span class="text-loading">.</span>
            <span class="text-loading">.</span>
        </div>
        <div class="loader">
            <div class="pikachu">
            <img src="https://c.tenor.com/2lFt6lp1KaMAAAAi/run-pokemon.gif" alt="pikachu"/>
            </div>
        </div>
    </>
  )
}
