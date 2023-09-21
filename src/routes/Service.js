import Navbar from "../components/Navbar";
import MED from "../assets/MED.gif";
import nlp from "../assets/NLPlab.webp";
import cutmyhand from "../assets/cutmyhand.jpg";
import karare from "../assets/karare.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import ContentCard from "../components/ContentCard";

function About() {
  return (
    <>
      <Navbar />
      <h1 className="ml-projects-title">
        Software Development Engineering Projects
      </h1>
      <ContentCard
        title="CutMyHand Online Shopping Platform"
        content="A full-stack online shopping platform built using the MERN (MongoDB, Express, React, Node.js) stack."
        imageUrl={cutmyhand}
        linkTo="https://cutmyhand-jiaming-93ac34da2943.herokuapp.com/"
        imageWidth="85%"
      />
      <ContentCard
        title="Build Your Dream BYD Online Career Exploration Platform, a Front-End Frame"
        content="A Job Hunting Website front frame using React"
        imageUrl={karare}
        imageWidth="85%"
        linkTo="https://f7nhdx.csb.app/"
      />

      <Footer />
    </>
  );
}

export default About;
