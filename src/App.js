import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import Second from "./components/Second";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/first" />
          </Route>
          <Route path="/first">
            <FirstPage />
          </Route>
          <Route path="/second/:name/:password">
            <Second />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
