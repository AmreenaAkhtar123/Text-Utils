import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import About from './components/About';
import { Alert } from './components/Alert.js';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);

  }
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.style.backgroundColor = darkMode ? '#F2F2F2' : '#121212';
    showAlert("Light mode has been enabled", "Success");
    document.body.style.color = darkMode ? '#000000' : '#ffffff';
    showAlert("Dark mode has been enabled", "Success");
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Alert  alert = {alert}/>
      <div className={`container my-3 ${darkMode ? 'dark-mode' : ''}`}>
        <TextForm heading="Enter your text to analyze" darkMode={darkMode} />

        <About darkMode={darkMode}/>
      </div>

    </>
  );
}

export default App;
