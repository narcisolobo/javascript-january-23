import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './components/Display';
import Form from './components/Form';
import { useState } from 'react';

const App = () => {
  const [boxes, setBoxes] = useState([]);

  return (
    <div className="container mt-3">
      <div className="card shadow">
        <h5 className='card-header'>APP</h5>
        <div className="card-body">
          <Form boxes={boxes} setBoxes={setBoxes} />
          <Display boxes={boxes} />
        </div>
      </div>
    </div>
  )
}
export default App;
