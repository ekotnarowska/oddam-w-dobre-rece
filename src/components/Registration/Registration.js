import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import HeaderLoginBar from "../Home/HomeHeader/HeaderLoginBar";


const Registration = () => {

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        passwordRepeat:""

    });
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        password2:""
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

        if (inputs.password !== inputs.password2) {
            isCorrect = false;
            errors.password2 = "Podane hasła nie są identyczne";
        } else {
            isCorrect = true;
            errors.password2 = "";

        }

        setErrors({...errors});


        return isCorrect

    }

    const handleChange = (e) => {
        e.preventDefault()
        if (validate()) {
            setInputs({
                email: "",
                password: "",
                password2: ""
            })
        } else {
            return errors
        }

    }

    return (
        <div className="register">
            <div className="container">
                <div className="header__top">
                    <HeaderLoginBar/>
                    <Link className="home__button" to="/">Strona główna</Link>
                </div>
                <div className="register__container">
                    <h2 className="register__title">Zarejestruj się</h2>
                    <form onSubmit={handleChange} action="" className="register__form form">
                        <div className="register__container-form">
                        <label>Email<input
                            type="email"
                            name="email"
                            onChange={handleInputs}
                            value={inputs.email}
                            className="form__email"/>
                        </label>
                            {errors.email && (
                                <p className="form__error">{errors.email}</p>
                            )}
                        <label>Hasło<input
                            type="password"
                            name="password"
                            onChange={handleInputs}
                            value={inputs.password}
                            className="form__password"/>
                        </label>
                            {errors.password && (
                                <p className="form__error">{errors.password}</p>
                            )}
                        <label>Powtórz hasło<input
                            type="password"
                            name="password2"
                            onChange={handleInputs}
                            value={inputs.password2}
                            className="form__password"/>
                        </label>
                            {errors.password2 && (
                                <p className="form__error">{errors.password2}</p>
                            )}
                        </div>
                        <div className="register__buttons">
                            <Link className="register__button" to="/login">Zaloguj się</Link>
                            <button type="submit" className="register__button active">Zarejestruj się</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration