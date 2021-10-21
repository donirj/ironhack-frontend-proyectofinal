import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
// HACER LAS IMPORTACIONES DESPUES DE ESCRIBIR LAS RUTAS
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import CreateProduct from "./components/CreateProduct";
import Home from "./components/Home";
import Products from "./components/Products";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SingleProduct from "./components/SingleProduct";
import Contact from "./components/Contact";
//IMPORTAR ESTADO GLOBAL DE PRODUCTSSTATE
import ProductsState from "./context/Products/ProductsState";
//Users
import UsersState from "./context/Users/UsersState";

import AuthRoute from "./components/Routes/AuthRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import PrivateRoute from "./components/Routes/PrivateRoute";
import Profile from "./components/User/Profile";
import Nosotros from "./components/Nosotros";

function App() {
  return (
    <>
      {/* para darle a toda la app acceso al estado global */}
      <UsersState>
        <ProductsState>
          <Router>
            <Header />
            {/* ESTO ES EL HEADER, SE VA VER ARRIBA SIEMPRE */}

            <Switch>
              {/* RUTAS PRIVADAS */}
              {/* SECCION DE MI PERFIL */}
              {/* SOLO SI ESTAS LOGGEADO PUEDES ACCEDER */}
              <PrivateRoute exact path="/perfil" component={Profile} />

              {/* RUTAS DE AUTENTICACION */}
              {/* NO SE VA PODER ACCEDER A ESTAS RUTAS SI ESTAS LOGGEADO */}
              <AuthRoute exact path="/iniciar-sesion" component={Login} />
              <AuthRoute exact path="/crear-cuenta" component={Signup} />

              {/* RUTAS PUBLICAS (CUALQUIERA PUEDE ENTRAR) */}
              {/* debo crear su respectivo archivo dentro de components, para estas rutas */}
              {/* PERMITIR QUE ESTES LOGGEADO O NO, ACCEDER A LA RUTA */}
              <PublicRoute
                exact
                path="/productos/crear"
                component={CreateProduct}
              />
              <PublicRoute exact path="/contacto" component={Contact} />
              <PublicRoute exact path="/nosotros" component={Nosotros} />
              <PublicRoute exact path="/productos" component={Products} />
              <PublicRoute exact path="/" component={Home} />
              <PublicRoute
                exact
                path="/productos/:id"
                component={SingleProduct}
              />
            </Switch>
            <Footer />
          </Router>
        </ProductsState>
      </UsersState>
    </>
  );
}

export default App;
