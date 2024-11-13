import portrait from '../assets/portrait.jpg'
import booki from '../assets/booki.jpg'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";

export const projectsList = [
    {
        id: "1",
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
        id: "2",
        title: "Autre Projet",
        description: "Description de mon autre projet tout aussi intéressant.",
        imageUrl: portrait,
        tags: [
            { 
                label: "JavaScript", 
                icon: <IoLogoJavascript />,
                color: "#F7DF1E"
            }
        ]
    }
];