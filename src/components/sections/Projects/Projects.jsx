import './Projects.scss';
import ProjectCard from '../../ui/Card/ProjectCard';
import portrait from '../../../assets/portrait.jpg'
import booki from '../../../assets/booki.jpg'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";

export default function Projects() {
    // Données des projets
    const projectsList = [
        {
            title: "Booki",
            description: "Créez la page d'accueil d'une agance de voyage avec HTML & CSS",
            imageUrl: booki,
            tags: [
                { 
                    label: "HTML", 
                    icon: <FaHtml5 />,
                    color: "#e65100"
                },
                { 
                    label: "CSS", 
                    icon: <IoLogoCss3 />,
                    color: "#1471b6"
                }
            ]
        },
        {
            title: "Autre Projet",
            description: "Description de mon autre projet tout aussi intéressant.",
            imageUrl: portrait,
            tags: [
                { 
                    label: "JavaScript", 
                    icon: <IoLogoJavascript />,
                    color: "#F7DF1E" // Couleur JavaScript
                }
            ]
        },
        {
            title: "Autre Projet",
            description: "Description de mon autre projet tout aussi intéressant.",
            imageUrl: portrait,
            tags: [
                { 
                    label: "JavaScript", 
                    icon: <IoLogoJavascript />,
                    color: "#F7DF1E" // Couleur JavaScript
                }
            ]
        }
    ];

    return (
        <>
            <section className='section__projects'>
                    {projectsList.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.imageUrl}
                            tags={project.tags}
                            onClick={() => console.log(`Projet ${project.title} cliqué`)}
                        />
                    ))}
            </section>
        </>
    );
}