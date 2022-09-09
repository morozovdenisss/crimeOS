import "semantic-ui-css/semantic.min.css";
import AdvocateDBoard from "./dashboards/Advocate/AdvocateDBoard";
import A2JDBoard from "./dashboards/A2J/A2JDBoard";
import LoginPage from "./login/LoginPage";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./private-route";
import React, { useState } from "react";

// Each of the dashboards house their own protected routes, whereas the login page is the default round.
// Note that we specify exact path vs path. This is important as any rouge url will go directly back to
// the login page.

function App() {
  const [role, setRole] = useState(localStorage.getItem("role"));

  return (
    <div className="App">
      <Switch>
        <PrivateRoute
          exact
          path="/free"
          component={() => <AdvocateDBoard role={role} setRole={setRole} />}
        />
        <PrivateRoute
          exact
          path="/admin"
          component={() => <A2JDBoard role={role} setRole={setRole} />}
        />
        <Route path="/" component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
