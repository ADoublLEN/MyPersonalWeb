import "./Urgent.css";

function UrgentData(props) {
  return (
    <div className="t-card">
      <div className="t-image" id={props.id}>
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p className="period-text">{props.period}</p>
      <p>{props.text}</p>
    </div>
  );
}

export default UrgentData;
