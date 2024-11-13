import { useParams } from 'react-router-dom';
import { projectsList } from '../../../data/projects';
import './ProjectDetail.scss';
import Header from '../../layout/Header/Header';

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
        <section className="project-detail">
            <h1>{project.title}</h1>
            <img src={project.imageUrl} alt={project.title} />
            <p>{project.description}</p>
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
        </section>
        </>

    );
}