import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/Views/Inicio";
import AcercaDe from "./components/Views/Acerca-de";
import Contacto from "./components/Views/Contacto";
import ItemDetail from "./components/Views/itemDetail/itemDetail";
import CartWidget from "./components/Views/CartWidget/CartWidget";
import { GameProvider } from "./components/cartContext/CartContext";
import BuyerInfo from "./components/Views/buyerInfo/buyerInfo";
import BuyConfirmation from "./components/Views/BuyConfirmation/buyConfirmation";

const App = () => {
  return (
    <Router>
      <GameProvider>
        <div className="body">
          <NavBar />
          <Switch>
            <Route path="/inicio" exact component={Inicio} />
            <Route path="/acerca-de" component={AcercaDe} />
            <Route path="/contacto" component={Contacto} />
            <Route path="/detalle/:id" component={ItemDetail} />
            <Route path="/carrito" component={CartWidget} />
            <Route path="/datos-del-usuario" component={BuyerInfo} />
            <Route path="/compra-realizada" component={BuyConfirmation} />
            <section className="recomendados">
              <ItemListContainer />
            </section>
          </Switch>
        </div>
      </GameProvider>
    </Router>
  );
};

export default App;
