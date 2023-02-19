import { useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import Previewer from './components/Previewer'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <h1></h1>
      <p className="read-the-docs">  
        Click on the Vite and React logos to learn more
      </p>
        <Editor />
        <Previewer />
        <Footer />
  
    </div>
  )
}

export default App
