import { Routes, Route } from 'react-router-dom'
import './App.css'
import TopBar from './components/topbar/TopBar'
import Links from './components/Links'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import Searchpage from './components/Searchpage'
import Questionspage from './components/Questionspage'
import Aboutuspage from './components/Aboutuspage'


const App = () => {

  return (
    <div>
      <TopBar />
      <Links />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/search' element={<Searchpage />}/>
        <Route path='/questions' element={<Questionspage />} />
        <Route path='/aboutus' element={<Aboutuspage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
