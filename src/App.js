
import './App.css';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
// HACER LAS IMPORTACIONES DESPUES DE ESCRIBIR LAS RUTAS
import Header from './components/Layout/Header';
import CreateProduct from './components/CreateProduct';
import Home from './components/Home';
import Products from './components/Products';
import Login from './components/Login';
import Signup from './components/Signup';
import SingleProduct from './components/SingleProduct';
//IMPORTAR ESTADO GLOBAL DE PRODUCTSSTATE
import ProductsState from './context/Products/ProductsState'


function App() {
  return (
    <>
    {/* para darle a toda la app acceso al estado global */}
     <ProductsState> 
     <Router>

      <Header />{/* ESTO ES EL HEADER, SE VA VER ARRIBA SIEMPRE */}

        <Switch>
        {/* RUTAS PRIVADAS */}
        {/* SECCION DE MI PERFIL */}

        {/* RUTAS DE AUTENTICACION */}
        <Route exact path="/iniciar-sesion" component={Login} />
        <Route exact path="/crear-cuenta" component={Signup} />
    
        {/* RUTAS PUBLICAS (CUALQUIERA PUEDE ENTRAR) */}
        {/* debo crear su respectivo archivo dentro de components, para estas rutas */}
        <Route exact path="/productos/crear" component={CreateProduct} />
        <Route exact path="/productos" component={Products} />
        <Route exact path="/" component={Home} />
        <Route exact path="/productos/:id" component={SingleProduct} />

        </Switch>

      </Router>

      </ProductsState>
    </>
  );
}

export default App;
