import React from 'react'
import './App.css'
import store from './store/reducers'
import { Provider } from 'react-redux'
import MyNavbar from './components/Navbar'
import Editor from './components/Editor'
import Previewer from './components/Previewer'
import Footer from './components/Footer'

// const initialState = {
//   text: ''
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'UPDATE_TEXT':
//       return {
//         ...state,
//         text: action.text
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer, initialState);
const App = () => {
  return (
    <Provider store={store}>
    <div className="App">
        <MyNavbar />
        <h1>Markdown Previewer</h1>
        <Editor />
        <Previewer />
        <Footer />
    </div>
    </Provider>
  )
}

export default App
