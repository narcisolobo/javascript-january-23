import { types } from '../context/jokeReducer';
import { useJokesDispatch } from '../context/JokesContext';
const { DELETE_JOKE, TOGGLE_LIKE } = types;

function Joke({ joke }) {
  const dispatch = useJokesDispatch();

  function handleDelete(id) {
    dispatch({
      type: DELETE_JOKE,
      id: id,
    });
  }

  function toggleLike(id) {
    dispatch({
      type: TOGGLE_LIKE,
      id: id,
    });
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
        <p>
          <strong>Setup: </strong>
          {joke.setup}
        </p>
        <hr />
        <p className="mb-0">
          <strong>Punchline: </strong>
          {joke.punchline}
        </p>
      </div>
      <div className="card-footer d-flex justify-content-end gap-3">
        <button
          className={`btn btn-sm ${
            joke.isLiked ? 'btn-danger' : 'btn-success'
          }`}
          onClick={() => toggleLike(joke.id)}>
          {joke.isLiked ? 'Unlike' : 'Like'}
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => handleDelete(joke.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default Joke;
