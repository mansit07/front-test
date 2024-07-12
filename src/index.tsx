import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Collection from './pages/Collection';
import CreateCard from './pages/CreateCard';
import Home from './pages/Home';
import ViewCard from './pages/ViewCard';
import EditUser from './pages/EditUser';

const App = () => (
  <>
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/collection" component={Collection} />
      <Route exact path="/create-card" component={CreateCard} />
      <Route path="/view-card/:id" component={ViewCard} />
      <Route path="/edit-user/:id" component={EditUser} />
    </Switch>
  </Router>
  </>
);

render(<App />, document.getElementById('root'));
