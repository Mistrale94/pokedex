import React from 'react'
import style from '../../styles/Home.module.scss'

export default function Loader() {
    return (
        <>
            <div className={style.loadings}>
                <span className={style.text_loading}>L</span>
                <span className={style.text_loading}>O</span>
                <span className={style.text_loading}>A</span>
                <span className={style.text_loading}>D</span>
                <span className={style.text_loading}>I</span>
                <span className={style.text_loading}>N</span>
                <span className={style.text_loading}>L</span>
                <span className={style.text_loading}>G</span>
                <span className={style.text_loading}>.</span>
                <span className={style.text_loading}>.</span>
                <span className={style.text_loading}>.</span>
            </div>
            <div className="loader">
                <div className="pikachu">
                    <img
                        src="https://c.tenor.com/2lFt6lp1KaMAAAAi/run-pokemon.gif"
                        alt="pikachu"
                    />
                </div>
            </div>
        </>
    )
}
