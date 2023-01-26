import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Albums from './components/Albums';
import NavBar from './components/NavBar';
import NewAlbum from './components/NewAlbum';
import AllAlbums from './components/AllAlbums';
import OneAlbum from './components/OneAlbum';
import EditAlbum from './components/EditAlbum';

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path='/' element={<Navigate to='/albums' />} />
          <Route path='/albums' element={<Albums />}>
            <Route index element={<AllAlbums />} />
            <Route path='new' element={<NewAlbum />} />
            <Route path=':id' element={<OneAlbum />} />
            <Route path=':id/edit' element={<EditAlbum />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}
export default App;
