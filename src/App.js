import React, { useState } from "react";
import Alert from "./components/Alert";

import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, msg) => {
    setAlert({ type: type, message: msg });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#3e3b3b";
      showAlert("success", "Dark Mode Enabled");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Dark Mode Disabled");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          Link={Link}
        />

        <Alert alert={alert} />
        <div className="container">
        
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route
              exact path="/"
              element={
                <TextBox
                  heading="Enter text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
