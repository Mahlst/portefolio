import './Contact.scss'
import SocialButton from "../../ui/Button/SocialButton"
import { FaLinkedin } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Contact() {
    return(
        <>
            <section id="contact" className='section__contact'>
                <h2 className='section__contact__title'>Restons en contact</h2>
                <div>
                    <p className='section__contact__text'>
                        Je suis actuellement en formation de Développeur Web.
                    </p>
                    <p className='section__contact__text'>
                        N'hésitez pas à me contacter pour discuter plus en détail de vos projets.
                    </p>
                </div>
                <div className='section__contact__button'>
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
                    <SocialButton 
                        href="mailto:votre.email@example.com"
                        icon={FaFileDownload}
                        label="CV"
                        variant="default"
                    />
                </div>
            </section>
        </>
    )
}