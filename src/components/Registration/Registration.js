import React from 'react';
import {Link} from "react-router-dom";

const Registration = () => {
    return (
        <div className="register">
            <div className="register__container">
                <h2 className="register__title">Zaloguj się</h2>
                <form action="" className="register__form form">
                    <label>Email<input
                        type="email"
                        className="form__email"/>
                    </label>
                    <label>Hasło<input
                        type="password"
                        className="form__password"/>
                    </label>
                    <label>Password<input
                        type="password"
                        className="form__password"/>
                    </label>
                </form>
                <div className="register__buttons">
                    <Link to="/login">Zaloguj się</Link>
                    <button type="submit" className="register__button">Zarejestruj się</button>
                </div>
            </div>
        </div>
    )
}

export default Registration