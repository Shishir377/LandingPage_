import './index.css';
import Layout from './Components/Layout/layout';
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<Layout />} />
      </Routes>

    </div>
  );
}

export default App;
