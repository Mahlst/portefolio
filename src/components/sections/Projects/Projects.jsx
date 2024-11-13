import './Projects.scss';
import { Link } from 'react-router-dom';
import ProjectCard from '../../ui/Card/ProjectCard';
import { projectsList } from '../../../data/projects';
import { FaConnectdevelop } from "react-icons/fa";

export default function Projects() {
    return (
        <section id="projects" className='section__projects'>
            <h2 className='section__projects-title'><FaConnectdevelop className='section__projects-icon'/> Mes derniers projets</h2>
            <div className='section__projects-container'>
                {projectsList.map((project, index) => (
                    <Link 
                        key={index} 
                        to={`/projects/${project.id}`} 
                        className="project-link"
                    >
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            tags={project.tags}
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
}