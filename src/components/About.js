import React from 'react'

function About(props) {
  return (
    <div className='container' style={{
      color: props.mode === "dark" ? "white" : "#3e3b3b",
      background: props.mode === "dark" ? "#3e3b3b" : "white",
    }}>
      <h1>About TextUtils</h1> 
      <p>TextUtils was built using <code>ReactJS</code>. It performs some basic operations of text using <code>JavaScript</code>, shows alerts about operations performed and also contains the feature of Dark Mode.</p>
    </div>
  )
}

export default About 