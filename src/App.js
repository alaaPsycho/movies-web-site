import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import './App.css';

//pages
import Home from './pages/home';
import About from './pages/about'
import SignUp from './pages/signUp';
//import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Routes>
      <Route exact path={'/'} element={<Home /> } />
      <Route exact path={'/about'} element={<About />} />
      <Route exact path={'/sign-up'} element={<SignUp />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
