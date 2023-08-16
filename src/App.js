import logo from './logo.svg';
import './App.css';
import Register from  './authorizationpart/Register';
import Singup from './authorizationpart/Singup';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './authorizationpart/Login';
import Profile from './Component/Profile';

function App() {
  return (

   <Router>
    <>
   
    <Switch>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Route path="/singup">
        <Singup></Singup>
      </Route>
      <Route exact path="/">
     <Profile></Profile>
      </Route>
    </Switch>
    </>
   </Router>
   
  );
}

export default App;
