import logoCargado from "./logo.png";
import "./css/styles.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";
import Footer from "./components/footer/footer";
import Login from "./pages/login";
import Register from "./pages/register";
import GestionarDeuda from "./components/gestionardeudas/gestionarDeudas";
import GestionarClientes from "./components/gestionarClientes/gestionarClientes";
import GestionarProductos from "./components/gestionarProductos/gestionarProductos";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <> 
            <Navbar logo={logoCargado} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login logo={logoCargado} />} />
                <Route path="/register" element={<Register logo={logoCargado} />} />
                <Route path="/gestionardeudas" element={<GestionarDeuda />} />
                <Route path="/gestionarclientes" element={<GestionarClientes />} />
                <Route path="/gestionarproductos" element={<GestionarProductos />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;