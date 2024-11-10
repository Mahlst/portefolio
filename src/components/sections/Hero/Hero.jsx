import SocialButton from '../../ui/Button/SocialButton';
import './Hero.scss';
import { MdLibraryBooks } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Hero() {
    return (
        <>
            <section className="section_hero">
                <h1 className="section_hero__title">Rothländer <br/>Peter.</h1>
                <div className="section_hero__paragraph">
                    <p className="section_hero__text">Développeur Web</p>
                    <p className="section_hero__status"><MdLibraryBooks className="section_hero__status-icon"/> Actuellement en formation chez 
                        <a className="section_hero__status-link" 
                            href="https://openclassrooms.com/fr/" 
                            target="_blank" 
                            rel="noopener noreferrer"> OpenClassrooms
                        </a>
                    </p>
                </div>
                <div className="section_hero__button-container">
                    <SocialButton 
                        href="https://github.com/Mahlst"
                        icon={FaGithub}
                        label="GitHub"
                        variant="default"
                    />
                    <SocialButton 
                        href="https://linkedin.com/in/votre-profil"
                        icon={FaLinkedin}
                        label="LinkedIn"
                        variant="default"
                    />
                    <SocialButton 
                        href="mailto:votre.email@example.com"
                        icon={IoIosMail}
                        label="Email"
                        variant="default"
                    />
                </div>
            </section>
        </>
    )
}