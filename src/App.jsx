import React from 'react'
import './App.css'
import MyNavbar from './components/Navbar'
import Editor from './components/Editor'
import Previewer from './components/Previewer'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
        <MyNavbar />
        <h1>Markdown Previewer</h1>
        <Editor />
        <Previewer />
        <Footer />
    </div>
  )
}

export default App
