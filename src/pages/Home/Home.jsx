import Hero from "../../components/sections/Hero/Hero";
import About from "../../components/sections/About/About";
import Skill from "../../components/sections/Skill/Skill";
import Projects from "../../components/sections/Projects/Projects";
import Contact from "../../components/sections/Contact/Contact";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";

export default function Home() {
    return(
        <>
            <Header />
            <Hero />
            <About />
            <Skill />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}