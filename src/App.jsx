import "./App.css";
import { Route, Switch } from "react-router-dom";
import Welcome from "./assets/components/Welcome/Welcome";
import Home from "./assets/components/Home/Home";
import SignUp from "./assets/components/Signup/SignUp";
import { useState } from "react";

function App() {
  const [kullanici, setKullanici] = useState(null);
  return (
    <Switch>
      <Route exact path="/">
        <Welcome setKullanici={setKullanici} />
      </Route>
      <Route path="/home">
        <Home kullanici={kullanici} />
      </Route>
      <Route path="/signup">
        <SignUp setKullanici={setKullanici} />
      </Route>
    </Switch>
  );
}

export default App;
