import { useParams } from 'react-router-dom';
import { projectsList } from '../../../data/projects';
import './ProjectDetail.scss';
import Header from '../../layout/Header/Header';
import Footer from '../../layout/Footer/Footer';
import SocialButton from '../../ui/Button/SocialButton';
import { FaGithub } from "react-icons/fa";
import { RiHexagonLine } from "react-icons/ri";

export default function ProjectDetail() {
    const { id } = useParams();
    console.log('ID:', id);
    console.log('Projects:', projectsList);
    
    const project = projectsList.find(p => p.id === id);
    console.log('Found project:', project);
    
    if (!project) {
        return <div>Projet non trouvé</div>;
    }

    return (
        <>
        <Header />
        <section className="project__detail">
            <h1 className='project__detail-title'>Projet : {project.title}</h1>
            <img className='project__detail-image' src={project.imageUrl} alt={project.title} />
            <div className="project__tags">
                {project.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="project__tag"
                        style={{ background: tag.color }}
                    >
                        {tag.icon}
                        {tag.label}
                    </span>
                ))}
            </div>

            <h2 className='project__detail-titleh2'>Contexte</h2>
            <p className='project__detail-text'>{project.context}</p>


            <h2 className='project__detail-titleh2'>Réalisation</h2>
            <p className='project__detail-text'>{project.realization}</p>

            <div className='project__detail-button'>
                <SocialButton 
                    href={project.github}
                    icon={FaGithub}
                    label="GitHub"
                    variant="default"
                />
                <SocialButton 
                    href={project.demo}
                    icon={RiHexagonLine}
                    label="Demo"
                    variant="default"
                />
            </div>
        </section>
        <Footer />
        </>

    );
}