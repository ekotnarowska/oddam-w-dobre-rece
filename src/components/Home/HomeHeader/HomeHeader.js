import React from 'react';
import {Link} from "react-router-dom"
import HomeHeaderMenu from "./HomeHeaderMenu";


const HomeHeader = () => {

    return (
        <div className="header">
            <div className="container">
                <div className="header__image"></div>
                <HomeHeaderMenu/>
                <div className="header__bottom">
                    <h1 className="header__title">Zacznij pomagać! Oddaj niechciane rzeczy w zaufane
                        ręce</h1>
                    <div className="header__buttons">
                        <Link to="/login"><h2 className="header__button button">Oddaj Rzeczy</h2></Link>
                        <Link to="/login"><h2 className="header__button button">Zorganizuj zbiórkę</h2></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeHeader