import './About.scss'
import portrait from '../../../assets/portrait.jpg'
import { TbBrandStorytel } from "react-icons/tb";
import { IoGameController } from "react-icons/io5";

export default function About() {
    return (
        <>
            <section className="section__about">
                <div className="section__about__story">
                    <h2 className='section__about__story-title'><TbBrandStorytel className='section__about__story-icon'/> À propos</h2>
                    <p className='section__about__story-text'>
                        <span className='section__about__story-span'>Développeur web</span> en devenir, je cultive une passion pour la création d'expériences numériques épurées et fonctionnelles. 
                        Ma philosophie ? Le <span className='section__about__story-span'>minimalisme</span> - car je crois fermement que la <span className='section__about__story-span'>simplicité</span> est la forme ultime de la sophistication, 
                        tant dans le code que dans le design. En formation, j'explore et maîtrise progressivement <span className='section__about__story-span'>les technologies du web moderne</span>, 
                        avec l'ambition de créer des solutions élégantes qui allient performance et esthétique. Chaque ligne de code est une opportunité d'apprendre et de perfectionner mon art, 
                        toujours guidé par la recherche de l'essentiel.
                    </p>
                    <p className='section__about__story-text'>
                    En dehors du code, vous me trouverez en train de jouer aux jeux vidéo <IoGameController className='section__about__story-text-icon'/> entre amis, 
                    de suivre mes séries préférées sur Netflix, 
                    de vibrer devant la F1, ou si le temps s'y prête, de sortir m'aérer l'esprit !
                    </p>
                </div>

                <img className="section__about__portrait" src={portrait} alt="Portrait" />
            </section>
        </>
    )
}