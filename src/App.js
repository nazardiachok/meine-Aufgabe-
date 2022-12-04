import objekte from "./objekte.json";
import './App.css';
import Navigation from "./Navigation/Navigation";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/angebote" >

        </Route>
        <Route path="/kontakte" >

        </Route>
      </Routes>
    </div>
  );
}

export default App;
