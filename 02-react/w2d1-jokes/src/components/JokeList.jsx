import { useJokes } from '../context/JokesContext';
import Joke from './Joke';

function JokeList() {
  const jokes = useJokes();
  const jokesReversed = [...jokes].reverse();

  return jokesReversed.map((joke) => <Joke key={joke.id} joke={joke} />);
}
export default JokeList;