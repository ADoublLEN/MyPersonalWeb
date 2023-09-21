import React from "react";
import "./IntroductionComponent.css";

const IntroductionComponent = () => {
  return (
    <div className="introduction-container">
      <h2>Self-Introduction</h2>
      <p>
        Hi! My name is Jiaming Wang 王家铭. I'm a graduate student specializing
        in Electrical and Computer Engineering at Purdue University. My
        expertise lies in advanced software development and machine learning
        techniques.
      </p>
      <div className="contact-info">
        <p>
          School Email:
          <a href="mailto:wang4146@purdue.edu"> wang4146@purdue.edu</a>
        </p>
        <p>
          Personal Email:
          <a href="mailto:jiamingwang0408@gmail.com">
            {" "}
            jiamingwang0408@gmail.com
          </a>
        </p>
        <p>Tele: (765) 409-6403</p>
        <p>
          Github:
          <a
            href="https://github.com/ADoublLEN"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            ADoublLEN
          </a>
        </p>
        <p>
          Linkedin:
          <a
            href="https://www.linkedin.com/in/jiaming-wang-920b7b24b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Jiaming Wang
          </a>
        </p>
      </div>
    </div>
  );
};

export default IntroductionComponent;
