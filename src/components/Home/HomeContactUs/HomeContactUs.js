import React, {useState} from 'react';


const HomeContactUs = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        message: ""

    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: ""
    });


    const [success, setSuccess] = useState(false);
    const [status, setStatus] = useState("")
    const [error, setError] = useState("")

    const handleInputs = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value})

    };

    const validate = () => {
        let isCorrect = true;
        const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (inputs.name.includes(" ")) {
            isCorrect = false;
            errors.name = "Podane imię jest nieprawidłowe"

        } else {
            isCorrect = true;
            errors.name = "";

        }

        if (!emailRegex.test(inputs.email)) {
            isCorrect = false;
            errors.email = "Podany e-mail jest nieprawidowy"
        } else {
            isCorrect = true;
            errors.email = "";

        }
        if (inputs.message.length < 120) {
            isCorrect = false;
            errors.message = "Wiadomość musi mieć co najmniej 120 znaków";
        } else {
            isCorrect = true;
            errors.message = "";

        }

        setErrors({...errors});


        return isCorrect


    }

    const sendMessage = (name, email, message) => {
        fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
            method: "POST",
            body: JSON.stringify({name, email, message}),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === "success") {
                    setSuccess(true)
                    setInputs({
                        name: "",
                    email: "",
                    message: ""
                    })

                }
                if (data.status === "error") {
                    const errors = {}
                    Object.values(data.errors).forEach(err => {
                        errors[err.param] = err.msg
                    })
                    setErrors(errors)
                }
            })
            .catch(error => setError(error));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(validate())
        if (validate()) {
            sendMessage(inputs.name, inputs.email, inputs.message)

        } else {
            return errors
        }
    };


    return (
        <>
            <section id="contactUs" className="contact">
                <div className="container">
                    <form action="" onSubmit={handleSubmit} className="contact__form form">
                        <h2 className="contact__title">Skontaktuj się z nami</h2>
                        {
                            success &&
                            <p className="form__success">Wiadomość została wysłana!<br/>Wkrótce się skontaktujemy</p>
                        }
                        <div className="contact__inputs">
                            <div className="contact__input-box">
                                <label>Wpisz swoje imię<input
                                    onChange={handleInputs}
                                    type="text"
                                    name="name"
                                    placeholder='Krzysztof'
                                    value={inputs.name}
                                    className={errors.name ? "contact__input contact__input--error" : "contact__input"}>
                                </input></label>
                                {errors.name && (
                                    <p className="form__error">{errors.name}</p>
                                )}
                            </div>
                            <div className="contact__input-box">
                                <label>Wpisz swój e-mail<input
                                    onChange={handleInputs}
                                    type="email"
                                    name="email"
                                    placeholder="abc@xyz.pl"
                                    value={inputs.email}
                                    className={errors.email ? "contact__input contact__input--error" : "contact__input"}>


                                </input></label>
                                {errors.email && (
                                    <p className="form__error">{errors.email}</p>
                                )}
                            </div>
                        </div>
                        <label className="form__label">Wpisz swoją wiadomość<textarea
                            onChange={handleInputs}
                            name="message"
                            value={inputs.message}
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            className={errors.message ? "contact__message contact__input--error" : "contact__message"}>
                    </textarea></label>
                        {errors.message && (
                            <p className="form__error">{errors.message}</p>
                        )}
                        <button type="submit" className="contact__btn">Wyślij</button>
                    </form>


                </div>
                <div className="footer">
                    <div className="footer__container">
                        <small className="footer__copyright">
                            Copyright by Coders Lab
                        </small>
                        <div className="footer__social">
                            <div className="footer__facebook"></div>
                            <div className="footer__instagram"></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeContactUs