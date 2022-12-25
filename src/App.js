import React, { useState } from 'react';

import Navbar from './components/Navbar';
import TextBox from './components/TextBox';

function App() {
  const [mode, setmode] = useState('light')

  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#3e3b3b';
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container">
    <TextBox mode={mode}/>
    </div>
    </>
  );
}

export default App;
