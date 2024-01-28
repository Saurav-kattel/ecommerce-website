import './App.css';
import Home from './Navbar components/Home';
import Navbar from './Navbar components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Types from './Navbar components/Types';
import Bands from './Navbar components/Bands';
import Login from './Navbar components/Login';
import Addtocart from './Navbar components/Addtocart';
import Signup from './Navbar components/Signup';
import Navabarup from './Navbar components/Navabarup';
function App() {
  return (
    <BrowserRouter>
    <div className=''>
    <Navabarup/>
    <Navbar/>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/types' element={<Types/>} />
      <Route exact path='/bands' element={<Bands/>} />
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/addtocart' element={<Addtocart/>}/>
      
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
