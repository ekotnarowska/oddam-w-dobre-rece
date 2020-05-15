import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import HomeHeaderMenu from "../Home/HomeHeader/HomeHeaderMenu";
import HeaderLoginBar from "../Home/HomeHeader/HeaderLoginBar";

const Login = () => {

    const [inputs, setInputs] = useState({
        email: "",
        password: ""

    });
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });

    const handleInputs = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value})

    };

    const validate = () => {
        let isCorrect = true;
        const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRegex.test(inputs.email)) {
            isCorrect = false;
            errors.email = "Podany e-mail jest nieprawidowy"
        } else {
            isCorrect = true;
            errors.email = "";

        }
        if (inputs.password.length < 6) {
            isCorrect = false;
            errors.password = "Podane hasło jest za krótkie";
        } else {
            isCorrect = true;
            errors.password = "";

        }

        setErrors({...errors});


        return isCorrect

    }

    const handleChange = (e) => {
        e.preventDefault()
        if (validate()) {
            setInputs({
                email: "",
                password: ""
            })
        } else {
            return errors
        }

    }

    return (
        <>

            <div className="login">
                <div className="container">
                    <div className="header__top">
                    <HeaderLoginBar/>
                    <Link className="home__button" to="/">Strona główna</Link>
                    </div>
                    <div className="login__container">
                        <h2 className="login__title">Zaloguj się</h2>
                        <form action="" onSubmit={handleChange} className="login__form form">
                            <div className="login__container-form">
                                <label className="form__label">Email<input
                                    type="email"
                                    name="email"
                                    onChange={handleInputs}
                                    value={inputs.email}
                                    className="form__email"/>
                                </label>
                                {errors.email && (
                                    <p className="form__error">{errors.email}</p>
                                )}
                                <label className="form__label">Hasło<input
                                    type="password"
                                    name="password"
                                    onChange={handleInputs}
                                    value={inputs.password}
                                    className="form__password"/>
                                </label>
                                {errors.password && (
                                    <p className="form__error">{errors.password}</p>
                                )}
                            </div>
                            <div className="login__buttons">
                                <Link className="login__button" to="/register">Załóż konto</Link>
                                <button type="submit" className="login__button active">Zaloguj się</button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Login