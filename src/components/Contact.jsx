import "./Contact.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <h2>Contact Me</h2>
                <p>Let's connect 👇</p>

                <div className="contact-icons">

                    <a
                        href="https://www.linkedin.com/in/shraddha-prajapati-8861b9378"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-item"
                    >
                        <FaLinkedin />
                        <span>Shraddha Prajapati</span>
                    </a>

                    <a
                        href="https://github.com/ShraddhaP0501"
                        target="_blank"
                        rel="noreferrer"
                        className="contact-item"
                    >
                        <FaGithub />
                        <span>ShraddhaP0501</span>
                    </a>

                    <a
                        href="mailto:shraddhap0501@gmail.com"
                        className="contact-item"
                    >
                        <MdEmail />
                        <span>shraddhap0501@gmail.com</span>
                    </a>

                </div>
            </div>
        </section>
    );
};

export default Contact;
