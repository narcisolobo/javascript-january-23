import { useState } from "react";

const Form = () => {
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  const [petName, setPetName] = useState("");
  const [petNameErrors, setPetNameErrors] = useState(null);
  const [age, setAge] = useState(0);
  const [ageErrors, setAgeErrors] = useState(null);
  const [type, setType] = useState("Dog");
  const [isDerpy, setIsDerpy] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    setHasBeenSubmitted(true);
  };

  const petNameHandler = (e) => {
    setPetName(e.target.value);
    if (e.target.value.length < 1) {
      setPetNameErrors("Pet name is required.");
    } else if (e.target.value.length < 2) {
      setPetNameErrors('Pet name must be at least 2 characters.')
    } else {
      setPetNameErrors(null);
    }
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
    if (e.target.value < 1) {
      setAgeErrors("Age must be positive.");
    } else {
      setAgeErrors(null);
    }
  };

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h4 className="card-title">
          {/* TERNARY STATEMENT */}
          {hasBeenSubmitted
            ? "Thank you for submitting the form."
            : "Please enter your pet's information"}
        </h4>
        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label htmlFor="petName" className="form-label">
              Pet Name:
            </label>
            <input
              type="text"
              name="petName"
              id="petName"
              className="form-control"
              value={petName}
              onChange={petNameHandler}
            />
            {petNameErrors && (
              <span className="form-text text-danger">{petNameErrors}</span>
            )}
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
              onChange={ageHandler}
            />
            
            {ageErrors && (
              <span className="form-text text-danger">{ageErrors}</span>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="type">
              Pet Type:
            </label>
            <select
              className="form-select"
              name="type"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Dog">Dog</option>
              <option value="Cat">Cat</option>
            </select>
          </div>
          <div className="mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="derpy"
                checked={isDerpy}
                onChange={(e) => setIsDerpy(e.target.checked)}
              />
              <label class="form-check-label" for="derpy">
                Derpy
              </label>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-success">
              SUBMIT PET
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
