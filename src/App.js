import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pagina1 from "./paginas/Pagina1";
import Pagina2 from "./paginas/Pagina2";
import Pagina3 from "./paginas/Pagina3/Pagina3";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pagina1" component={Pagina1} />
        <Route path="/pagina2" component={Pagina2} />
        <Route path="/pagina3" component={Pagina3} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
