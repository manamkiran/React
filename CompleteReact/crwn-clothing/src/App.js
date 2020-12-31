import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";

import "./App.css";

const HatsPage = () => (
  <div>
    <h1>HATS Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
      {/*<HomePage />*/}
    </div>
  );
}

export default App;
