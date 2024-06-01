import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Header from './pages/Header';
import Services from './pages/Services';
import Career from './pages/Career';
import Contact from './pages/Contact';
import About from './pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='/about' element = {<AboutPage/>}/>
        <Route path='/services' element = {<Services/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/career' element = {<Career/>}/>

      </Routes>
      </BrowserRouter>

      {/* <Header/>
      <Home/>
      <About/>
      <Services/>
      <Contact/>
      <Career/> */}
    

     
    </div>
  );
}

export default App;
