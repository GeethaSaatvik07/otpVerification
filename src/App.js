import { Switch, Route } from "react-router-dom";

import NumberPage from "./components/NumberPage";
import VerifyOtp from "./components/VerifyOtp";
import WelcomePage from "./components/WelcomePage";

import "./App.css";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={NumberPage} />
      <Route exact path="/verify" component={VerifyOtp} />
      <Route exact path="/hello" component={WelcomePage} />
    </Switch>
  );
}

export default App;
