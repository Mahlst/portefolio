import React, { useState } from 'react';
import { FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BsFiletypeScss } from "react-icons/bs";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FaBrain } from "react-icons/fa";
import './Skill.scss';

export default function Skill() {
    const categories = [
        {
            title: "Frontend",
            icons: [
                {
                    Icon: FaHtml5,
                    color: '#E34F26',
                    name: 'HTML',
                    desc: 'Langage de balisage pour structurer et présenter le contenu web'
                },
                {
                    Icon: FaCss3Alt,
                    color: '#1572B6',
                    name: 'CSS',
                    desc: 'Langage de style pour mettre en forme et designer les pages web'
                },
                {
                    Icon: IoLogoJavascript,
                    color: '#F7DF1E',
                    name: 'JavaScript',
                    desc: 'Language de programmation polyvalent et dynamique'
                },
                {
                    Icon: TbSeo,
                    color: '#00A550',
                    name: 'SEO',
                    desc: 'Ensemble de techniques pour optimiser la visibilité d\'un site web dans les moteurs de recherche'
                },
                {
                    Icon: FaReact,
                    color: '#61DAFB',
                    name: 'React',
                    desc: 'Librairie JavaScript pour construire des interfaces utilisateur'
                },
                {
                    Icon: BsFiletypeScss,
                    color: '#CC6699',
                    name: 'SCSS',
                    desc: 'Préprocesseur CSS qui ajoute des fonctionnalités avancées au CSS standard'
                },
            ]
        },
        {
            title: "Backend",
            icons: [
                {
                    Icon: FaNodeJs,
                    color: '#68A063',
                    name: 'Node.js',
                    desc: 'Environnement d\'exécution JavaScript côté serveur'
                },
                {
                    Icon: SiExpress,
                    color: '#ffffff',
                    name: 'Express',
                    desc: 'Framework web rapide et minimaliste pour Node.js'
                },
                {
                    Icon: SiMongodb,
                    color: '#4DB33D',
                    name: 'MongoDB',
                    desc: 'Base de données NoSQL orientée document'
                }
            ]
        },
        {
            title: "Autres",
            icons: [
                {
                    Icon: FaGitAlt,
                    color: '#F05032',
                    name: 'Git',
                    desc: 'Système de contrôle de version pour le suivi des modifications du code'
                },
                {
                    Icon: FaGithub,
                    color: '#ffffff',
                    name: 'Github',
                    desc: 'Plateforme collaborative de gestion de code source et de projets'
                },
                {
                    Icon: VscVscode,
                    color: '#007ACC',
                    name: 'VS Code',
                    desc: 'Éditeur de code source puissant et personnalisable'
                },
                {
                    Icon: FaBrain,
                    color: '#9B59B6',
                    name: 'Veille technologique',
                    desc: 'Surveillance active des innovations et tendances dans le développement web'
                }
            ]
        }
    ];

    const [activeTooltip, setActiveTooltip] = useState({ category: null, index: null });

    return (
        <section id="skills" className="section__skills">
            {categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="skill">
                    <span className="skill__title">{category.title}</span>
                    <div className="skill__line">
                        <div className="skill__icons">
                            {category.icons.map(({ Icon, color, name, desc }, iconIndex) => (
                                <div
                                    key={iconIndex}
                                    className="skill__icon"
                                    onMouseEnter={() => setActiveTooltip({ category: categoryIndex, index: iconIndex })}
                                    onMouseLeave={() => setActiveTooltip({ category: null, index: null })}
                                >
                                    <div className="skill__icon-circle">
                                        <Icon size={18} color={color} />
                                    </div>

                                    {activeTooltip.category === categoryIndex &&
                                    activeTooltip.index === iconIndex && (
                                        <div className="skill__tooltip">
                                            <h4
                                                className="skill__tooltip-title"
                                                style={{ color }}
                                            >
                                                {name}
                                            </h4>
                                            <p className="skill__tooltip-desc">
                                                {desc}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}