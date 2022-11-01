import logoCargado from "./logo.png";
import "./css/styles.css";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div>
            <Navbar logo ={logoCargado}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login logo={logoCargado} />} />
                <Route path="/register" element={<Register logo={logoCargado} />} />
            </Routes>
            {/* <Footer logo ={logoCargado} /> */}
        </div>
    );
}

export default App;
