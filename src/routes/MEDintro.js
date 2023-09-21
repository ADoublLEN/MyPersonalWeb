import Hero from "../components/hero";
import Navbar from "../components/Navbar";
import ProjDetail from "../components/ProjDetail";
import med1 from "../assets/med_detail1.webp";
import med2 from "../assets/med_detail2.webp";
import med3 from "../assets/med_detail3.mp4";
import med4 from "../assets/med_detail4.webp";
import med5 from "../assets/med_detail5.webp";
import Footer from "../components/Footer";
function Service() {
  return (
    <>
      <Navbar />
      <ProjDetail
        title="What is MED?"
        content="Mobile Energy Disseminators (MEDs), use electric plug in connection or IPT in order to refill starving EVs. Buses can play the role of MEDs since they follow predefined scheduled routes and their paths cover a major part of a city, while trucks could have the role of energy chargers mainly on highways."
        imageUrl={med1}
        marginTop="180px" // 你可以根据需要更改这个值
        imageStyle={{ width: "50%", height: "auto" }}
      />
      <ProjDetail
        title="What are we developing?"
        content="Based on Highway Env, we develop AwesomeChargingEnv to simulate the interaction between MED and Electrical Vehicles on a Highway Environment. With its robust and adaptable structure, AwesomeChargingEnv provides a versatile research platform, encouraging innovative explorations in the MED domain."
        imageUrl={med2}
        marginTop="80px" // 你可以根据需要更改这个值
        imageStyle={{ width: "50%", height: "auto" }}
      />
      <video className="video-container" width="60%" controls>
        <source src={med3} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <ProjDetail
        title="A Reinforcement learning Based MED Deployment Policy"
        content={
          <>
            Based on AwesomeChargingEnv, we develop a reinforcement learning
            algorithm control of each high way entrance, which is controlling
            the release of the MED.
            <br />
            <br />
            We want the agent to
            <br />
            <br />
            • Maximize the total mileage
            <br />
            • Minimize the total MED deployment
            <br />
            • Lower traffic congestion caused by MED
            <br />• Maintain the optimal State of Charge (SoC)
          </>
        }
        imageUrl={med4}
        marginTop="80px"
        imageStyle={{ width: "100%", height: "auto" }}
      />
      <ProjDetail
        title="One More Thing…"
        content={
          <>
            We have successfully developed two physical simulation models to
            make the experiment more realistic!
            <br />
            <br />
            The first is an energy consumption model built upon real-world data
            from the BYD K7 bus & Nissan Leaf, offering a realistic simulation
            of power use dynamics.c
            <br />
            <br />
            The second simulation model operates at a more granular level, based
            on the coil parameters in wireless charging. This model takes into
            account misalignment between coils due to speed and angle
            differences, leading to decreased charging efficiency.
          </>
        }
        imageUrl={med5}
        marginTop="80px"
        imageStyle={{ width: "50%", height: "auto" }}
      />
      <Footer />
    </>
  );
}

export default Service;
