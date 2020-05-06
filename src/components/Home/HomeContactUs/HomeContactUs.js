import React from 'react';


const HomeContactUs = () => {

    return (
        <>
            <section id="contactUs" className="contact">
                <div className="container">
                    <form action="" className="contact__form">
                        <h2 className="contact__title">Skontaktuj się z nami</h2>
                        <div className="contact__inputs">
                        <label>Wpisz swoje imię<input
                            type="text"
                            name="name"
                            placeholder='Krzysztof'
                            value=""
                            className="contact__input">

                        </input></label>
                        <label>Wpisz swój e-mail<input
                            type="email"
                            name="email"
                            placeholder="abc@xyz.pl"
                            value=""
                            className="contact__input">

                        </input></label>
                        </div>
                        <label>Wpisz swoją wiadomość<textarea
                            name="message"
                            value=""
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                            className="contact__message">

                    </textarea></label>
                    </form>
                    <div className="footer">
                        <small className="footer__copyright">
                            Copyright by Coders Lab
                        </small>
                        <div className="footer__social">

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeContactUs