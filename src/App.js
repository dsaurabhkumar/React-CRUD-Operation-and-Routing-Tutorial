import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import ViewUsers from './components/users/ViewUsers';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/users/add' component={AddUser}></Route>
          <Route exact path='/users/edit/:id' component={EditUser}></Route>
          <Route exact path='/users/:id' component={ViewUsers}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
