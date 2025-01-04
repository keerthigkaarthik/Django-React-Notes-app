import './App.css'  

import Header from './components/Header'
import AllNotes from './pages/AllNotes'
import NewNote from './pages/NewNote'
import SingleNotePage from './pages/SingleNotePage'

import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom"

function App() {

  return (
    <Router>
      <div className='container'>
        <div className='app'>
          <Header />
          <Routes>
            <Route path="/" element={<AllNotes />} />
            <Route path="/notes/:id" element={<SingleNotePage />} />
            <Route path="/newnote" element={<NewNote />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
