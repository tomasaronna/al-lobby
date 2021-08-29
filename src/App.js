import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";

const App = () => {
  return (
    <div className="body">
      <NavBar />
      <section className="recomendados">
        <ItemListContainer />
      </section>
    </div>
  );
};

export default App;
