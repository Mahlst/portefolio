import Header from "../../components/layout/Header/Header";
import Hero from "../../components/sections/Hero/Hero";
import About from "../../components/sections/About/About";
import Skill from "../../components/sections/Skill/Skill";
import Projects from "../../components/sections/Projects/Projects";

export default function Home() {
    return(
        <>
            <Header />
            <Hero />
            <About />
            <Skill />
            <Projects />
        </>
    )
}