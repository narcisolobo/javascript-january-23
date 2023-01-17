import { useJokesDispatch } from "../context/JokesContext";
import { useState } from "react";
import { types } from "../context/jokeReducer";
const { ADD_JOKE } = types;

function JokeForm() {
  const dispatch = useJokesDispatch();

  const [joke, setJoke] = useState({
    setup: "",
    punchline: "",
  });

  const changeHandler = (e) => {
    setJoke({
      ...joke,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_JOKE,
      setup: joke.setup,
      punchline: joke.punchline,
    })
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="setup" className="form-label">
              Setup:
            </label>
            <input
              type="text"
              name="setup"
              id="setup"
              className="form-control"
              value={joke.setup}
              onChange={changeHandler}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="punchline" className="form-label">
              Punchline:
            </label>
            <input
              type="text"
              name="punchline"
              id="punchline"
              className="form-control"
              value={joke.punchline}
              onChange={changeHandler}
            />
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">Submit Joke</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default JokeForm;
