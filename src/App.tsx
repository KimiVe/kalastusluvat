import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import TopBar from './components/topbar/TopBar'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import Searchpage from './components/Searchpage'
import Questionspage from './components/Questionspage'
import Aboutuspage from './components/Aboutuspage'
import Links from './components/Links'
import Profile from './components/Profile'
import ShoppingCart from './components/ShoppingCart'
import MyLicences from './components/MyLicences'
import LicencePage from './components/LicencePage'
import { initializeLicences } from './reducers/licenceReducer'
import { AppDispatch } from './store'

const App = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(initializeLicences())
  }, [dispatch])

  return (
    <div>
      <TopBar />
      <Links />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/search' element={<Searchpage />} />
        <Route path='/questions' element={<Questionspage />} />
        <Route path='/aboutus' element={<Aboutuspage />} />
        <Route path='/myinformation' element={<Profile />} />
        <Route path='/shoppingcart' element={<ShoppingCart />} />
        <Route path='/licences' element={<MyLicences />} />
        <Route path='/licence:id' element={<LicencePage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
