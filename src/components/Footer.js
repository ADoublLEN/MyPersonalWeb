import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Hi!</h1>
          <p>You can check the src of this website at my github => </p>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/jiaming-wang-920b7b24b/">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/ADoublLEN">
            <i className="fa-brands fa-github-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
