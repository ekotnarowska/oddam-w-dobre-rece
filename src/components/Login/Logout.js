import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import HomeHeaderMenu from "../Home/HomeHeader/HomeHeaderMenu";

const Logout = () => {
    return (
        <div className="logout">
            <div className="container">
                <HomeHeaderMenu/>
                <div className="logout__container">
                    <h2 className="logout__title">Wylogowanie nastąpiło pomyślnie</h2>
                    <Link className="logout__button active" to="/">Strona główna</Link>
                </div>
            </div>
        </div>

    )
}

export default Logout