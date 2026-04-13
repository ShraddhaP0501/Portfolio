import React from "react";
import "./Projects.css";
const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>

            <div className="project-card">
                <h3>Scholarship Finder</h3>
                <p>Flask-based web app to find scholarships.</p>

                <a href="https://github.com/yourgithub" target="_blank">
                    GitHub
                </a>
            </div>

        </section>
    );
};

export default Projects;
