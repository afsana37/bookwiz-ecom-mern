import React from 'react'
import Announcement from './components/Announcement';
import Navbar from './components/Navbar';
import Slider from './components/Slider'
import Footer from './components/Footer';
import './App.css';

// function App() {
const App = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Footer />
    </div>
  )
}

export default App;
