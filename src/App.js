import { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const setAlertMessage = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
  }
  const toggleMode = (cls) => {
    console.log(cls)
    removeBodyClasses();
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setAlertMessage("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      
      // The below code is used to change the title of the document at intervals
      // like a blinking effect to grab user attention
      // Logically not a good practice to use it frequently
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode";
      // }, 2000);
      // setInterval(() => {
        //   document.title = "Install TextUtils Now";
        // }, 1500);  
    }
    else if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setAlertMessage("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
    else {
      document.body.classList.add('bg-' + cls);
      setMode(cls);
      setAlertMessage(`${cls.charAt(0).toUpperCase() + cls.slice(1)} mode has been enabled`, "success");
    }
  } 
  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container" my-3>
          <TextForm setAlertMessage={setAlertMessage} heading="Enter the text to analyze" mode={mode}/>
          {/* <Routes> */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/" element={<TextForm setAlertMessage={setAlertMessage} heading="Enter the text to analyze" mode={mode}/>} /> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
