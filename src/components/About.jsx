import "./About.css";
import profile from "../assets/profile.jpg"; // 👈 add your image

const About = () => {
    return (
        <section id="about">
            <div className="container about-container">
                {/* TEXT */}
                <div className="about-content">
                    <h2>About Me</h2>
                    {/* IMAGE */}
                    <div className="about-img">
                        <img src={profile} alt="profile" />
                    </div>

                    <p>
                        I am a passionate web developer with a strong interest in becoming a Full Stack Developer.
                        I enjoy building modern, responsive user interfaces and developing efficient backend systems.
                    </p>

                    <p>
                        I am always eager to learn new technologies and improve my skills.
                        Currently, I am looking for internship opportunities to gain real-world experience and contribute to meaningful projects.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default About;
