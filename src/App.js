import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./components/Login.js";
import Register from './components/Register.js';
import Navbar from './components/Navbar.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/navbar' element={<Navbar />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
