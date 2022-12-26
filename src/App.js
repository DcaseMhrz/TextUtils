import React, { useState } from 'react';
import Alert from './components/Alert';

import Navbar from './components/Navbar';
import TextBox from './components/TextBox';

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null)
  
  const showAlert=(type,msg)=>{
    setAlert({type: type, message:msg})
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#3e3b3b';
      showAlert("success", "Dark Mode Enabled");

    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
      showAlert("success", "Dark Mode Disabled");
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   
    <Alert alert={alert}/>
      <div className="container">
    <TextBox showAlert={showAlert} mode={mode}/>
      </div>
    </>
  );
}

export default App;
