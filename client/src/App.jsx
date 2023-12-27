
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './layout/navbar';
import Home from './page/home';
import Login from './page/login';
import Register from './page/register';
import User from './page/user';
import Admin from './page/admin';

function App() {
  return (
    <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/user" element={<User />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
    </>
  )
}

export default App
