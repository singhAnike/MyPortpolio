
import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/about' element ={<h3>My name is aniket singh and now i am intern in appsdeployer.</h3>}/>
        <Route path='/project' element ={<p>I have done various project using various technology.</p>}/>
        <Route path='/achivement' element ={<p>i have achived different badges from diffrent coding platform like Codechef ,hakerrank,leetcode</p>}/>
        <Route path='/contact' element ={<p>Contact No-: <a href='tel:+917509811123'>+917509811123</a>
          Email me-: <a href='mailto:singh7509811123@gmail.com'>singh7509811123@gmail</a></p>}/> 
        

      </Routes>
      </BrowserRouter>
      <Footer/>
            </div>
  );
}

export default App;
