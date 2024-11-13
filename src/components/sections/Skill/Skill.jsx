import React, { useState } from 'react';
import { FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BsFiletypeScss } from "react-icons/bs";
import { SiExpress, SiMongodb } from "react-icons/si";
import './Skill.scss';

export default function Skill() {
    const categories = [
        {
            title: "Frontend",
            icons: [
                {
                    Icon: FaReact,
                    color: '#61DAFB',
                    name: 'React',
                    desc: 'Librairie JavaScript pour construire des interfaces utilisateur'
                },
                {
                    Icon: IoLogoJavascript,
                    color: '#F7DF1E',
                    name: 'JavaScript',
                    desc: 'Language de programmation polyvalent et dynamique'
                },
                {
                    Icon: BsFiletypeScss,
                    color: '#CC6699',
                    name: 'SCSS',
                    desc: 'Préprocesseur CSS avec variables et fonctions avancées'
                }
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