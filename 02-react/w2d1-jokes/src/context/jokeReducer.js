import { v4 as uuidv4 } from 'uuid';

export const types = {
  ADD_JOKE: 'ADD_JOKE',
  DELETE_JOKE: 'DELETE_JOKE',
  TOGGLE_LIKE: 'TOGGLE_LIKE',
};

function jokesReducer(jokes, action) {
  const { ADD_JOKE, DELETE_JOKE, TOGGLE_LIKE } = types;

  switch (action.type) {
    case ADD_JOKE:
      return [
        ...jokes,
        {
          id: uuidv4(),
          isLiked: false,
          setup: action.setup,
          punchline: action.punchline,
        },
      ];
    case DELETE_JOKE:
      const filteredJokes = jokes.filter((joke) => joke.id !== action.id);
      return filteredJokes;
    case TOGGLE_LIKE:
      const updatedJokes = jokes.map(joke => {
        if (joke.id === action.id) {
          joke = {
            ...joke,
            isLiked: !joke.isLiked,
          }
        }
        return joke;
      })
      return updatedJokes;
    default:
      throw Error('Unexpected action type.');
  }
}

export default jokesReducer;
