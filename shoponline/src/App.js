import './App.css';
import Home from './Navbar components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Types from './Navbar components/Types';
import Bands from './Navbar components/Bands';
import Login from './Navbar components/Login';
import Addtocart from './Navbar components/Addtocart';
import Signup from './Navbar components/Signup';
import Admin from './admin/Admin';
function App() {
  return (
    <BrowserRouter>
    <div className='bg-slate-100'>
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/types' element={<Types/>} />
      <Route exact path='/brands' element={<Bands/>} />
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/signup' element={<Signup/>}/>
      <Route exact path='/addtocart' element={<Addtocart/>}/>
      <Route  exact path='/admin' element={<Admin/>}/>
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
