import "./Projects.css";

const Projects = () => {

    const projectList = [
        {
            title: "Scholarship Finder",
            desc: "A web application to find scholarships based on category, gender, and income using Flask and MySQL.",
            tech: "HTML, CSS, JavaScript, Flask, MySQL",
            github: "https://github.com/ShraddhaP0501/ScholarshipFinder",
        },
        {
            title: "Education Advisor System",
            desc: "A web-based application that helps students find suitable courses and career options based on their interests and academic background.",
            tech: "React, Flask, MySQL",
            github: "https://github.com/ShraddhaP0501/EducationAdvisor",
        },
        {
            title: "Ride Sharing App",
            desc: "A real-time ride sharing app with notifications using Firebase.",
            tech: "React Native, Firebase",
            github: "https://github.com/ShraddhaP0501/RideShareApp",
        }
    ];

    return (
        <section id="projects">
            <div className="container">
                <h2>My Projects</h2>

                <div className="projects-container">
                    {projectList.map((project, index) => (
                        <div className="project-card" key={index}>

                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                            <p className="tech">{project.tech}</p>

                            <div className="project-links">
                                <a href={project.github} target="_blank">GitHub</a>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
