import React from 'react';
import {Link} from"react-router-dom"
import {Link as ScrollLink} from "react-scroll";
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
                        <li className="header__menu-item"><ScrollLink to="fourSteps" activeClassName="active">O co chodzi</ScrollLink></li>
                        <li className="header__menu-item"><ScrollLink to="aboutUs" activeClassName="active">O nas</ScrollLink></li>
                        <li className="header__menu-item"><ScrollLink to="foundationAndOrganization" activeClassName="active">Fundacje i
                            Organizacje</ScrollLink>
                        </li>
                        <li className="header__menu-item"><ScrollLink to="contactUs">Kontakt</ScrollLink></li>
                    </ul>
                </div>
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