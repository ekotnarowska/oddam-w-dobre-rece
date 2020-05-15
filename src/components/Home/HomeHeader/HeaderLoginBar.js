import {Link} from "react-router-dom";
import React from "react";


const HeaderLoginBar = () => {

    return (

            <div className="header__login-bar ">
                <Link to='/login' className="header__login-link">Zaloguj się</Link>
                <Link to='/register' className="header__login-link">Załóż konto</Link>
            </div>


    )
}

export default HeaderLoginBar