import logoCargado from "./logo.png";
import "./css/styles.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home";
import Footer from "./components/footer/footer";
import Login from "./pages/login";
import Register from "./pages/register";
import GestionarDeuda from "./components/deudas/gestionarDeudas";
import GestionarClientes from "./components/clientes/gestionarClientes";
import GestionarProductos from "./components/productos/gestionarProductos";
import EditarDeuda from "./components/deudas/editarDeudas";
import EditarCliente from "./components/clientes/editarClientes";
import EditarProducto from "./components/productos/editarProductos";
import EliminarDeuda from "./components/deudas/eliminarDeuda";
import EliminarCliente from "./components/clientes/eliminarCliente";
import EliminarProducto from "./components/productos/eliminarProducto";
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
                <Route path="/gestionardeudas/update/:idDeuda" element={<EditarDeuda />} />
                <Route path="/gestionarclientes/update/:idCliente" element={<EditarCliente />} />
                <Route path="/gestionarproductos/update/:idProducto" element={<EditarProducto />} />
                <Route path="/gestionardeudas/delete/:idDeuda" element={<EliminarDeuda />} />
                <Route path="/gestionarclientes/delete/:idCliente" element={<EliminarCliente />} />
                <Route path="/gestionarproductos/delete/:idProducto" element={<EliminarProducto />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;