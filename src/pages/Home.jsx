import About from "../components/sections/About";
import CTA from "../components/sections/CTA";
import FAQ from "../components/sections/FAQ";
import Hero from "../components/sections/Hero";
import Locations from "../components/sections/Locations";
import Process from "../components/sections/Process";
import Services from "../components/sections/Services";
import WhyChooseUs from "../components/sections/WhyChooseUs";

export default function Home () {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Process />
            <WhyChooseUs />
            <FAQ />
            <Locations />
            <CTA />
        </>
    )
}