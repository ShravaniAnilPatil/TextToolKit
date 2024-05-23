import logo from './logo.svg';
import './App.css'; // Here, a CSS file is imported for the JSX file
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#8db1eb';
      document.body.style.color = '#c3cfe3';
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      setInterval(() => {
        document.title = "TextUtils is Amazing";
      }, 2000);

      setInterval(() => {
        document.title = "Update TextUtils";
      }, 1500);

    } else {
      setMode('light');
      document.body.style.backgroundColor = '#c3cfe3';
      document.body.style.color = '#1d2a40';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" AboutText="About us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route  exact path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
