import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Routes, Route } from 'react-router-dom';

import Main from "./pages/Main";
import TodoDetail from './pages/TodoDetail';

function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Navigate to='/todos' />} />
        <Route path='/todos' element={<Main />} />
        <Route path='/todos/:id' element={<TodoDetail />} />
      </Routes>
    </div>
  )
}
export default App;
