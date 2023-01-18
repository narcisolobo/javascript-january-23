import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function OneLocation() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${id}`)
      .then((res) => {
        console.log(res.data);
        setLocation(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="card">
      {location && (
        <div className="card-body">
          <h1>{location.name}</h1>
          <h2>Type: {location.type}</h2>
          <h2>Dimension: {location.dimension}</h2>
        </div>
      )}
    </div>
  );
}
export default OneLocation;
