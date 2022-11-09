import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Welcome from './Components/Welcome';
import '../src/App.css'

const App = () => {
  return (
    <div>
      <About />
      <Welcome />
      <Contact />
    </div>
  )
}

export default App