import React from 'react';
import Home from './components/Home'
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from './components/Search'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/search" exact component={Search}/>
      </Switch> 
    </Router>
  );
}

export default App;
