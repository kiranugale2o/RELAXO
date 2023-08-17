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
import Searchuser from './Navbars/Searchuser';
import Navbar from './Navbars/Navbar';

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
   <Navbar></Navbar>
      </Route>
    </Switch>
    </>
   </Router>
   
  );
}

export default App;
