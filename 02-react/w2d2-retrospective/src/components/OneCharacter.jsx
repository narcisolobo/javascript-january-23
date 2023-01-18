import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function OneCharacter() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => {
        console.log(res.data);
        setCharacter(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="card">
      {character && (
        <>
          <img
            src={character.image}
            alt={character.name}
            className="card-img-top"
          />
          <div className="card-body">
            <h1>{character.name}</h1>
          </div>
        </>
      )}
    </div>
  );
}
export default OneCharacter;
