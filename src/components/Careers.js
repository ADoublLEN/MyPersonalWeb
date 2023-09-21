import CareersData from "./CareersData";
import "./CareersStyles.css";

const Careers = () => {
  return (
    <div className="Careers">
      <h1> Popular Careers</h1>
      <p>Contact us for the newest information</p>
      <CareersData
        className="first-career"
        heading="Cook"
        text="A Cook is a restaurant worker who is responsible for preparing food items and menu items in accordance with company standards and guidelines. They are responsible for the preparation of food for restaurant customers."
        img1="https://images.unsplash.com/photo-1625631980683-825234bfb7d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80"
        img2="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2130&q=80"
      />
      <CareersData
        className="first-career-reverse"
        heading="Astronaut"
        text="An astronaut is a person trained, equipped, and deployed by a human spaceflight program to serve as a commander or crew member aboard a spacecraft."
        img1="https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80"
        img2="https://images.unsplash.com/photo-1536697246787-1f7ae568d89a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2187&q=80"
      />
    </div>
  );
};

export default Careers;
