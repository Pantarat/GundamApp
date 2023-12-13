import { useState } from 'react';
import NavBar from './elements/NavBar.jsx';
import Home from './pages/Home.jsx';
import Display from './pages/Display.jsx';
import Map from './pages/Map.jsx';
import Results from './pages/Results.jsx';
import Go from './pages/Go.jsx';
import Prototype from './pages/Prototype.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  const [gardens, setGardens] = useState([])
  const [crop, setCrop] = useState('Thai Jasmine Rice')

  return (
    <>
      <div className="m-5">
        <Router>
          <Routes>
            <Route path="/" element={<Go setCrop={setCrop} />} />
            <Route path="/prototype" element={<Prototype crop={crop}/>} />
            {/* <Route path="/" element={<Home setGardens={setGardens} gardens={gardens} />} /> */}
            <Route path="/display" element={<Display />} />
            <Route path="/map" element={<Map setGardens={setGardens} gardens={gardens} />} />
            <Route path="/results" element={<Results />} />
          </Routes>
          {/* <NavBar /> */}
        </Router>
      </div>
    </>
  )
}

export default App
