import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function OneAlbum() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`http://localhost:5001/api/albums/${id}`, {
        signal: controller.signal,
      })
      .then((res) => setAlbum(res.data))
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [id]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/albums/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate("/albums");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Album Details:</h2>
      <div className="card mb-3">
        {album && (
          <>
            {album.image && (
              <img
                src={album.cover}
                alt={album.title}
                className="card-img-top"
              />
            )}
            <div className="card-body">
              <h2>{album.title}</h2>
              <h3>{album.artist}</h3>
              {album.type && <p>{album.type}</p>}
              <p>{album.description}</p>
              {album.genre1 && (
                <span className="badge text-bg-primary me-2">
                  {album.genre1}
                </span>
              )}
              {album.genre2 && (
                <span className="badge text-bg-primary me-2">
                  {album.genre2}
                </span>
              )}
              {album.genre3 && (
                <span className="badge text-bg-primary">{album.genre3}</span>
              )}
            </div>
          </>
        )}
        <div className="card-footer d-flex justify-content-end">
          <Link
            to={`/albums/${id}/edit`}
            className="btn btn-sm btn-warning me-2"
          >
            Edit
          </Link>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => handleDelete(album._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default OneAlbum;
