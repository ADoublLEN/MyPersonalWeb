import React, { useState } from "react";
import "./ExpandableComponent.css";
import { useSpring, animated } from "react-spring";

const ExpandableComponent = () => {
  const skills = {
    "Programming Languages": [
      "C/C++",
      "Python",
      "Java",
      "MatLab",
      "MySQL",
      "JavaScript",
      "css"
    ],
    "Tools and Frameworks": [
      "Pandas",
      "NumPy",
      "Artificial Intelligence/AI",
      "Computer Vision",
      "Deep Learning",
      "Reinforcement Learning",
      "Numpy",
      "CUDA",
      "PyTorch",
      "SciPy",
      "Tensorflow",
      "OpenCV",
      "Flask"
    ],
    DevOps: ["Linux", "Git", "Docker", "AWS"]
  };

  const [expandedSkill, setExpandedSkill] = useState("");

  const handleExpand = (skill) => {
    if (expandedSkill === skill) {
      setExpandedSkill("");
    } else {
      setExpandedSkill(skill);
    }
  };

  const animation = useSpring({
    height: expandedSkill ? "70px" : "0px", // 这里的100px是一个示例值，根据实际需求进行调整
    opacity: expandedSkill ? 1 : 0,
    from: { height: "0px", opacity: 0 },
    config: { tension: 220, friction: 20 } // 这些值可以调整以获得您想要的"弹簧"效果
  });

  return (
    <div className="skills-container">
      <h2>MySkills:</h2>
      {Object.entries(skills).map(([skill, subSkills]) => (
        <div key={skill} className="skill-box">
          <h3 onClick={() => handleExpand(skill)}>
            <span className="toggle-icon">
              {expandedSkill === skill ? "-" : "+"}
            </span>
            {skill}
          </h3>
          {expandedSkill === skill && (
            <animated.div style={animation} className="sub-skills">
              {subSkills.join(", ")}
            </animated.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExpandableComponent;
