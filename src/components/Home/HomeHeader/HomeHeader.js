import React from 'react';
// import {Link} from"react-router-dom"
import {Link} from "react-scroll";
import "../../../scss/main.scss";


const HomeHeader = () => {

    return (
        <div className="header">
            <div className="container">
                <div className="header__image"></div>
                <div className="header__top">
                    <div className="header__login-bar ">
                        <Link to='/login' className="login__link">Zaloguj się</Link>
                        <Link to='/register' className="login__link">Załóż konto</Link>
                    </div>
                    <ul className="header__menu">
                        <li className="header__menu-item"><Link to="/" activeClassName="active">Start</Link></li>
                        <li className="header__menu-item"><Link to="fourSteps" activeClassName="active">O co chodzi</Link></li>
                        <li className="header__menu-item"><Link to="aboutUs" activeClassName="active">O nas</Link></li>
                        <li className="header__menu-item"><Link to="foundationAndOrganization" activeClassName="active">Fundacje i
                            Organizacje</Link>
                        </li>
                        <li className="header__menu-item"><Link to="contactUs">Kontakt</Link></li>
                    </ul>
                </div>
                <div className="header__bottom">
                    <h1 className="header__title">Zacznij pomagać! Oddaj niechciane rzeczy w zaufane
                        ręce</h1>
                    <div className="header__buttons">
                        <Link to="/login"><h2 className="header__button">Oddaj Rzeczy</h2></Link>
                        <Link to="/login"><h2 className="header__button">Zorganizuj zbiórkę</h2></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HomeHeader