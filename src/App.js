import React from 'react';
import FrontPage from "./components/FrontPage/FrontPage";
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={FrontPage} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </main>
  );
}

export default App;
