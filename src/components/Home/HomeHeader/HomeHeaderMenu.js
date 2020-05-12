import {Link as ScrollLink} from "react-scroll";
import {Link} from"react-router-dom"
import React from "react";


const HomeHeaderMenu = () => {

    return (
        <>
            <div className="header__top">
                <div className="header__login-bar ">
                    <Link to='/login' className="header__login-link">Zaloguj się</Link>
                    <Link to='/register' className="header__login-link">Załóż konto</Link>
                </div>
                <ul className="header__menu">
                    <li className="header__menu-item"><Link className="header__menu-link" to="/" >Start</Link></li>
                    <li className="header__menu-item"><ScrollLink className="header__menu-link" to="fourSteps" >O co chodzi</ScrollLink></li>
                    <li className="header__menu-item"><ScrollLink className="header__menu-link" to="aboutUs" >O nas</ScrollLink></li>
                    <li className="header__menu-item"><ScrollLink className="header__menu-link" to="foundations">Fundacje i
                        Organizacje</ScrollLink>
                    </li>
                    <li className="header__menu-item"><ScrollLink className="header__menu-link"  to="contactUs">Kontakt</ScrollLink></li>
                </ul>
            </div>
        </>
    )
}

export default HomeHeaderMenu