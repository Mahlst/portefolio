import Header from "../../components/layout/Header/Header";
import About from "../../components/sections/About/About";
import Hero from "../../components/sections/Hero/Hero";
import Skill from "../../components/sections/Skill/Skill";

export default function Home() {
    return(
        <>
            <Header />
            <Hero />
            <About />
            <Skill />
        </>
    )
}