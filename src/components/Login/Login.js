import React from 'react';
import {Link} from 'react-router-dom'

const Login = () => {

    return (
        <div className="login">
            <div className="login__container">
                <h2 className="login__title">Zaloguj się</h2>
                <form action="" className="login__form form">
                   <label>Email<input
                        type="email"
                        className="form__email"/>
                   </label>
                    <label>Hasło<input
                        type="password"
                        className="form__password"/>
                    </label>
                </form>
                <div className="login__buttons">
                    <Link to="/register">Załóż konto</Link>
                    <button type="submit" className="login__button">Zaloguj się</button>
                </div>
            </div>
        </div>
    )
}

export default Login