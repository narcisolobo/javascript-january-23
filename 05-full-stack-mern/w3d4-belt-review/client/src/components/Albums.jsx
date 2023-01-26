import axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";

function Albums() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const controller = new AbortController;
    axios
      .get('http://localhost:5001/api/albums', { signal: controller.signal })
      .then(res => setAlbums(res.data))
      .catch(err => console.log(err))
    return () => controller.abort();
  }, []);

  return (
    <div>
      <h2>Albums</h2>
      <Outlet context={albums} />
    </div>
  )
}
export default Albums;