import SocialButton from '../../ui/Button/SocialButton';
import './Hero.scss';
import { MdLibraryBooks } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Hero() {
    return (
        <>
            <section className="section__hero">
                <h1 className="section__hero__title">Rothländer <br/>Peter.</h1>
                <div className="section__hero__paragraph">
                    <h2 className="section__hero__text">Développeur Web</h2>
                    <p className="section__hero__status"><MdLibraryBooks className="section__hero__status-icon"/> Actuellement en formation chez 
                        <a className="section__hero__status-link" 
                            href="https://openclassrooms.com/fr/" 
                            target="_blank" 
                            rel="noopener noreferrer"> OpenClassrooms
                        </a>
                    </p>
                </div>
                <div className="section__hero__button-container">
                    <SocialButton 
                        href="https://github.com/Mahlst"
                        icon={FaGithub}
                        label="GitHub"
                        variant="default"
                    />
                    <SocialButton 
                        href="https://www.linkedin.com/in/peter-rothlander/"
                        icon={FaLinkedin}
                        label="LinkedIn"
                        variant="default"
                    />
                    <SocialButton 
                        href="mailto:peter.rothlaender.jr@gmail.com"
                        icon={IoIosMail}
                        label="Email"
                        variant="default"
                    />
                </div>
            </section>
        </>
    )
}