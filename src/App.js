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
import Home from './Component/Home';
import Postpage from './PostHandle/Postpage';
import CreatePost from './Component/CreatePost';

function App(props) {
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
      <Route path="/register">
        <Register></Register>
      </Route>
   
     
      <Route path="/">
     <Home></Home>
      </Route>
    </Switch>
    </>
   </Router>
   
  );
}

export default App;
