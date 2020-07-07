import React from 'react';
import classes from './App.module.css';
import CustomRoute from './Components/CustomRoute';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Store';
import Home from './Pages/Home';
import Academics from './Pages/Academics';
import Admission from './Pages/Admission';
import Research from './Pages/Research';
const App = () => {

  return (
    <Provider store={store}>
      <HashRouter>
        <div className={classes.App}>
          <Switch>
          <CustomRoute path="/Home" component={Home} />
            <CustomRoute path="/Academics" component={Academics} />
            <CustomRoute path="/Research" component={Research} />
            <CustomRoute path="/Admission" component={Admission} />
            <Route path="/">
            <CustomRoute path="/Home" component={Home} />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
