import { useState } from "react";

const MuppetForm = () => {
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [age, setAge] = useState(0);
  const [image, setImage] = useState("");
  const [muppets, setMuppets] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const muppet = {
      name,
      occupation,
      age,
      image,
    };
    setMuppets([...muppets, muppet]);
    setName("");
    setOccupation("");
    setAge(0);
    setImage("");
  };

  return (
    <div className="card">
      <h5 className="card-header">CREATE MUPPET</h5>
      <div className="card-body">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="occupation" className="form-label">
              Occupation
            </label>
            <input
              type="text"
              name="occupation"
              id="occupation"
              className="form-control"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age" className="form-label">
              Age:
            </label>
            <input
              type="number"
              name="age"
              id="age"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image URL:
            </label>
            <input
              type="text"
              name="image"
              id="image"
              className="form-control"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              CREATE MUPPET
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default MuppetForm;
