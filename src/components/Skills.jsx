import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaGithub,
    FaGitAlt,
    FaPython,
    FaDatabase
} from "react-icons/fa6";
import "./Skills.css";

const Skills = () => {
    return (
        <section id="skills">
            <h2>My Skills</h2>

            {/* FRONTEND */}
            <div className="skill-category">
                <h3>Frontend</h3>
                <div className="skills-container">
                    <div className="skill-card"><FaReact /><p>React</p></div>
                    <div className="skill-card"><FaHtml5 /><p>HTML</p></div>
                    <div className="skill-card"><FaCss3Alt /><p>CSS</p></div>
                    <div className="skill-card"><FaJs /><p>JavaScript</p></div>
                </div>
            </div>

            {/* BACKEND */}
            <div className="skill-category">
                <h3>Backend</h3>
                <div className="skills-container">
                    <div className="skill-card"><FaPython /><p>Python</p></div>
                    <div className="skill-card"><FaDatabase /><p>MySQL</p></div>
                </div>
            </div>

            {/* TOOLS */}
            <div className="skill-category">
                <h3>Tools</h3>
                <div className="skills-container">
                    <div className="skill-card"><FaGitAlt /><p>Git</p></div>
                    <div className="skill-card"><FaGithub /><p>GitHub</p></div>
                </div>
            </div>
            {/* SOFT SKILLS */}
            <div className="skill-category">
                <h3>Soft Skills</h3>

                <div className="skills-container">
                    <div className="skill-card">
                        <p>Communication</p>
                    </div>

                    <div className="skill-card">
                        <p>Problem Solving</p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Skills;
