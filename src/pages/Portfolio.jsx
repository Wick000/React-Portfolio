
import { FaGithub } from "react-icons/fa";
import "./Portfolio.css";


const projects = [
  {
    title: "Project One Air bnb APP",
    image: "/assets/background.webp",
    github: "https://github.com/Wick000/Monson-Meadows-Lodge",
  },
  {
    title: "README Generator",
    image: "/assets/README.webp",
    github: "https://github.com/Wick000/Module-7-Challenge",
  },
  {
    title: "Vehicle Builder CLI APP",
    image: "/assets/vehicle.jpg",
    github: "https://github.com/Wick000/Module-8-Challenge",
  },
  {
    title: "Weather Forecast APP",
    image: "/assets/weather.jpg",
    github: "https://github.com/Wick000/Module-9-Challenge",
  },
  {
    title: "Employee Tracker APP",
    image: "/assets/database.webp",
    github: "https://github.com/Wick000/Employee-Tracker-App",
  },
  {
    title: "Coming Soon",
    image: "/assets/coming-soon.png",
    github: "https://github.com/Wick000",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <div
                className="project-image"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="overlay">
                  <h3>{project.title}</h3>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="github-icon" />
                  </a>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
