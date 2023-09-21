import "./HeroStyles.css";
function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <video autoPlay loop muted className="hero-video">
          <source src={props.heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
