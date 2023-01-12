import { useState } from "react";

const MuppetCard = (props) => {
  const [age, setAge] = useState(props.age);
  const { image, name, occupation, location } = props;

  return (
    <div className="card mt-3">
      <img src={image} alt={name} className="card-img-top" />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text mb-1">Occupation: {occupation}</p>
        <p className="card-text mb-1">Age: {age}</p>
        <p className="card-text mb-1">Location: {location}</p>
        <button
          onClick={() => setAge(age + 1)}
          className="btn btn-primary w-100"
        >
          BIRTHDAY
        </button>
      </div>
    </div>
  )
}
export default MuppetCard;
