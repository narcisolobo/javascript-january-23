import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";

function EditAlbum() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { flag, setFlag } = useOutletContext();
  const [formAlbum, setFormAlbum] = useState(null);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`http://localhost:5001/api/albums/${id}`, { signal: controller.signal })
      .then(res => setFormAlbum(res.data))
      .catch(err => console.log(err));
    return () => controller.abort();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5001/api/albums/${id}`, formAlbum)
      .then((res) => {
        console.log(res.data);
        setFlag(!flag);
        setErrors(null);
        navigate(`/albums/${id}`);
      })
      .catch((err) => {
        console.log(err);
        setErrors(err?.response?.data?.errors);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "isOwned") {
      setFormAlbum({
        ...formAlbum,
        isOwned: e.target.checked,
      });
    } else {
      setFormAlbum({
        ...formAlbum,
        [name]: value,
      });
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h1>Edit Album</h1>
        {formAlbum &&
          <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="form-control form-control"
              value={formAlbum.title}
              onChange={handleChange}
            />
            {errors?.title && (
              <span className="form-text text-danger">
                {errors.title.message}
              </span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="artist" className="form-label">
              Artist:
            </label>
            <input
              type="text"
              name="artist"
              id="artist"
              className="form-control form-control"
              value={formAlbum.artist}
              onChange={handleChange}
            />
            {errors?.artist && (
              <span className="form-text text-danger">
                {errors.artist.message}
              </span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              value={formAlbum.description}
              onChange={handleChange}
            ></textarea>
            {errors?.description && (
              <span className="form-text text-danger">
                {errors.description.message}
              </span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="cover" className="form-label">
              Cover Image (URL):
            </label>
            <input
              type="text"
              name="cover"
              id="cover"
              className="form-control form-control"
              value={formAlbum.cover}
              onChange={handleChange}
            />
            {errors?.cover && (
              <span className="form-text text-danger">
                {errors.cover.message}
              </span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="type" className="form-label">
              Album Type:
            </label>
            <select
              name="type"
              id="type"
              className="form-select"
              value={formAlbum.type}
              onChange={handleChange}
            >
              <option value="none">Select Type:</option>
              <option value="Studio Album">Studio Album</option>
              <option value="Live Album">Live Album</option>
              <option value="Compilation">Compilation</option>
            </select>
          </div>
          <div className="mb-3">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title">Genres (Optional):</h6>
                <div className="mb-3">
                  <label htmlFor="genre1" className="form-label">
                    Genre 1:
                  </label>
                  <input
                    type="text"
                    name="genre1"
                    id="genre1"
                    className="form-control form-control"
                    value={formAlbum.genre1}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="genre2" className="form-label">
                    Genre 2:
                  </label>
                  <input
                    type="text"
                    name="genre2"
                    id="genre2"
                    className="form-control form-control"
                    value={formAlbum.genre2}
                    onChange={handleChange}
                  />
                </div>
                <label htmlFor="genre3" className="form-label">
                  Genre 3:
                </label>
                <input
                  type="text"
                  name="genre3"
                  id="genre3"
                  className="form-control form-control"
                  value={formAlbum.genre3}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              name="isOwned"
              id="isOwned"
              className="form-check-input"
              checked={formAlbum.isOwned}
              onChange={handleChange}
            />
            <label htmlFor="isOwned" className="form-check-label">
              Owned?
            </label>
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Edit Album
            </button>
          </div>
        </form>}
      </div>
    </div>
  );
}
export default EditAlbum;
