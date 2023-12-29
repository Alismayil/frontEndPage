
import './App.css'
import { Route, Routes } from "react-router-dom";
import Navbar from './layout/navbar';
import Home from './page/home';
import Login from './page/login';
import Register from './page/register';
import User from './page/user';
import Admin from './page/admin';
import PrivateRoute from './routes/privateRoute';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute roles={["user", "admin"]} />} >
          <Route path="/user" element={<User />} />
        </Route>
        <Route element={<PrivateRoute roles={["admin"]} />} >
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
