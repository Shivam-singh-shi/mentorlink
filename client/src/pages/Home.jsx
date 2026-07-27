import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Journey from "../components/home/Journey";
import WhyChoose from "../components/home/WhyChoose";
import Programs from "../components/home/Programs";
import Testimonials from "../components/home/Testimonials";
import Pricing from "../components/home/Pricing";
import FAQ from "../components/home/FAQ";
import CTA from "../components/home/CTA";
import AboutMentor from "../components/home/AboutMentor";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <AboutMentor />
      <Journey />
      <WhyChoose />
      <Programs />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
};

export default Home;
