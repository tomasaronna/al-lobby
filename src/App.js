import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/Views/Inicio";
import AcercaDe from "./components/Views/Acerca-de";
import Contacto from "./components/Views/Contacto";
import ItemDetail from "./components/Views/itemDetail/itemDetail";

const App = () => {
  return (
    <Router>
      <div className="body">
        <NavBar />
        <Switch>
          <Route path="/inicio" exact component={Inicio} />
          <Route path="/acerca-de" component={AcercaDe} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/detail/:id" component={ItemDetail} />
          <section className="recomendados">
            <ItemListContainer />
          </section>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
