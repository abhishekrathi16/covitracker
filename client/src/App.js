import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Realtime from './components/Realtime'
import Status from './components/Status';
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Realtime/>
      <Status/>
      <Footer/>
    </div>
  );
}

export default App;
