import './App.css';
import Login from './pages/login';
import Home from './pages/Home/home';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/login" element={<Login />}></Route>          
       </Routes>
    </BrowserRouter>
  );
}

export default App;
