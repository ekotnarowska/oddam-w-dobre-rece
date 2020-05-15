import {Link} from "react-router-dom";
import {Link as ScrollLink} from "react-scroll";
import React from "react";

const HeaderNav = () => {

    return (

        <ul className="header__menu">
            <li className="header__menu-item"><Link className="header__menu-link" to="/">Start</Link></li>
            <li className="header__menu-item"><ScrollLink className="header__menu-link" to="fourSteps">O co
                chodzi</ScrollLink></li>
            <li className="header__menu-item"><ScrollLink className="header__menu-link" to="aboutUs">O nas</ScrollLink>
            </li>
            <li className="header__menu-item"><ScrollLink className="header__menu-link" to="foundations">Fundacje i
                Organizacje</ScrollLink>
            </li>
            <li className="header__menu-item"><ScrollLink className="header__menu-link"
                                                          to="contactUs">Kontakt</ScrollLink>
            </li>
        </ul>

    )
}

export default HeaderNav