import axios from 'axios';
import { useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";

function Albums() {
  const [albums, setAlbums] = useState([]);
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get('http://localhost:5001/api/albums', { signal: controller.signal })
      .then(res => {
        setAlbums(res.data);
        setFlag(!flag)
      })
      .catch(err => console.log(err))
    return () => controller.abort();
  }, [flag]);

  return (
    <div>
      <Outlet context={{ albums, flag, setFlag }} />
    </div>
  )
}
export default Albums;