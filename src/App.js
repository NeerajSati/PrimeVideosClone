import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import Kids from './components/Kids';
import Moviespage from './components/Moviespage';
import Tvshows from './components/Tvshows';
import Video from './components/Video';
import Search from './components/Search';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
    <Header />
    
    <Switch>
    <Route path="/login">
        <Login/>
      </Route>
      <Route path="/detail/:id/:media">
        <Detail/>
      </Route>
      <Route path="/tvshows">
        <Tvshows/>
      </Route>
      <Route path="/video/:key">
        <Video/>
      </Route>
      <Route path="/movies">
        <Moviespage/>
      </Route>
      <Route path="/kids">
        <Kids/>
      </Route>
      <Route path="/search/:searchtext">
        <Search/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>

    </Router>
    </div>
  );
}

export default App;
