import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function OneEpisode() {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/${id}`)
      .then((res) => {
        console.log(res.data);
        setEpisode(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="card">
      {episode && (
        <div className="card-body">
          <h1>{episode.name}</h1>
          <h2>Episode {episode.episode}</h2>
          <h2>Air Date: {episode.air_date}</h2>
        </div>
      )}
    </div>
  );
}
export default OneEpisode;
