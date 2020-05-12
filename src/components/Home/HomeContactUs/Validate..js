import react from "react";

const Validate = () => {

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