import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shoppage.component";

import { Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
      {/*<HomePage />*/}
    </div>
  );
}

export default App;
