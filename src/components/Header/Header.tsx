import React from "react";
import s from './Header.module.css'


export const Header = () => {
    return (
        <header className={s.header}>
            <img
                src='https://upload.wikimedia.org/wikipedia/ru/thumb/5/53/Arsenal_FC.svg/1200px-Arsenal_FC.svg.png'/>
        </header>
    )
}