import logoCargado from "./logo.png";
import "./css/styles.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";
import Footer from "./components/footer/footer";
import Login from "./pages/login";
import Register from "./pages/register";
import GestionarDeuda from "./pages/gestionarDeudas";
import GestionarClientes from "./pages/gestionarClientes";
import GestionarProductos from "./pages/gestionarProductos";
import EditarDeuda from "./pages/editarDeudas";
import EditarCliente from "./pages/editarClientes";
import EditarProducto from "./pages/editarProductos";
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
                <Route path="/gestionardeudas/editardeuda" element={<EditarDeuda />} />
                <Route path="/gestionarclientes/editarcliente" element={<EditarCliente />} />
                <Route path="/gestionarproductos/editarproducto" element={<EditarProducto />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;