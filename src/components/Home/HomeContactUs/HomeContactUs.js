import React, {useState} from 'react';


const HomeContactUs = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        message: ""

    })

    const [errorBox, setErrorBox] = useState([])
    const [success, setSuccess] = useState(false)

    const handleInputs = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value})

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let errors = [];
        let correct = true;

        if (inputs.name.include(" ") ) {
            correct = false;
            errors.push("Podane imię jest nieprawidłowe")
        }

        if (inputs.email) {
            correct = false;
            errors.push("Podany e-mail jest nieprawidłowy")

        }
        if (inputs.message.length < 120 ) {
            correct = false;
            errors.push("Wiadomość musi mieć conajmniej 120 znaków")
        }

        setErrorBox([])
        setSuccess(true)
    }



    return (
        <>
            <section id="contactUs" className="contact">
                <div className="container">
                    <form onSubmit={handleSubmit} action="" className="contact__form">
                        <h2 className="contact__title">Skontaktuj się z nami</h2>
                        <div className="contact__inputs">
                            <label>Wpisz swoje imię<input
                                onChange={handleInputs}
                                type="text"
                                name="name"
                                placeholder='Krzysztof'
                                value=""
                                className="contact__input">

                            </input></label>
                            <label>Wpisz swój e-mail<input
                                onChange={handleInputs}
                                type="email"
                                name="email"
                                placeholder="abc@xyz.pl"
                                value=""
                                className="contact__input">

                            </input></label>
                        </div>
                        <label>Wpisz swoją wiadomość<textarea
                            onChange={handleInputs}
                            name="message"
                            value=""
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            className="contact__message">
                    </textarea></label>
                    </form>
                    <button type="submit" className="contact__btn">Wyślij</button>

                    <ul>
                        {
                            errorBox.map((e, i) => {
                                return <li key={i}>{e}</li>
                            })
                        }
                    </ul>
                    {
                        success && <p>Wiadomość została wysłana</p>
                    }






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
                </div>
            </section>
        </>
    )
}

export default HomeContactUs