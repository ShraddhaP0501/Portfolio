import "./Skills.css";
import {
    FaReact,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaDatabase,
    FaPython,
    FaGitAlt,
    FaGithub
} from "react-icons/fa";

const Skills = () => {
    return (
        <section id="skills">
            <div className="container">
                <h2>My Skills</h2>

                {/* FRONTEND */}
                <h3>Frontend</h3>
                <div className="skills-container">
                    <div className="skill-card"><FaReact /><p>React</p></div>
                    <div className="skill-card"><FaHtml5 /><p>HTML</p></div>
                    <div className="skill-card"><FaCss3Alt /><p>CSS</p></div>
                    <div className="skill-card"><FaJs /><p>JavaScript</p></div>
                </div>

                {/* BACKEND */}
                <h3>Backend</h3>
                <div className="skills-container">
                    <div className="skill-card"><FaPython /><p>Python</p></div>
                    <div className="skill-card"><FaDatabase /><p>MySQL</p></div>
                </div>

                {/* TOOLS (NEW 🔥) */}
                <h3>Tools</h3>
                <div className="skills-container">
                    <div className="skill-card"><FaGitAlt /><p>Git</p></div>
                    <div className="skill-card"><FaGithub /><p>GitHub</p></div>
                </div>

                {/* SOFT SKILLS */}
                <h3>Soft Skills</h3>
                <div className="skills-container">
                    <div className="skill-card"><p>Communication</p></div>
                    <div className="skill-card"><p>Problem Solving</p></div>
                </div>

            </div>
        </section>
    );
};

export default Skills;
