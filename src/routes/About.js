import Navbar from "../components/Navbar";
import MED from "../assets/MED.gif";
import nlp from "../assets/NLPlab.webp";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import ContentCard from "../components/ContentCard";

function About() {
  return (
    <>
      <Navbar />
      <h1 className="ml-projects-title">Machine Learning Projects</h1>
      <ContentCard
        title="Reinforcement Learning Based Efficient MED Deployment in Highway Environments"
        content="This research focuses on optimally deploying MED (Mobile Energy Disseminators) using reinforcement learning to maintain electric vehicle battery health, minimize congestion, and maximize the range of the EVs (electrical vehicles)."
        imageUrl={MED}
        linkTo="/MEDintro"
      />
      <ContentCard
        title="A GPT Messenging Like Me"
        content="An AI Model talks like me, based on a fine-tuning GPT. A Bert Reward model refines the GPT based on RLHF."
        imageUrl={MED}
        // linkTo="/MEDintro"
      />

      <ContentCard
        title="Deep Learning x NLP LAB"
        content={
          <>
            A mini-lab contains implementations of some fundamental NLP
            frameworks:
            <br />
            <br />
            1. A handwritten transformer with detailed comments for generation
            tasks.
            <br />
            <br />
            2. A CNN + LSTM framework aimed at classification tasks.
            <br />
            <br />
            3. A BERT framework for classification tasks.
            <br />
            <br />
            4. A BERT + Bi-LSTM framework targeting classification tasks.
          </>
        }
        imageUrl={nlp}
        linkTo="/NLPlabintro"
        imageWidth="40%"
      />

      <Footer />
    </>
  );
}

export default About;
