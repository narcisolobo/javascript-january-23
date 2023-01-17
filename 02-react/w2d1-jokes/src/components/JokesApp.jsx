import { JokesProvider } from "../context/JokesContext";
import JokeForm from "./JokeForm";
import JokeList from "./JokeList";

function JokesApp() {
  return (
    <JokesProvider>
      <h1>Jokes App</h1>
      <JokeForm />
      <JokeList />
    </JokesProvider>
  )
}
export default JokesApp;
