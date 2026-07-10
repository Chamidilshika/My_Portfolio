import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import FeaturedProjects from "../sections/FeaturedProjects";
import Footer from "../components/Footer";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Certifications from "../sections/Certifications";
import Achievements from "../sections/Achievements";

const Home = () => {
  return (
    <>
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <FeaturedProjects />
      </section>

      <section id="certifications">
        <Certifications />
      </section>

      <section id="achievemnets">
        <Achievements />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
};

export default Home;  