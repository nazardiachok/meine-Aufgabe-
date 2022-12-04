import objekte from "./objekte.json";
import './App.css';
import Navigation from "./Navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import Angebote from "./pages/Angebote";
import Kontakte from "./pages/Kontakte";
import { useState } from "react";

function App() {

  const[objects, setObjects] =useState(objekte);
  console.log(objects);

  return (
    <div className="App">
      <></>
      <Navigation></Navigation>
      <Routes>
        <Route path="/angebote" 
        element={<Angebote objects={objects} 
        ></Angebote>} >

        </Route>
        <Route path="/kontakte" 
        element={<Kontakte 
        ></Kontakte>} >
          </Route>
      </Routes>
    </div>
  );
}

export default App;
