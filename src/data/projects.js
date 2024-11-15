import nina from '../assets/nina_carducci.jpg'
import booki from '../assets/booki.jpg'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";

export const projectsList = [
    {
        id: "1",
        title: "Booki",
        description: "Créez la page d'accueil d'une agance de voyage avec HTML & CSS",
        context: "La mission consiste à développer un site de recherche d'hébergements et d'activités touristiques pour la start-up Booki. Le développement se fait en collaboration avec Sarah (CTO) et Loïc (UI Designer). L'objectif est d'intégrer l'interface du site en HTML et CSS selon la maquette Figma fournie, en assurant une compatibilité responsive.",
        realization: "Les ressources en ligne et les cours OpenClassrooms m'ont permis d'acquérir de nombreuses compétences pour réaliser ce projet. J'ai appris à comprendre une maquette Figma, structurer un site en HTML, utiliser Flexbox pour la mise en page CSS (notamment avec Flexbox Froggy), intégrer des media queries pour un design responsive, et versionner mon code avec Git et GitHub.",
        imageUrl: booki,
        github: 'https://github.com/Mahlst/OC_P2',
        demo: 'https://oc-p2-1cco0qsla-mahlsts-projects.vercel.app/',
        tags: [
            { 
                label: "HTML", 
                icon: <FaHtml5 />,
                color: "#e6975f"
            },
            { 
                label: "CSS", 
                icon: <IoLogoCss3 />,
                color: "#00ffff"
            }
        ]
    },
    {
        id: "2",
        title: "Nina Carducci",
        description: "Débuggez et optimisez un site de photographe",
        context: "Le projet consiste à optimiser globalement les performances et le référencement du site, mettre en place le référencement local avec Schema.org, ajouter les balises meta pour les réseaux sociaux, améliorer l'accessibilité et corriger des bugs de navigation dans la modale de la galerie et de sélection des filtres d'images. Le livrable sera un rapport détaillé présentant les actions réalisées, leur impact, les performances et l'accessibilité avant/après optimisation sur la base d'audits Lighthouse et Wave, ainsi que l'ensemble des modifications apportées au site.",
        realization: "Des audits Lighthouse et Wave ont permis d'identifier les points d'amélioration du site. Les optimisations réalisées couvrent l'accessibilité (attributs alt, structuration hn et sémantique, footer, labels, contraste), les performances et le SEO (meta description, minification CSS/JS, optimisation des images, titre, données structurées Schema.org, metatags Open Graph et Twitter Cards). Le code a été débuggé pour la navigation modale et les filtres. De nouveaux audits ont été effectués après optimisation. Le rapport d'intervention détaille les actions et leur impact, incluant les résultats des audits avant/après.",
        imageUrl: nina,
        github: 'https://github.com/Mahlst/OC_P4',
        demo: 'https://oc-p4-1mpznw4xy-mahlsts-projects.vercel.app/',
        tags: [
            { 
                label: "JavaScript", 
                icon: <IoLogoJavascript />,
                color: "#F7DF1E"
            },
            { 
                label: "SEO", 
                color: "#42B983"
            }
        ]
    }
];