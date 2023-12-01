import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

function Form() {
    const form = useRef();
    const [isSubmit, setIsSubmit] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ci1jlyb', 'template_g3g62xj', form.current, 'omaQ_3xZOro7v3Pzj')
            .then((result) => {
                setIsSubmit(true);
                console.log(result.text);
                setTimeout(function () {
                    e.target.reset();
                    setIsSubmit(false);
                }, 2000);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (<div>
        <form className="form" ref={form} onSubmit={sendEmail}>
            <input
                type="text"
                name="name"
                placeholder="Votre nom"
                className="formInput formInputInfos"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Votre email"
                className="formInput formInputInfos"
                required
            />
            <textarea
                type="text"
                name="message"
                placeholder="Votre message"
                className="formInput formInputText"
                required
            />
            <p className="formMessage"> {isSubmit ? "Votre message a été envoyé avec succès !" : ""} </p>
            <button
                className="formBtn"
                type="submit">
                Envoyer
            </button>
        </form>
    </div>
    )
}

export default Form