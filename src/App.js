import Categori from "./components/Categori";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import Logo from "./components/Logo";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Logo />
        <Search />
        <Categori />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
