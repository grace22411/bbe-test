import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" exact component={Home} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
