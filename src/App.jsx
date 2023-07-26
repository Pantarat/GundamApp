import { useState } from 'react';
import NavBar from './elements/NavBar.jsx';
import Home from './pages/Home.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Home />
        <NavBar />
      </div>
    </>
  )
}

export default App
