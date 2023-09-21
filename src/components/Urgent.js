import "./Urgent.css";
import UrgentData from "./UrgentData";
import CCAT from "../assets/CCAT.jpg";
import May from "../assets/May.png";
import Purdue from "../assets/PurdueECE.jpg";
function Urgent() {
  return (
    <div className="urgent">
      <h1>My experience</h1>
      {/* <p>Get Employed Right Now!</p> */}
      <div className="tripcard">
        <UrgentData
          id="ccat"
          image={CCAT}
          heading="Researcher"
          period="Aug 2022 - Present"
          text="Graduate Researcher at Center for Connected and Automated Transportation (CCAT) & Sky-Lab"
        />
        <UrgentData
          image={May}
          heading="Software Development Engineer Internship"
          period="May 2023 - Sept 2023"
          text="Software Development Engineer Internship at MayMobility Inc."
        />
        <UrgentData
          image={Purdue}
          heading="Graduate Student"
          period="Aug 2022 - Present"
          text="Graduate student pursing a Master Degree at Electrical Computer Engineering in Purdue University"
        />
      </div>
    </div>
  );
}

export default Urgent;
