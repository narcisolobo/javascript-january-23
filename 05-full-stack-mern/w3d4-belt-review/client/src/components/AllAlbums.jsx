import { Link, useOutletContext } from "react-router-dom";

function AllAlbums() {
  const { albums } = useOutletContext();

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title:</th>
          <th>Artist:</th>
          <th>Owned?</th>
        </tr>
      </thead>
      <tbody>
        {
          albums && albums.map(album => {
            return (
              <tr key={album._id}>
                <td><Link to={`/albums/${album._id}`}>{album.title}</Link></td>
                <td>{album.artist}</td>
                <td>{album.isOwned ? 'Yes' : 'No' }</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
export default AllAlbums;